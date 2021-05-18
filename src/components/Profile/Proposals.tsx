import React, { FC } from "react";
import styled from "styled-components";
import { TableRow } from "./TableRow";


const ProposalsContainer=styled.div`
    color:black;
    border-bottom:1px solid grey;
    table{
        width:100%;
    }
    th{
        padding:5px 0px;;
        border-bottom:1px solid grey;
        //background-color:saddlebrown;
        text-align:left;
        width:40px;
        font-weight:bold;
        
    }
   

    
`
const Title = styled.div`
    font-weight:bold;
    margin-bottom:20px;
    margin: 20px 0px;
    
`


export const Proposals: FC=()=>{

    return(
        <ProposalsContainer>
            <Title>
                Proposals
            </Title>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Entity</th>
                        <th>Location</th>
                        <th>Expertise</th>
                        <th>Date</th>
                        <th>Firm</th>
                    </tr>
                </thead>
               <tbody>
                    <TableRow/>
                    <TableRow/>
                    <TableRow/>
               </tbody>
            </table>
           
        </ProposalsContainer>
    )
}