import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Vote from "./component/Vote/Vote";


// 全局下挂载一个容器来实现信息共享和通信
let myRedux = (function anonymous() {
    let stateObj = {},
        listenAry = [];

    function updateState(callBack) {
        // callBack: 回调函数中一定是修改并且返回最新的状态信息的 用返回的状态信息 替换原有的状态信息
        let newObj = callBack(stateObj);
        stateObj = {...stateObj, ...newObj}

        // 当状态修改 通知 计划表中的方法执行
        listenAry.forEach(item => {
            if (typeof item === 'function') {
                item()
            }
        })
    }

    // 获取状态
    function getState() {
        return stateObj
    }

    // 事件池中加方法
    function subscribe(fn) {
        for (let i = 0; i < listenAry.length; i++) {
            const item = listenAry[i];

            if(item === fn) return

        }

        listenAry.push(fn)
    }

    return {
        updateState,
        getState,
        subscribe
    }
})()

ReactDOM.render(
    <main>
        <Vote title={'床前明月光'} count={{
            n: 10,
            m: 78
        }} myRedux = {myRedux}/>
    </main>
    , document.querySelector('#root'))