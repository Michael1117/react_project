/*
* 合并所有的action-creator，类似于reducer合并
* */

import vote from './vote'
import personal from './personal';

let action = {
    vote,
    personal
}


export default action