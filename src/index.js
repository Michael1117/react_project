import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import Vote from './component/Vote'
/*
* 真实项目中使用react 都是基于组件或者模块开发的
*   1.函数式创建组件
*   2.基于类创建组件
* */
ReactDOM.render(<div>
    <Vote title={'床前明月光'}/>
    <Vote title={'举头望明月'}>
        <p>低头思故乡</p>
    </Vote>
</div>, document.querySelector('#root'))
