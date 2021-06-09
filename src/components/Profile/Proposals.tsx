import React, { FC, useState } from "react";
import styled from "styled-components";
import { IProposal } from "./ProposalsNotEdited";


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
        padding:5px;
        //background-color:red;
        text-align:left;
        width:16.6%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
`
const HeaderElement = styled.div`
        padding:10px;
        text-align:left;
        font-weight:bold;
        width:16.6%;
`
interface IDataProposal{
    data:IProposal,
    change: (a:IProposal)=>void
}
export const StyledSelect = styled.select`
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
export const StyledInput = styled.input`
    padding: 5px 0px; 
    border-color:rgba(0,0,0,0);
    font-family:inherit;
    overflow:hidden; 
    text-overflow:ellipsis;
    white-space:nowrap;
`


export const Proposals: FC<IDataProposal>=(propsy)=>{
    const [state, setState]= useState({
        name1: propsy.data.name1,
        entity1: propsy.data.entity1,
        location1: propsy.data.location1,
        expertise1:propsy.data.expertise1,
        date1:propsy.data.date1,
        firm1:propsy.data.firm1,
        name2: propsy.data.name2,
        entity2: propsy.data.entity2,
        location2: propsy.data.location2,
        expertise2:propsy.data.expertise2,
        date2:propsy.data.date2,
        firm2:propsy.data.firm2,
        name3: propsy.data.name3,
        entity3: propsy.data.entity3,
        location3: propsy.data.location3,
        expertise3:propsy.data.expertise3,
        date3:propsy.data.date3,
        firm3:propsy.data.firm3,
    })
    const setName1=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          name1: event.target.value
        })
    }
    const setEntity1=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          entity1: event.target.value
        })
    }
    const setLocation1=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          location1: event.target.value
        })
    }
    const setExpertise1=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          expertise1: event.target.value
        })
    }
    const setDate1=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          date1: event.target.value
        })
    }
    const setFirm1=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          firm1: event.target.value
        })
    }
    const setName2=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          name2: event.target.value
        })
    }
    const setEntity2=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          entity2: event.target.value
        })
    }
    const setLocation2=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          location2: event.target.value
        })
    }
    const setExpertise2=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          expertise2: event.target.value
        })
    }
    const setDate2=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          date2: event.target.value
        })
    }
    const setFirm2=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          firm2: event.target.value
        })
    }
    const setName3=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          name3: event.target.value
        })
    }
    const setEntity3=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          entity3: event.target.value
        })
    }
    const setLocation3=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          location3: event.target.value
        })
    }
    const setExpertise3=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          expertise3: event.target.value
        })
    }
    const setDate3=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          date3: event.target.value
        })
    }
    const setFirm3=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          firm3: event.target.value
        })
    }
    return(
        <ProposalsContainer>
            <Title>
                Proposals
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
                        <HeaderElement>
                            Firm
                        </HeaderElement>
                    </Header>
                    <Row>
                        <RowElement>
                            <StyledInput type="text" value={state.name1} onChange={setName1}/>
                        </RowElement>
                        <RowElement>
                            <StyledInput type="text" value={state.entity1} onChange={setEntity1}/>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setLocation1}>
                                <option>
                                    {state.location1}
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
                            <StyledSelect onChange={setExpertise1}>
                                <option>
                                    {state.expertise1}
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
                                <option>#Tax</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledInput type="text" value={state.date1} onChange={setDate1}/>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setFirm1}>
                                <option>
                                    {state.firm1}
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
                                <option>Racine</option>
                            </StyledSelect>
                        </RowElement>
                    </Row>
                    <Row>
                        <RowElement>
                            <StyledInput type="text" value={state.name2} onChange={setName2}/>
                        </RowElement>
                        <RowElement>
                            <StyledInput type="text" value={state.entity2} onChange={setEntity2}/>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setLocation2}>
                                <option>
                                    {state.location2}
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
                            <StyledSelect onChange={setExpertise2}>
                                <option>
                                    {state.expertise2}
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
                                <option>#Tax</option>
                            </StyledSelect>
                        </RowElement>
                        <RowElement>
                            <StyledInput type="text" value={state.date2} onChange={setDate2}/>
                        </RowElement>
                        <RowElement>
                            <StyledSelect onChange={setFirm2}>
                                <option>
                                    {state.firm2}
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
                                <option>Racine</option>
                            </StyledSelect>
                        </RowElement>
                    </Row>
                    <Row>
                       
                            <RowElement>
                                <StyledInput type="text" value={state.name3} onChange={setName3}/>
                            </RowElement>
                            <RowElement>
                                <StyledInput type="text" value={state.entity3} onChange={setEntity3}/>
                            </RowElement>
                            <RowElement>
                                <StyledSelect onChange={setLocation3}>
                                    <option>
                                        {state.location3}
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
                                <StyledSelect onChange={setExpertise3}>
                                    <option>
                                        {state.expertise3}
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
                                    <option>#Tax</option>
                                </StyledSelect>
                            </RowElement>
                            <RowElement>
                                <StyledInput type="text" value={state.date3} onChange={setDate3}/>
                            </RowElement>
                            <RowElement>
                                <StyledSelect onChange={setFirm3}>
                                    <option>
                                        {state.firm3}
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
                                    <option>Racine</option>
                                </StyledSelect>
                            </RowElement>
                    </Row>
                </Table>
                <img src="./icons/floppy-disk.png" alt="Save" onClick={()=>{
                        propsy.change(state)
                }}/>
        </ProposalsContainer>
    )
}