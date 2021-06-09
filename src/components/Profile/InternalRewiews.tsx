import React, { FC, useState } from "react";
import styled from "styled-components";
import { IInternalRewiews } from "./InternalRewiewsNotEdited";
import{StyledInput}from "./Proposals";

const ProposalsContainer=styled.div`
    color:black;
    position:relative;
    border-bottom:1px sold grey;
    img{
      position:absolute;
      right:0;
      top:10%;
      width:40px;
      height:40px;
  }
    
`
const Title = styled.div`
    font-weight:bold;
    margin: 20px 0px;
    
`
const Table = styled.div`
    /* display:flex; */
    //background-color:saddlebrown;

`
const Header = styled.div`
    border-bottom:1px solid grey; 
    display:flex;
    //background-color:yellow;
    width:100%;
    justify-content:flex-start;
    
`

const Row = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-start;
`
const RowElement=styled.div`
        padding:10px;
        //background-color:red;
        text-align:left;
        width:14%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
`
const HeaderElement = styled.div`
        padding:10px;
        text-align:left;
        font-weight:bold;
        width:14%;
        //background-color:pink;
        //border:1px solid black;
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
interface IDataInternalRewiews{
    data:IInternalRewiews,
    change: (a:IInternalRewiews)=>void
}


export const InternalRewiews: FC<IDataInternalRewiews>=(propsy)=>{
    const [state, setState]= useState({
        internalName1: propsy.data.internalName1,
        internalEntity1: propsy.data.internalEntity1,
        internalLocation1: propsy.data.internalLocation1,
        internalExpertise1:propsy.data.internalExpertise1,
        internalDate1: propsy.data.internalDate1,
        internalName2:propsy.data.internalName2,
        internalEntity2: propsy.data.internalEntity2,
        internalLocation2: propsy.data.internalLocation2,
        internalExpertise2:propsy.data.internalExpertise2,
        internalDate2: propsy.data.internalDate2,
        internalName3:propsy.data.internalName3,
        internalEntity3: propsy.data.internalEntity3,
        internalLocation3: propsy.data.internalLocation3,
        internalExpertise3:propsy.data.internalExpertise3,
        internalDate3: propsy.data.internalDate3,
        
    })
    const setInternalName1=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          internalName1: event.target.value
        })
    }
    const setInternalName2=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          internalName2: event.target.value
        })
    }
    const setInternalName3=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          internalName3: event.target.value
        })
    }
    const setInternalEntity1=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          internalEntity1: event.target.value
        })
    }
    const setInternalEntity2=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          internalEntity2: event.target.value
        })
    }
    const setInternalEntity3=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          internalEntity3: event.target.value
        })
    }
    const setInternalLocation1=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          internalLocation1: event.target.value
        })
    }
    const setInternalLocation2=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          internalLocation2: event.target.value
        })
    }
    const setInternalLocation3=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          internalLocation3: event.target.value
        })
    }
    const setInternalExpertise1=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          internalExpertise1: event.target.value
        })
    }
    const setInternalExpertise2=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          internalExpertise2: event.target.value
        })
    }
    const setInternalExpertise3=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          internalExpertise3: event.target.value
        })
    }
    const setInternalDate1=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          internalDate1: event.target.value
        })
    }
    const setInternalDate2=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          internalDate2: event.target.value
        })
    }
    const setInternalDate3=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          internalDate3: event.target.value
        })
    }

    return(
        <ProposalsContainer>
                <Title>
                    Internal Rewiews
                </Title>
                <Table>
                    <Header>
                        <HeaderElement>
                            Name
                        </HeaderElement>
                        <HeaderElement>
                            Entity
                        </HeaderElement>
                        <HeaderElement>
                            Location
                        </HeaderElement>
                        <HeaderElement>
                            Expertise
                        </HeaderElement>
                        <HeaderElement>
                            Date
                        </HeaderElement>
                        
                        
                    </Header>
                    <Row>
                        <RowElement>
                            <StyledSelect onChange={setInternalName1}>
                                <option>{state.internalName1}</option>
                                <option>Resolution Time</option>
                                <option>Cooperation Time</option>
                                <option>Other Time</option>
                                <option>Gathering Time</option>
                                <option>Operation Time</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setInternalEntity1}>
                                <option>{state.internalEntity1}</option>
                                <option>Mercedes TTT</option>
                                <option>Toyota TTT</option>
                                <option>Nissan TTT</option>
                                <option>Fiat TTT</option>
                                <option>Renault TTT</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setInternalLocation1}>
                                <option>
                                    {state.internalLocation1}
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
                                <option>France</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setInternalExpertise1}>
                                <option>
                                    {state.internalExpertise1}
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
                                <option>
                                    #Economy
                                </option>
                                <option>#Tax</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledInput type="text" value={state.internalDate1} onChange={setInternalDate1}/>
                        </RowElement>
                        
                    </Row>
                    <Row>
                        <RowElement>
                            <StyledSelect onChange={setInternalName2}>
                                <option>{state.internalName2}</option>
                                <option>Resolution Time</option>
                                <option>Cooperation Time</option>
                                <option>Other Time</option>
                                <option>Gathering Time</option>
                                <option>Operation Time</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setInternalEntity2}>
                                <option>{state.internalEntity2}</option>
                                <option>Mercedes TTT</option>
                                <option>Toyota TTT</option>
                                <option>Nissan TTT</option>
                                <option>Fiat TTT</option>
                                <option>Renault TTT</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setInternalLocation2}>
                                <option>
                                    {state.internalLocation2}
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
                                <option>France</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setInternalExpertise2}>
                                <option>
                                    {state.internalExpertise2}
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
                                <option>
                                    #Economy
                                </option>
                                <option>#Tax</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledInput type="text" value={state.internalDate2} onChange={setInternalDate2}/>
                        </RowElement>
                        
                    </Row>
                    <Row>
                        <RowElement>
                            <StyledSelect onChange={setInternalName3}>
                                <option>{state.internalName3}</option>
                                <option>Resolution Time</option>
                                <option>Cooperation Time</option>
                                <option>Other Time</option>
                                <option>Gathering Time</option>
                                <option>Operation Time</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setInternalEntity3}>
                                <option>{state.internalEntity3}</option>
                                <option>Mercedes TTT</option>
                                <option>Toyota TTT</option>
                                <option>Nissan TTT</option>
                                <option>Fiat TTT</option>
                                <option>Renault TTT</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setInternalLocation3}>
                                <option>
                                    {state.internalLocation3}
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
                                <option>France</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setInternalExpertise3}>
                                <option>
                                    {state.internalExpertise3}
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
                                <option>
                                    #Economy
                                </option>
                                <option>#Tax</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledInput type="text" value={state.internalDate3} onChange={setInternalDate3}/>
                        </RowElement>
                        
                    </Row>   
                   
                </Table>
                <img src="./icons/floppy-disk.png" alt="Save" onClick={()=>{
                        propsy.change(state)
                }}/>
                
        </ProposalsContainer>
    )
}