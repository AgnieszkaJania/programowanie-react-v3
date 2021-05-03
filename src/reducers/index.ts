import {combineReducers} from 'redux';
import users, { IUsersReducer } from './usersReducers';
import foto, { IFotoReducer } from './fotoReducers';
import post, { IPostReducer } from './postReducers';
import comment, { ICommentReducer } from './commentReducers';

export default combineReducers({
    users,
    foto,
    post,
    comment
    
})

export interface IState{
    users:IUsersReducer; 
    foto:IFotoReducer;
    post:IPostReducer;
    comment:ICommentReducer;
}