import React, { FC } from "react";
import styled from "styled-components";
import { TableRowInternalRew } from "./TableRowInternalRew";

const InternalRewiewsContainer=styled.div`
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
interface IInternalRewiev{
    editable:boolean
}
export const InternalRewiews: FC<IInternalRewiev>=(prop)=>{

    return(
        <InternalRewiewsContainer>
            <Title>
                Internal Rewiews
            </Title>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Entity</th>
                        <th>Location</th>
                        <th>Expertise</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {prop.editable &&
                        <TableRowInternalRew/>
                    }
                     {prop.editable &&
                        <TableRowInternalRew/>
                    }
                     {prop.editable &&
                        <TableRowInternalRew/>
                    }
                    
                </tbody>
               
            </table>
            <Title>
                See more Reviews
            </Title>
        </InternalRewiewsContainer>
    )

}