import {ISinglePost} from '../entities/posts';
import * as actionTypes from '../actions/actionTypes/postTypes';

export interface IPostReducer{
    postList: ISinglePost[];
    currentPost: ISinglePost;
}

const defaultState = (): IPostReducer =>({
    postList: [],
    currentPost: undefined
});


//eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action:any) =>{
    switch(action.type){
        case actionTypes.GET_POSTS: {
            const paylod: actionTypes.IPostTypes['GET_POSTS'] = action;
            return{
                ...state,
                postList: paylod.data.postList,
                currentPost: paylod.data.currentPost
            }
        }
        default: {
            return state;
        }
    }
}