import React, { FC } from "react";
import styled from "styled-components";


const ProposalsContainer=styled.div`
    color:black;
    table{
        width:100%;
    }
    th{
        padding:5px 0px;;
        border-bottom:1px solid grey;
        //background-color:saddlebrown;
        text-align:left;
        width:17%;
        font-weight:bold;
        
    }
   

    
`
const Title = styled.div`
    font-weight:bold;
    font-size:20px;
    
`
const StyledSelect = styled.select`
    &::-ms-expand{display:none}
    -webkit-appearance:none;
    -moz-appearance:none;
    text-overflow:"";
    text-indent:1px;
    width:100%;
    padding:5px 0px;;
    border-color:rgba(0,0,0,0);
    font-family:inherit;
    font-size:inherit;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    
   
`

export const Proposals: FC=()=>{

    return(
        <ProposalsContainer>
            <Title>
                Proposals
            </Title>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Entity</th>
                    <th>Location</th>
                    <th>Expertise</th>
                    <th>Date</th>
                    <th>Firm</th>
                </tr>
                <tr>
                   <td>
                    <StyledSelect>
                            <option>
                                Operation Time
                            </option>
                            <option>
                                Other Time
                            </option>
                            <option>
                                Time Time
                            </option>
                        </StyledSelect>
                   </td>
                    <td>
                        <StyledSelect>
                            <option>
                                Renault
                            </option>
                            <option>
                                BMW
                            </option>
                            <option>
                                Mercedes
                            </option>
                            <option>
                                Nissan
                            </option>
                        </StyledSelect>
                    </td>
                    <td>
                        <StyledSelect>
                            <option>
                                France
                            </option>
                            <option>
                                Germany
                            </option>
                            <option>
                                Poland
                            </option>
                            <option>
                                Finalnd
                            </option>
                        </StyledSelect>
                    </td>
                    <td>
                        <StyledSelect>
                            <option>
                                #Tax
                            </option>
                            <option>
                                #IT
                            </option>
                            <option>
                                #Finance
                            </option>
                            <option>
                                #Health
                            </option>
                        </StyledSelect>
                    </td>
                    <td>
                        <input type="date"/>
                    </td>
                    <td>
                        <StyledSelect>
                            <option>
                                Racine
                            </option>
                            <option>
                                Cliford chance
                            </option>
                            <option>
                                SVZ
                            </option>
                            <option>
                                Company
                            </option>
                        </StyledSelect>
                    </td>
                </tr>
                <tr>
                    <td>Operation</td>
                    <td>Renault</td>
                    <td>
                        <StyledSelect>
                            <option>
                                France
                            </option>
                            <option>
                                Germany
                            </option>
                            <option>
                                Poland
                            </option>
                            <option>
                                Finalnd
                            </option>
                        </StyledSelect>
                    </td>
                    <td>#Tax</td>
                </tr>
                <tr>
                    <td>Operation</td>
                    <td>Renault</td>
                    <td>
                        <StyledSelect>
                            <option>
                                France
                            </option>
                            <option>
                                Germany
                            </option>
                            <option>
                                Poland
                            </option>
                            <option>
                                Finalnd
                            </option>
                        </StyledSelect>
                    </td>
                    <td>#Tax</td>
                </tr>
            </table>
           
        </ProposalsContainer>
    )
}