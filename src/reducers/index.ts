import {combineReducers} from 'redux';
import users, { IUsersReducer } from './usersReducers';
import foto, { IFotoReducer } from './fotoReducers';
import post, { IPostReducer } from './postReducers';
import comment, { ICommentReducer } from './commentReducers';
import data, { ITopMenuReducer } from './topMenuItems';

export default combineReducers({
    users,
    foto,
    post,
    comment,
    data
})

export interface IState{
    users:IUsersReducer; 
    foto:IFotoReducer;
    post:IPostReducer;
    comment:ICommentReducer;
    data:ITopMenuReducer
}