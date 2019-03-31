import React from 'react'
export default class VoteFooter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className={'panel-footer'}>
            <button className={'btn btn-success'} >支持
            </button>
            &nbsp;&nbsp;
            <button className={'btn btn-danger'}>反对
            </button>
        </div>
    }
}