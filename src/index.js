import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './component/Dialog.js'

import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<div>
    <Dialog content="哈哈哈哈"/>
    <Dialog type={2} content="呵呵呵呵呵"/>
    <Dialog type="请登录" content = {'新的jsx语法'}>
        <button type="button" className="btn btn-success">登录</button>
        <button type="button" className="btn btn-danger">取消</button>
    </Dialog>
</div>, document.querySelector('#root'));


