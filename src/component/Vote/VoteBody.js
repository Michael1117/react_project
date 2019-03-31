import React from 'react'
import PropTypes from 'prop-types'

export default class VoteBody extends React.Component{
    static contextTypes = {
        n: PropTypes.number,
        m: PropTypes.number
    }

    constructor(props, context){
        super(props, context)

        console.log(this);
        console.log(context);
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