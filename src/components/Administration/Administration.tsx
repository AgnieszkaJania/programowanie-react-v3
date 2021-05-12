import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetData, setData } from '../../actions/topMenuItem';

export const Administration: FC = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("Administration", "./icons/administration.png"))
    });
    return(<>Administration</>);
      
};