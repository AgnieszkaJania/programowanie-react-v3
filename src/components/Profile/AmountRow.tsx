import React, { FC } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
    &::-ms-expand{display:none}
    -webkit-appearance:none;
    -moz-appearance:none;
    text-overflow:"";
    text-indent:1px;
    width:100%;
    padding:5px 0px;
    border-color:rgba(0,0,0,0);
    font-family:inherit;
    font-size:inherit;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    
   
`
const StyledInputNumber = styled.input`
    border:none;
    padding:5px 0px;
    font-size:inherit;
    font-family:inherit;
`
const TableRowCurrency = styled.div`
    display:flex;
`
const CurrencySelect = styled(StyledSelect)`
    width:20%;
`


export const AmountRow: FC=()=>{

    return(
        <tr>
            <td>
                <StyledSelect>
                    <option></option>
                    <option>
                        2015
                    </option>
                    <option>
                        2016
                    </option>
                    <option>
                        2017
                    </option>
                    <option>
                        2018
                    </option>
                    <option>
                        2019
                    </option>
                    <option>
                        2020
                    </option>
                    <option>
                        2021
                    </option>
                </StyledSelect>
            </td>
            <td>
                <StyledSelect>
                    <option>
                        CS 153
                    </option>
                    <option>
                        CS 47
                    </option>
                    <option>
                        CS 32
                    </option>
                    <option>
                        CS 105
                    </option>
                </StyledSelect>
            </td>
            <td>
               <TableRowCurrency>
                    <StyledInputNumber type="number" min="0" max="1000000" step="100"/>
                    <CurrencySelect>
                            <option></option>
                            <option>
                                $
                            </option>
                            <option>
                                €
                            </option>
                            <option>
                                PLN
                            </option>
                            <option>
                                £
                            </option>
                    </CurrencySelect> 
               </TableRowCurrency>
            </td>
           
            <td>
                <StyledSelect>
                    <option>
                        Clifford chance
                    </option>
                    <option>
                        Linklaters
                    </option>
                    <option>
                        Name
                    </option>
                    
                </StyledSelect>
            </td>
            
        </tr>
    )
}