import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetData, setData } from '../../actions/topMenuItem';
import { IState } from '../../reducers';
import { ITopMenuReducer } from '../../reducers/topMenuItems';
import { WorkspaceSolo } from '../WorkspaceSolo/workspaceSolo';





export const ClientContract: FC = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("Client contract", "./icons/administration.png"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
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