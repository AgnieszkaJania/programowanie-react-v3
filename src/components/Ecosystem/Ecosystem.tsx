import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { IState } from '../../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { ITopMenuReducer } from '../../reducers/topMenuItems';
import { WorkspaceSolo } from '../WorkspaceSolo/workspaceSolo';
import { setData, SetData } from '../../actions/topMenuItem';




export const Ecosystem: FC = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("Ecosystem", "./icons/ecosystem.png"))
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