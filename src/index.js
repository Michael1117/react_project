import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Vote from "./component/Vote/Vote";

import {createStore} from 'redux'


// 创建容器 需要把reducer 传递进来  (记录了所有状态的消息)
let reducer = (state = {n: 0, m: 0}, action) => {
    //let {type} = action;
    switch (action.type) {
        case 'VOTE_SUPPORT':
            state = {...state, n: state.n + 1}
            break;
        case 'VOTE_AGAINST':
            state = {...state, m: state.m + 1}
            break
    }

    return state;  // 只有把最新的state 返回 原有的状态才会被修改
}

let store = createStore(reducer)

ReactDOM.render(
    <main>
        <Vote title={'床前明月光'} count={{
            n: 10,
            m: 78
        }}
        store={store}/>
    </main>
    , document.querySelector('#root'))