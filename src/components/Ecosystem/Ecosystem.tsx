import React, { FC, useEffect } from 'react';
import { IState } from '../../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { ITopMenuReducer } from '../../reducers/topMenuItems';
import { setData, SetData } from '../../actions/topMenuItem';
import { GeneralWrapper, MainBoardWrapper } from '../../styledHelpers/Components';



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
      <MainBoardWrapper>
        <GeneralWrapper>{data?.name}</GeneralWrapper>
      </MainBoardWrapper>
    );
      
      
};