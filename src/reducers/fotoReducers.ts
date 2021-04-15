import {ISingleFoto} from '../entities/fotos';
import * as actionTypes from '../actions/actionTypes/fotoTypes';
 
export interface IFotoReducer{
    fotoList: ISingleFoto[];
}

const defaultState = (): IFotoReducer =>({
    fotoList: []
});


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action:any) =>{
    switch(action.type){
        case actionTypes.GET_FOTOS: {
            const paylod: actionTypes.IFotoTypes['GET_FOTOS'] = action;
            return{
                ...state,
                fotoList: paylod.fotoList
            }
        }
        default: {
            return state;
        }
    }
}