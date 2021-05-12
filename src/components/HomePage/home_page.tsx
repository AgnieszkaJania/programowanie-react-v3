import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../../actions/topMenuItem';
import { Workspace } from './Workspace/workspace';
type SetData= ReturnType<typeof setData>

export const HomePage: FC = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("Home", "./icons/house.png"))
    });
    return(
        <Workspace/>
    );
      
};