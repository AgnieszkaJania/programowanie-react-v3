import {Dispatch} from 'redux';
import * as actionTypes from '../actions/actionTypes/postTypes';
import {ISinglePost} from '../entities/posts';
 
export const getPosts = (): Promise<ISinglePost[]> => ((dispatch:Dispatch) =>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((postList: ISinglePost[]) =>{
            dispatch({
                type: actionTypes.GET_POSTS,
                data:{
                    postList,
                    currentPost: postList[12]
                }
            })

        })

}) as any;