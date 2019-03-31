/*
* store
*   reducer 存放每一个模块的reducer
*       vote.js
*       personal.js
*       ...
*       index.js 把每一个模块的reducer 最后合并成为一个reducer
*   action 存放每一个模块需要进行的派发任务
*       vote.js
*       personal.js
*       ...
*       index.js  所有模块的action进行合并
*   action-types.js  所有派发任务的行为标识 都在这里进行 宏观管理
*   index.js  创建store
* */

import {createStore} from 'redux';
import reducer from './reducer';

let store = createStore(reducer);

export default store;