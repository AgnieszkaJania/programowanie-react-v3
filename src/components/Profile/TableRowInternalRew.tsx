import React, { FC } from "react";
import styled from "styled-components";

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

export const TableRowInternalRew: FC=()=>{

    return(
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
           
        </tr>
    )
}