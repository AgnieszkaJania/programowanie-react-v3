import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetData, setData } from '../../actions/topMenuItem';
import { IState } from '../../reducers';
import { ITopMenuReducer } from '../../reducers/topMenuItems';
import { GeneralWrapper, MainBoardWrapper } from '../../styledHelpers/Components';





export const Privacy: FC = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("Privacy", "./icons/privacy.png"))
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