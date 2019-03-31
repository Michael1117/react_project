import React from 'react'
import VoteHead from "./VoteHead";
import VoteBody from "./VoteBody";
import VoteFooter from "./VoteFooter";

export default class Vote extends React.Component {
    constructor(props) {
        super(props)

        let {count: {n, m}, myRedux} = this.props
        myRedux.updateState(state => {
            return {
                ...state,
                n,
                m
            }
        });
    }

    render() {

        return (
            <div className={'panel panel-default'} style={{width: '30%', margin: '20px auto'}}>
                <VoteHead title={this.props.title}/>
                <VoteBody myRedux={this.props.myRedux}/>
                <VoteFooter myRedux={this.props.myRedux}/>
            </div>
        );
    }
}