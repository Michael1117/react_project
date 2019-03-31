import React from 'react'
//import PropTypes from 'prop-types'
import '../static/css/banner.css'

export default class Banner extends React.Component {
    static defaultProps = {
        data: [],
        internal: 3000,
        step: 1,
        speed: 300,
        style: {}
    }

    constructor(props) {
        super(props);

        // 初始化状态
        let {step, speed} = this.props
        this.state = {
            step,
            speed
        }
    }

    componentWillMount() {
        /*数据克隆*/
        let {data} = this.props,
            cloneData = data.slice(0);

        cloneData.push(data[0]);  // 第一张 添加到最后
        cloneData.unshift(data[data.length - 1]); // 最后一张 添加到开头

        this.cloneData = cloneData;
    }

    componentDidMount() {
        this.autoTimer = setInterval(this.moveRight, this.props.interval)
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        // 更新之前
        // 向右边界判断  如果当前最新修改的值  已经大于 最大的索引 我们应该立即回到真实的 第一张
        if (nextState.step > (this.cloneData.length - 1)) {
            this.setState({
                step: 1,
                speed: 0
            })
        }
        // 向左边界判断: 如果当前最新修改的索引已经小于0，让其立即回到倒数第二张图片位置(真实最后一张)
        if(nextState.step < 0) {
            this.setState({
                step: this.cloneData.length - 2,
                speed: 0
            })
        }
    }

    /*componentDidUpdate(prevProps, prevState, snapshot) {
        /!*立即回到第一张 之后 立即运动到第二张*!/
        let {step, speed} = this.state;
        if (step === 1 && speed === 0) {
            setTimeout(() => {
                this.setState({
                    step: step + 1,
                    speed: this.props.speed
                }, 0)
            })
        }
    }*/

    componentDidUpdate(prevProps, prevState, snapshot) {
        // 向右边界判断
        /*立即回到第一张 之后 立即运动到第二张*/
        let {step, speed} = this.state;
        if (step === 1 && speed === 0) {
            let delayTimer = setTimeout(()=> {
                clearTimeout(delayTimer);
                this.setState({
                    step: step + 1,
                    speed: this.props.speed
                })
            }, 0)
        }
        // 向左边界判断: 立即回到 "倒数第二张" 后， 我们应该让其向回再运动一张
        if(step === this.cloneData.length -2 && speed === 0) {
            let delayTimer = setTimeout(()=> {
                clearTimeout(delayTimer);
                this.setState({
                    step: step - 1,
                    speed: this.props.speed
                })
            }, 0)
        }

    }

    render() {
        /* a[href='javascript:;'].arrow*2 */
        let {data, style} = this.props,
            {cloneData} = this;
        if (data.length === 0) return '';

        // 计算wrapper 样式
        let {step, speed} = this.state,
            wrapperStyle = {
                width: `${cloneData.length * 1000}px`,
                transform: `translateX(${-step * 1000}px)`,
                transition: `transform ${speed}ms`
            }

        return <section className={'container'}  onMouseEnter={this.movePause} onMouseLeave={this.movePlay}
                onClick={this.handleClick}>
            <ul className={'wrapper'} style={wrapperStyle} onTransitionEnd={
                // onTransitionEnd 当切换完成 再去执行下一次切换任务
                ()=>{this.isRun = false}}>
                {
                    cloneData.map((item, index) => {
                        let {pic, title} = item;
                        return <li key={index}>
                            <img src={pic} alt={title}/>
                        </li>
                    })
                }
            </ul>
            <ul className={'focus'} onClick={this.focusHandle}>
                {data.map((item, index) => {
                    let tempIndex = step - 1;

                    if(step === 0) tempIndex = data.length - 1

                    if(step === cloneData.length - 1) tempIndex = 0
                    return <li  key={index} className={index === tempIndex ? 'active' : ''}>

                    </li>
                })}
            </ul>
            <a href="javascript:;" className="arrow arrowLeft"/>
            <a href="javascript:;" className="arrow arrowRight"/>
        </section>
    }

    // 向右切换 ： 自动轮播 或者点击 切换按钮
    moveRight = () => {
        this.setState({
            step: this.state.step + 1
        })

    }

    // 自动轮播的暂停 和 开启
    movePause = () => clearInterval(this.autoTimer)

    movePlay = () => this.autoTimer = setInterval(this.moveRight, this.props.interval)

    // 事件委托
    handleClick = ev => {
        let target = ev.target,
            tarTag = target.tagName,
            tarClass = target.className;

        // 左右切换
        if(tarTag === 'A' && /(^| +)arrow( +|$)/.test(tarClass)) {
            // this.run 防止过快点击
            if(this.isRun) return;
            this.isRun = true;
            // right
            if(tarClass.indexOf('arrowRight') >=0 ) {
                this.moveRight();
                return;
            }
            // left
            this.setState({
                step: this.state.step - 1
            })
            return
        }
    }


}