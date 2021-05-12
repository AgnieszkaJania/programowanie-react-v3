import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetData, setData } from '../../actions/topMenuItem';




export const GroupNorms: FC = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("Group norms", "./icons/administration.png"))
    });
    return(<>Group Norms</>
    );
      
};