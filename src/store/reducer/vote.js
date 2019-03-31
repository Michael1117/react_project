/*
* vote 板块的reducer
*   state: 原始redux管理的状态信息 (设置初始值)
*   action: dispatch派发的时候传递的行为对象  {type, ...}
* */
import * as type from '../action-types';

export default function vote(state = {n : 0, m : 0}, action) {

    switch (action.type) {
        case type.VOTE_SUPPORT:
            state = {...state, n: state.n + 1};
            break;
        case type.VOTE_AGAINST:
            state = {...state, m: state.m + 1};
            break;
    }
    return state;
}