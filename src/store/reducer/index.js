/*
* 把每一个模块单独设定的reducer 函数最后合并成为总的reducer
*
* 为了保证合并reducer过程中 每个模块管理的状态信息不会互相冲突，redux在合并的时候 把容器中的状态进行分开管理
* state = {
*   n: 0,
*   m: 0,
*   baseInfo: {}
* }
* */

import {combineReducers} from 'redux'
import vote from './vote';
import personal from './personal';

let reducer = combineReducers({
    vote,
    personal
});

export default reducer;
