import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetData, setData } from '../../actions/topMenuItem';




export const SupplierContract: FC = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("Supplier contract", "./icons/administration.png"))
    });
    return(<>
               Supplier contract</>
    );
      
};