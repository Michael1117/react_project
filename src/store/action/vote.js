/*
* 每个版块单独的actionCreator: 就是把dispatch派发时候需要传递的action对象进一步统一封装处理 (react-redux)
* */
import * as type from '../action-types'

let vote = {
    support() {
        // dispatch 派发的时候传递的什么就返回什么即可
        return{
            type: type.VOTE_SUPPORT
        }
    },
    against() {
        return {
            type: type.VOTE_AGAINST
        }
    }
};

export default vote;