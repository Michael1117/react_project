import React from 'react'

export default class VoteBody extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className={'panel-body'}>
            支持人数：<span>0</span>
            <br/>
            反对人数：<span>0</span>
            <br/>
            比率：<span>0.00%</span>
            <br/>
        </div>
    }
}