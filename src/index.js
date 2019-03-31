import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import ReactSwipe from 'react-swipe'
import './static/css/reset.min.css'
import './static/css/index.css'
import Vote from "./component/Vote/Vote";


ReactDOM.render(
    <main>
        <Vote title={'床前明月光'} count={{
            n: 10,
            m: 78
        }}/>
    </main>
   , document.querySelector('#root'))