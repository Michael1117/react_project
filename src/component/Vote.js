// 函数式组件声明
import React from 'react'

// 基于类创建组件 (基于继承component类实现的)
export default class Vote extends React.Component {
    constructor(props) {
        super(props)

        // 初始化状态
        this.state = {
            n: 0,
            m: 0
        }
    }

    render() {
        let {n, m} = this.state
        let rate = (n / (n + m)) * 100;
        //isNaN(rate) ? rate = 0 : '';
        if(isNaN(rate)) rate = 0


        return <section className={'panel panel-default'} style={{width: '50%', margin: '20px auto'}}>
            <div className={'panel-heading'}>
                <h3 className={'panel-title'}>
                    {this.props.title}
                </h3>
            </div>
            <div className={'panel-body'}>
                支持人数：<span>{m}</span>
                <br/>
                反对人数：<span>{n}</span>
                <br/>
                比率: <span>{rate.toFixed(2) + '%'}</span>
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
        this.setState({
            n: this.state.n + 1
        })
    }
    against = ev => {
        this.setState({
            m: this.state.m + 1
        })
    }
}