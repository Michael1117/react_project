import React from 'react';

export default class VoteBase extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <div className='panel-heading'>
                <h3 className='panel-title'>
                    标题
                </h3>
            </div>
            <div className='panel-body'>
                支持人数: <span>0</span>
                <br/>
                <br/>
                反对人数: <span>0</span>
            </div>
        </div>
    }
}