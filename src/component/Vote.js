// 函数式组件声明
import React from 'react'

// 基于类创建组件 (基于继承component类实现的)
export default class Vote extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return <section className={'panel panel-default'} style={{width: '50%', margin: '20px auto'}}>
            <div className={'panel-heading'}>
                <h3 className={'panel-title'}>
                    {this.props.title}
                </h3>
            </div>
            <div className={'panel-body'}>
                支持人数：<span ref={'support'}>0</span>
                <br/>
                反对人数：<span ref={'against'}>0</span>
                <br/>
                比率: <span ref={'Rate'}>0%</span>
                <br/>

            </div>
            <div className={'panel-footer'}>
                <button className={'btn btn-success'} onClick={this.support}>支持</button>
                &nbsp; &nbsp;
                <button className={'btn btn-danger'} onClick={this.against}>反对</button>
            </div>
            {/*存放自己调取组件时候，额外扩展的标记*/}
            {this.props.children}


        </section>


    }

    support = ev => {
        //console.log(this.refs);
        this.refs.support.innerHTML++
        this.computed()
    }
    against = ev => {
        //console.log(this.refs);
        this.refs.against.innerHTML++
        this.computed()
    }

    computed = ev => {
        let {support, against, Rate} = this.refs,
            n = parseFloat(support.innerHTML),
            m = parseFloat(against.innerHTML),
            ra = (n/(n+m)) * 100

        if(isNaN(ra)) ra = 0
        Rate.innerHTML = ra.toFixed(2) + '%'
    }
}