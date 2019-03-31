import React from 'react';
import PropType from 'prop-types'

/*
* provider: 当前项目的 "根"组件
*   1. 接收通过属性传递进来的store，把store过载到上下文中 这样当前项目中任何一个组件中
*   2.
* */
class Provider extends React.Component{
    // 设置上下文信息
    static childContextTypes = {

    };
    constructor(props) {
        super(props)
    }
}

export {
    Provider
}