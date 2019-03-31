import React from 'react'
import * as type from '../../store/action-types'

export default class VoteFooter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {store: {dispatch}} = this.props;
        return <div className={'panel-footer'}>
            <button className={'btn btn-success'} onClick={() => {
                dispatch({
                    type: type.VOTE_SUPPORT
                })
            }
            }>支持
            </button>
            &nbsp;&nbsp;
            <button className={'btn btn-danger'} onClick = {() => {
                dispatch({
                    type: type.VOTE_AGAINST
                })

            }}>反对
            </button>
        </div>
    }
}