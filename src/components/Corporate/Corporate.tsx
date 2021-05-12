import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetData, setData } from '../../actions/topMenuItem';




export const Corporate: FC = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("Corporate", "./icons/entities.png"))
    });
    return(<>
               Corporate</>
    );
      
};