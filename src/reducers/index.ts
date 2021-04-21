import {combineReducers} from 'redux';
import users, { IUsersReducer } from './usersReducers';
import foto, { IFotoReducer } from './fotoReducers';
import post, { IPostReducer } from './postReducers';

export default combineReducers({
    users,
    foto,
    post
    
})

export interface IState{
    users:IUsersReducer; 
    foto:IFotoReducer;
    post:IPostReducer;
}