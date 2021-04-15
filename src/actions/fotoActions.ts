import {Dispatch} from 'redux';
import * as actionTypes from '../actions/actionTypes/fotoTypes';
import {ISingleFoto} from '../entities/fotos';
 
export const getFotos = (): Promise<ISingleFoto[]> => ((dispatch:Dispatch) =>{
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((fotoList: ISingleFoto[]) =>{
            dispatch({
                type: actionTypes.GET_FOTOS,
                fotoList
            })

        })

}) as any;