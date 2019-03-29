import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'

class Vote extends React.Component {
    // 组件传递的属性是只读的  我们为其设置默认值和相关规则
    static defaultProps = {}
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)
        // INIT STATE
        this.state = {
            n: 0,  // 支持人数
            m: 0   // 反对人数
        }
    }
    support = ev => {
        //console.log(this.refs);
        let {spanLeft} = this.refs;

        spanLeft.innerHTML ++
        this.computed()
    }

    against = ev => {
        let {spanRight} = this.refs;

        spanRight.innerHTML ++
        this.computed()
    }

    computed = () => {
        let {spanLeft, spanRight, spanRate } = this.refs,
            n = parseFloat(spanLeft.innerHTML),
            m = parseFloat(spanRight.innerHTML),
            rate = ( n+m) === 0 ? '0%' : ((n / (n+m) * 100).toFixed(2) + '%')
        spanRate.innerHTML = rate;

    }
    render() {
        let {n, m} = this.state,
            rate = (n + m) === 0 ? '0%' : ((n/(n+m) * 100).toFixed(2) + '%')
        return <div className="pane panel-default" style={{width: '60%', margin: '20px auto'}}>
            <div className="panel-heading">
                <h3 className="panel-title">
                    {this.props.title}
                </h3>
            </div>
            <div className="panel-body">
                支持人数：<span ref="spanLeft">0</span>
                <br/>
                <br/>
                反对人数：<span ref="spanRight">0</span>
                <br/>
                <br/>
                支持率：<span ref="spanRate">0</span>
            </div>
            <div className="panel-footer">
                <button className="btn btn-success" onClick={this.support}>支持</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-danger" onClick={this.against}>反对</button>
            </div>
        </div>
    }
}

ReactDOM.render(<main>
    <Vote title="世界杯小组赛法国VS秘鲁，法国对必胜！"/>
    <Vote title="世界杯小组赛阿根廷VS克罗地亚，壮哉我大梅西！"/>
</main>, document.querySelector('#root'))

