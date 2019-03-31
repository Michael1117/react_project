import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Vote from "./component/Vote/Vote";

import store from './store'

ReactDOM.render(
    <main>
        <Vote title={'床前明月光'} count={{
            n: 10,
            m: 78
        }}
        store={store}/>
    </main>
    , document.querySelector('#root'))