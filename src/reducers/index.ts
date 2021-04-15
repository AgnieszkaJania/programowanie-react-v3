import {combineReducers} from 'redux';
import users, { IUsersReducer } from './usersReducers';
import foto, { IFotoReducer } from './fotoReducers';

export default combineReducers({
    users,
    foto
})

export interface IState{
    users:IUsersReducer; 
    foto:IFotoReducer;
}