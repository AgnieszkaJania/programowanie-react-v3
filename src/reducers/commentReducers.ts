import {ISingleComment} from '../entities/comments';
import * as actionTypes from '../actions/actionTypes/commentTypes';
 
export interface ICommentReducer{
    commentList: ISingleComment[];
}

const defaultState = (): ICommentReducer =>({
    commentList: []
});


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action:any) =>{
    switch(action.type){
        case actionTypes.GET_COMMENTS: {
            const paylod: actionTypes.ICommentTypes['GET_COMMENTS'] = action;
            return{
                ...state,
                commentList: paylod.commentList
            }
        }
        default: {
            return state;
        }
    }
}