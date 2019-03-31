import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import VoteBase from "./component/vote/VoteBase";
import VoteHandle from "./component/vote/VoteHandle";

ReactDOM.render(<section className='panel panel-default' style={{width: '50%'}}>
    <VoteBase/>
    <VoteHandle/></section>, document.querySelector('#root'))