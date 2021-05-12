import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetData, setData } from '../../actions/topMenuItem';
//import { Workspace } from './Workspace/workspace';





export const People: FC = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("People", "./icons/people.png"))
    });
    return(<>People</>
    );
      
};