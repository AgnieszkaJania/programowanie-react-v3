import {Dispatch} from 'redux';
import * as actionTypes from '../actions/actionTypes/topMenuItem';
import itemTop from '../entities/topMenuItem';
 
export const setData = (name: string, image:string): Promise<itemTop> => ((dispatch:Dispatch) =>{
    return dispatch({
        type: actionTypes.GET_MENU_ITEMS,
        data: {
            name: name,
            icon: image
        }
    })
}) as any;

export type SetData= ReturnType<typeof setData>