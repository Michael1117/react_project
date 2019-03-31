/*
* createStore: 创建redux 容器
*   @params
*       reducer: 函数
*   @return
*       store: {
*           getState,
*           dispatch,
*           subscribe
*         }
* */

function createStore(reducer) {
    // 创建一个store ,state 用来存储管理的状态信息 listenAry用来存储事件池中的方法
    //
    let state,
        listenAry = [];

    // => dispatch 基于dispatch实现任务派发
    function dispatch(action) {
        // 1.执行reducer，修改容器中的状态信息(接收reducer的返回值，把返回的信息替换原有的state)，指的注意的是：
        // 我们是把返回值区别替换state, 所以要求reducer中在修改状态之前，要先把原始的状态信息空一份，在进行单个的属性修改
        state = reducer(state, action);

        // 2.容器中状态信息经过 reducer修改后， 通知事件池中的方法依次执行
        for (let i = 0; i < listenAry.length; i++) {
            let item = listenAry[i];
            if (typeof item === 'function') {
                item()
            } else {
                listenAry.splice(i, 1);
                i--;
            }

        }
    }

    dispatch({type: '_INIT_DEFAULT_STATE'})

    // getState: 获取容器中的状态信息
    function getState() {
        return JSON.parse(JSON.stringify(state))  // 深度克隆
    }

    // subscribe 向事件池中添加方法
    function subscribe(fn) {

        // 1.向容器中追加方法 先验证
        let isExit = listenAry.includes(fn);

        !isExit ? listenAry.push(fn) : null;
        listenAry.push(fn)

        // 2.返回一个方法： 执行返回的方法会把当前绑定的方法在事件池中移除掉
        return function unsubscribe() {
            let index = listenAry.indexOf(fn);
            listenAry[index] = null;
            //listenAry.splice(index, 1)
        }
    }

    return{
        dispatch,
        getState,
        subscribe
    }
}

// 用法
let reducer = (state = {}, action) => {
    // state: 原有状态信息
    // action: 派发任务时候传递的行为对象
    switch (action.type) {
        // ... 根据type执行不同的state修改操作

    }

    return state        // 返回的state会替换原有的state
}
let store = createStore(reducer)  // create的时候把reducer传进来，但是此时reducer并没有执行，
// 只有dispatch的时候 通过执行reducer修改容器中的状态

//store.dispatch({})


/*
* combineReducers: reducer合并的方法
* @params
*   对象， 对象中包含了每一个版本对象的reducer => {xxx: function reducer...}
* @return
*   返回的是一个新的reducer函数 (把这个值赋值给 create-store)
*
*  特殊处理： 合并reducer之后，redux容器中的state 也变为以对应对象管理的模式 => {xxx: {}.....}
* */
function combineReducers(reducers) {
    // reducers: 传递进来的reducer对象集合
    // dispatch派发执行的时候 执行的是返回的reducer, 这里也要返回一个最终的state对象替换原有的state,而且这个state中包含每个模块的状态信息  => {vote: ..., personal: ...}
    return function reducer(state = {}, action) {
        // => 我们所谓的reducer合并 其实就是dispatch派发的时候 把每一个模块的reducer都单独执行一遍，把每一个模块返回的状态最后汇总在一起，替换容器中的状态信息
        let newState = {};

        for(let key in reducers) {
            if(!reducers.hasOwnProperty(key)) break;
            // reducers[key]: 每个模块单独的reducer
            // state[key]: 当前模块在redux容器中存储的状态信息
            // 返回值是当前模块最新的状态 把它放在newState中
            newState[key] = reducers[key](state[key], action)
        }
        return newState;
    }
}

store = createStore(reducer)

store.dispatch({type: 'xxx'})