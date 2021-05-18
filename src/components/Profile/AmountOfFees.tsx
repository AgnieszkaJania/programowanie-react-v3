import React, { FC } from "react";
import styled from "styled-components";
import { AmountRow } from "./AmountRow";


const AmountOfFeesCont=styled.div`
    color:black;
    table{
        width:100%;
        /* font-size:20px; */
    }
    th{
        padding:5px 0px;;
        /* border-bottom:1px solid grey; */
        //background-color:saddlebrown;
        text-align:left;
        width:40px;
        font-weight:bold;
        
    }
   

    
`
const Title = styled.div`
    font-weight:bold;
    /* font-size:20px; */
    margin:20px 0px;
    
`
export const AmountOfFees: FC = () => {

    return(
        <AmountOfFeesCont>
            <Title>Amount of fees</Title>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Cost center</th>
                        <th>Total amount</th>
                        <th>Law firm</th>
                        
                    </tr>
                </thead>
               <tbody>
                   <AmountRow/> 
                   <AmountRow/> 
                   <AmountRow/> 
                   <AmountRow/> 
                   <AmountRow/> 
               </tbody>
            </table>
        </AmountOfFeesCont>
    )
}