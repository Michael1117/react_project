import React from 'react'

export default class VoteBody extends React.Component {
    constructor(props) {
        super(props)

        console.log(this.props);
        let {store: {getState}} = this.props,
            {n, m} = getState();

        this.state = {n, m}
    }

    componentDidMount() {
        let {store: {getState, subscribe}} = this.props;

        /*let unsubscribe =*/ subscribe(() => {
            let {n, m} = getState();
            this.setState({
                n,
                m
            })
        })

        //unsubscribe  解绑
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