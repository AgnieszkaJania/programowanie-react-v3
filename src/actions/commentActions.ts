import {Dispatch} from 'redux';
import * as actionTypes from '../actions/actionTypes/commentTypes';
import {ISingleComment} from '../entities/comments';
 
export const getFotos = (): Promise<ISingleComment[]> => ((dispatch:Dispatch) =>{
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((commentList: ISingleComment[]) =>{
            dispatch({
                type: actionTypes.GET_COMMENTS,
                commentList
            })

        })

}) as any;