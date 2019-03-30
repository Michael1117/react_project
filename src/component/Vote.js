// 函数式组件声明
import React from 'react'

export  default function Vote(props) {
    console.log(props.children);
    return <section className={'panel panel-default'} style={{width: '50%', margin: '20px auto'}}>
        <div className={'panel-heading'}>
            <h3 className={'panel-title'}>
                {props.title}
            </h3>
        </div>
        <div className={'panel-body'}>
            支持人数：<span>0</span>
            <br/>
            反对人数：<span>0</span>
            <br/>
            比率<span>0%</span>
            <br/>
            {
                React.Children.map(props.children, item => {
                    return item 
                })
            }
        </div>
        <div className={'panel-footer'}>
            <button className={'btn btn-success'}>支持</button>
            &nbsp; &nbsp;
            <button className={'btn btn-danger'}>反对</button>
        </div>
        {/*存放自己调取组件时候，额外扩展的标记*/}
        {props.children}
    </section>
}