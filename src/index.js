import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'

class Temp extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Michael'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({text: 'Hello World'})
        }, 1000)
    }

    render() {
        let {text} = this.state;
        return <section className="panel panel-default">
            <div className="panel-heading">
                <input onChange={ev => {
                    /**/
                    this.setState({
                        text: ev.target.value
                    })
                }} type="text" className="form-control" value={text}/>
            </div>
            <div className="panel-body">
                {text}
            </div>
        </section>
    }
}

ReactDOM.render(<Temp/>, document.querySelector('#root'))