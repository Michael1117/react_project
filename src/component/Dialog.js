/*
* 函数式声明组件
* */
import React from 'react'

export default function Dialog(props) {

    let {con, lx = 0, children, style} = props,
        title = lx === 0 ? '系统提示' : '系统警告'
    return <section>
        <h2 >{title}</h2>
        <div style={style}>{con}</div>
        {/*{children}*/}
        {React.Children.map(children, item => item)}
    </section>
}