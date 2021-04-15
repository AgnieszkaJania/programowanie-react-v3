import {ISingleUser} from '../entities/users';
import * as actionTypes from '../actions/actionTypes/userTypes';
 
export interface IUsersReducer{
    usersList: ISingleUser[];
    currentUser: ISingleUser;
}

const defaultState = (): IUsersReducer =>({
    usersList: [],
    currentUser: undefined
});


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action:any) =>{
    switch(action.type){
        case actionTypes.GET_USERS: {
            const paylod: actionTypes.IUserTypes['GET_USERS'] = action;
            return{
                ...state,
                usersList: paylod.data.usersList,
                currentUser: paylod.data.currentUser
            }
        }
        default: {
            return state;
        }
    }
}