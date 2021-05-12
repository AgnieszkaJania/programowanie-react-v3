import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetData, setData } from '../../actions/topMenuItem';



export const RealEstateContracts: FC = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("Real estate contracts", "./icons/administration.png"))
    });
    return(<>
               Real estate contracts</>
    );
      
};