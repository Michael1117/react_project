import React from 'react'
import PropTypes from "prop-types";

export default class VoteFooter extends React.Component{

    static contextTypes = {
        n: PropTypes.number,
        m: PropTypes.number
    }
    constructor(props, context) {
        super(props, context)
        console.log(context);
    }

    render() {
        return <div className={'panel-footer'} >
            <button className={'btn btn-success'}>支持</button>
            &nbsp;&nbsp;
            <button className={'btn btn-danger'}>反对</button>
        </div>
    }
}