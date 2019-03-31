import React from 'react'
import VoteHead from "./VoteHead";
import VoteBody from "./VoteBody";
import VoteFooter from "./VoteFooter";

export default class Vote extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let {store} = this.props;

        return (
            <div className={'panel panel-default'} style={{width: '30%', margin: '20px auto'}}>
                <VoteHead title={this.props.title}/>
                <VoteBody store={store}/>
                <VoteFooter store={store}/>
            </div>
        );
    }
}