import React from 'react'

export default class VoteBody extends React.Component {
    constructor(props) {
        super(props)

        //console.log(this.props);
        //let {store} = this.props
        let {n, m} = this.props.store.getState().vote;

        this.state = {n, m}
    }

    componentDidMount() {
        this.props.store.subscribe(() => {
            let {n, m} = this.props.store.getState().vote;

            this.setState({n, m})
        })
    }

    render() {
        let {n, m} = this.state,
            rate = (n / (n + m)) * 100;
        if (isNaN(rate)) rate = 0

        return <div className={'panel-body'}>
            支持人数：<span>{n}</span>
            <br/>
            反对人数：<span>{m}</span>
            <br/>
            比率：<span>{rate.toFixed(2) + '%'}</span>
            <br/>
        </div>
    }
}