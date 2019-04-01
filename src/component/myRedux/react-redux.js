import React from 'react';
import PropTypes from 'prop-types'

/*
* provider: 当前项目的 "根"组件
*   1. 接收通过属性传递进来的store，把store过载到上下文中 这样当前项目中任何一个组件中
*   2. 在组件的render中 把传递给provider 的子元素渲染
* */
class Provider extends React.Component {
    // 设置上下文信息类型
    static childContextTypes = {
        store: PropTypes.object
    };

    // 设置上下文信息值
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return this.props.children;
    }
}


function connect(mapStateToProps, mapDispatchToProps) {
    /*
    * return 返回一个新的connectHOT函数
    *
    * connectHOT
    *       传递进来的是要操作的组件 我们需要把指定的属性和方法都挂载到当前组件的属性上
    * @return
    *        返回一个新的组件，在代理组件中，我们要获取provider在上下文中存储的store，紧接着获取store中的state和dispatch，把mapStateToProps, mapDispatchToProps回调函数执行，接收返回的结果，再把这些挂载到Component这个要操作组件的属性上
    * */
    return function connectHOT(Component) {
        return class Proxy extends React.Component {
            // 获取上下文中的store
            static contextTypes = {
                "store": PropTypes.object
            };

            // 获取store中的state/dispatch，把传递的两个回调函数执行，接收返回的结果
            constructor(props, context) {
                super(props, context);

                this.state = this.queryMountProps();

            }

            componentDidMount() {
                this.context.store.subscribe(() => {
                    this.setState(this.queryMountProps())
                })
            }

            // 渲染component组件，并且把获取的信息(状态，方法) 挂载到组件属性上
            render() {

                return <Component {...this.state}/>
            }

            // 从redux 中获取最新的消息 基于回调函数筛选 ， 返回的是需要挂载到组件属性上的信息
            queryMountProps = () => {
                let {store} = this.context,
                    state = store.getState();

                let propsState = typeof mapStateToProps === 'function' ? mapStateToProps(state) : {};

                let propsDispatch = typeof mapDispatchToProps === 'function' ? mapDispatchToProps(store.dispatch) : {}
                return{
                    ...propsState,
                    ...propsDispatch
                }
            }
        }
    }
}

export {
    Provider,
    connect
}