import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetData, setData } from '../../actions/topMenuItem';





export const Entities: FC = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("Entities", "./icons/entities.png"))
    });
    return(<>Entities</>
    );
      
};