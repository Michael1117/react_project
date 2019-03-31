import React from 'react'
import PropTypes from 'prop-types'
import VoteHead from "./VoteHead";
import VoteBody from "./VoteBody";
import VoteFooter from "./VoteFooter";

export default class Vote extends React.Component {
    static defaultProps = {
        "title": '举头望明月',
        count: {
            n: 0,
            m: 0
        }
    }
    /*
    * 在父组件中
    *   1. 设置子组件上下文属性值类型
    *    static childContextTypes = {}
    *   2. 获取子组件的上下文(设置子组件的上下文属性信息)
    *    getChildContext() {}
    *   3.
    *
    * */
    static childContextTypes = {
        n: PropTypes.number,
        m: PropTypes.number,
        callBack: PropTypes.func
    }

    getChildContext() {
        console.log('ok');
        let {n = 0, m = 0} = this.state;
        // return的是啥， 相当于给子组件上下文设置成为啥
        return {
            n,
            m,
            callBack: this.updateContext
        }
    }

    constructor(props) {
        super(props)
        // 先把属性的值给状态  因为属性的值不能改 状态的值能改
        let {count: {n = 0, m = 0}} = this.props;
        this.state = {
            n,
            m
        }
    }

    updateContext = type => {
        //
        if (type === 'support') {
            this.setState({
                n: this.state.n + 1
            })
        } else {
            this.setState({
                m: this.state.m + 1
            })
        }
    }

    render() {
        let {title, count} = this.props;
        return (
            <div className={'panel panel-default'} style={{width: '30%', margin: '20px auto'}}>
                <VoteHead title={title}/>
                <VoteBody/>
                <VoteFooter/>
            </div>
        );
    }
}