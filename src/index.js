import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'

class Head extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="panel-heading">
                <h3 className="panel-title">
                    点击次数：{this.props.count}
                </h3>
            </div>
        );
    }
}


class Body extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="panel-body">
                <button className="btn btn-success" onClick={this.props.callBack}>点我啊</button>
            </div>
        );
    }
}

class Panel extends React.Component{
    constructor() {
        super()
        this.state = {
            n: 0
        }
    }

    fn = () => {
        // => 修改panel的状态信息
        this.setState({
            n: ++this.state.n
        })
    }
    render() {
        return <section className="panel panel-default" style={{width: '50%', margin: '20px auto'}}>
            <Head count={this.state.n}/>
            {/*父组件*/}
            <Body callBack={this.fn}/>
        </section>
    }
}

ReactDOM.render(<Panel/>, document.querySelector('#root'))