import React from 'react'
import PropTypes from 'prop-types'
import '../static/css/banner.css'

export default class Banner extends React.Component {
    // => 设置属性的默认值和规则
    static defaultProps = {
        data: [],
        internal: 3000,
        step: 1,
        speed: 300
    }

    static propTypes = {
        data: PropTypes.array,
        interval: PropTypes.number,
        step: PropTypes.number,
        speed: PropTypes.number
    }

    constructor(props) {
        super(props);

        // init state
        let {step, speed} = this.props;

        this.state = {
            step,
            speed
        }
    }

    componentWillMount() {
        // 数据克隆
        let {data} = this.props,
            cloneData = data.slice(0);
        cloneData.push(data[0]);
        cloneData.unshift(data[data.length - 1])
        this.cloneData = cloneData;  // 挂载到实例上供其他方法调用
    }

    // => 自动轮播
    componentDidMount() {
        // => 把定时器返回值挂载到实例上 方便后期清除 结束自动轮播
        this.autoTimer = setInterval(this.autoMove, this.props.interval);

    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        // => 边界判断： 如果最新修改的step索引大于最大索引 (说明此事已经是末尾了，不能再向后走了)，我们让其立刻(无动画)
        // 回到索引为1的位置
        if (nextState.step > this.cloneData.length - 1) {
            this.setState({
                step: 1,
                speed: 0
            })
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // 只有是从克隆的第一张 立即切换到真实第一张后 我们才让其从当前第一张运动到第二张
        let {step, speed} = this.state
        if (step === 1 && speed === 0) {
            let delayTimer = setTimeout(() => {
                clearTimeout(delayTimer)
                this.setState({
                    step: step + 1,
                    speed: this.props.speed
                })
            }, 0)
        }

    }

    render() {
        let {data} = this.props,
            {cloneData} = this;

        if (data.length === 0) return '';

        // 控制wrapper 的样式
        let {step, speed} = this.state;
        let wrapperSty = {
            width: cloneData.length * 1000 + 'px',
            left: -step * 1000 + 'px',
            transition: `left ${speed}ms linear 0ms`
        };

        return (
            //a[href='javascript:;'].arrow*2
            <div className="container">
                <ul className="wrapper" style={wrapperSty}>
                    {cloneData.map((item, index) => {
                        let {title, pic} = item;
                        return <li key={index}>
                            <img src={pic} alt={title}/>
                        </li>
                    })}
                </ul>
                <ul className="focus">
                    {data.map((item, index) => {
                        // tempIndex: 临时焦点索引 step: 为图片索引 0 1 2 3 4
                        let tempIndex = step - 1;
                        //(step === 0) ? (tempIndex = data.length - 1) : '';
                        if(step === 0) tempIndex = data.length - 1

                        // cloneData.length = 5
                        if(step === cloneData.length - 1) tempIndex = 0


                        //step === (cloneData.length - 1) ? tempIndex = 0 : '';

                        return <li key={index} className={tempIndex === index ? 'active' : ''}></li>
                    })}
                </ul>
                <a href="javascript:;" className="arrow arrowLeft"></a>
                <a href="javascript:;" className="arrow arrowRight"></a>
            </div>
        );
    }

    // 向右切换
    autoMove = () => {
        this.setState({
            step: this.state.step + 1
        })
    }
}