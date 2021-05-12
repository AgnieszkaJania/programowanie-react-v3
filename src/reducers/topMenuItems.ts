import MenuItem from '../entities/topMenuItem';
import * as actionTypes from '../actions/actionTypes/topMenuItem';
 
export interface ITopMenuReducer{
    data: MenuItem | undefined;
}

const defaultState = (): ITopMenuReducer =>({
    data: undefined
});


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action:any) =>{
    switch(action.type){
        case actionTypes.GET_MENU_ITEMS: {
            const paylod: actionTypes.ITopMenuItemsTypes['GET_MENU_ITEMS'] = action;
            return{
                ...state,
                data: paylod.data
            }
        }
        default: {
            return state;
        }
    }
}