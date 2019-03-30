import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'

class A extends React.Component {
    //static defaultProps = {}
    constructor() {
        super();
        console.log('1=constructor')

        this.state = {n: 1}
    }

    componentWillMount() {
        console.log('2=will-mount:第一次渲染之前,componentWillMount', this.refs.HH)

        setInterval(() => {
            this.setState({
                n: this.state.n + 1
            })
        }, 4000)
    }

    componentDidMount() {
        console.log('4=Did-mount:第一次渲染之后,componentDidMount-----', this.refs.HH)

    }

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        //console.log(nextContext);
        console.log('5=是否允许更新, shouldComponentUpdate', nextState.n);
        if (nextState.n > 3) {
            return false
        }
        return true
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('6=组件更新之前, componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log(snapshot);
        console.log('8=组件更新之后, componentDidUpdate-----');
    }*/
    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log(snapshot);
        console.log('8=组件更新之后, componentDidUpdate-----');
    }


    render() {
        console.log('render');
        return <div ref='HH'>
            {this.state.n}
        </div>
    }
}


ReactDOM.render(<A/>, document.querySelector('#root'))