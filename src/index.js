import React from 'react';
import ReactDOM from 'react-dom';

//import qs from 'qs';
import './static/less/index.scss'

/* console.log(qs.parse('name=Michael&age=19')) */


var data = 'Michael';

/*  不建议 直接写 document.body
ReactDOM.render(<div id="box">Hello World {data}</div>, document.body, () => {
    let oBox = document.querySelector('#box');
    console.log(oBox.innerHTML)
}) */

ReactDOM.render(<div id="box">Hello World {data}</div>, document.querySelector('#root'), () => {
    let oBox = document.querySelector('#box');
    console.log(oBox.innerHTML)
})