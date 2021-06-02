import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetData, setData } from '../../actions/topMenuItem';
import { IState } from '../../reducers';
import { ITopMenuReducer } from '../../reducers/topMenuItems';
import { WorkspaceSolo } from '../WorkspaceSolo/workspaceSolo';





export const People: FC = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("People", "./icons/people.png"))
    });
    const {
        data
      } = useSelector<IState, ITopMenuReducer>(
        (globalState) => ({
          ...globalState.data
        })
      );
    return(
        <WorkspaceSolo image={(data?.icon || "house.png")} name={data?.name || ""}/>
    );
      
};