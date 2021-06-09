import React, { FC, useState } from "react";
import styled from "styled-components";
import { IAmount } from "./AmountOfFeesNotEdited";
import{StyledSelect} from "./Proposals";
import{StyledInput} from "./Proposals";

const AmountContainer = styled.div`
    color:black;
    position:relative;
    img{
      position:absolute;
      right:0;
      top:7%;
      width:40px;
      height:40px;
  }
`

const Title = styled.div`
    font-weight:bold;
    margin: 20px 0px;
    
`
const Table = styled.div`
   
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
interface IDataAmount{
    data:IAmount,
    change: (a:IAmount)=>void
}
export const AmountOfFees: FC<IDataAmount> = (propsy) => {
    const [state, setState]= useState({
        year1:propsy.data.year1,
        center1:propsy.data.center1,
        amount1:propsy.data.amount1,
        law1:propsy.data.law1,
        year2:propsy.data.year2,
        center2:propsy.data.center2,
        amount2:propsy.data.amount2,
        law2:propsy.data.law2,
        year3:propsy.data.year3,
        center3:propsy.data.center3,
        amount3:propsy.data.amount3,
        law3:propsy.data.law3,
        year4:propsy.data.year4,
        center4:propsy.data.center4,
        amount4:propsy.data.amount4,
        law4:propsy.data.law4,
        year5:propsy.data.year5,
        center5:propsy.data.center5,
        amount5:propsy.data.amount5,
        law5:propsy.data.law5,
    })
    const setYear1=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          year1: event.target.value
        })
    }
    const setYear2=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          year2: event.target.value
        })
    }
    const setYear3=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          year3: event.target.value
        })
    }
    const setYear4=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          year4: event.target.value
        })
    }
    const setYear5=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          year5: event.target.value
        })
    }
    const setCenter1=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          center1: event.target.value
        })
    }
    const setCenter2=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          center2: event.target.value
        })
    }
    const setCenter3=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          center3: event.target.value
        })
    }
    const setCenter4=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          center4: event.target.value
        })
    }
    const setCenter5=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          center5: event.target.value
        })
    }
    const setAmount1=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          amount1: event.target.value
        })
    }
    const setAmount2=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          amount2: event.target.value
        })
    }
    const setAmount3=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          amount3: event.target.value
        })
    }
    const setAmount4=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          amount4: event.target.value
        })
    }
    const setAmount5=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          amount5: event.target.value
        })
    }
    const setLaw1=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          law1: event.target.value
        })
    }
    const setLaw2=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          law2: event.target.value
        })
    }
    const setLaw3=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          law3: event.target.value
        })
    }
    const setLaw4=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          law4: event.target.value
        })
    }
    const setLaw5=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          law5: event.target.value
        })
    }
    return(
        <AmountContainer>
            <Title>
                Amount of fees
            </Title>
            <Table>
                <Header>
                    <HeaderElement>Year</HeaderElement>
                    <HeaderElement>Cost center</HeaderElement>
                    <HeaderElement>Total amount</HeaderElement>
                    <HeaderElement>Law firm</HeaderElement>     
                </Header>
                <Row>
                    <RowElement>
                        <StyledInput type="number" value={state.year1}step="1" min="1900" max="2050" onChange={setYear1}/>
                    </RowElement>
                    <RowElement>
                        <StyledSelect onChange={setCenter1}>
                            <option>{state.center1}</option>
                            <option>CS 47</option>
                            <option>CS 32</option>
                            <option>CS 56</option>
                            <option>CS 72</option>
                            <option>CS 153</option>
                        </StyledSelect>
                    </RowElement>
                    <RowElement>
                        <StyledInput type="text" value={state.amount1} onChange={setAmount1}/>
                    </RowElement>
                    <RowElement>
                        <StyledSelect onChange={setLaw1}>
                            <option>{state.law1}</option>
                            <option>Linklaters</option>
                            <option>Something</option>
                            <option>Another one</option>
                            <option>Other</option>
                            <option>Clifford chance</option>
                        </StyledSelect>
                    </RowElement>
                </Row>
                <Row>
                    <RowElement>
                        <StyledInput type="number" value={state.year2}step="1" min="1900" max="2050" onChange={setYear2}/>
                    </RowElement>
                    <RowElement>
                        <StyledSelect onChange={setCenter2}>
                            <option>{state.center2}</option>
                            <option>CS 47</option>
                            <option>CS 32</option>
                            <option>CS 56</option>
                            <option>CS 72</option>
                            <option>CS 153</option>
                        </StyledSelect>
                    </RowElement>
                    <RowElement>
                        <StyledInput type="text" value={state.amount2} onChange={setAmount2}/>
                    </RowElement>
                    <RowElement>
                        <StyledSelect onChange={setLaw2}>
                            <option>{state.law2}</option>
                            <option>Linklaters</option>
                            <option>Something</option>
                            <option>Another one</option>
                            <option>Other</option>
                            <option>Clifford chance</option>
                        </StyledSelect>
                    </RowElement>
                </Row>
                <Row>
                    <RowElement>
                        <StyledInput type="number" value={state.year3}step="1" min="1900" max="2050" onChange={setYear3}/>
                    </RowElement>
                    <RowElement>
                        <StyledSelect onChange={setCenter3}>
                            <option>{state.center3}</option>
                            <option>CS 47</option>
                            <option>CS 32</option>
                            <option>CS 56</option>
                            <option>CS 72</option>
                            <option>CS 153</option>
                        </StyledSelect>
                    </RowElement>
                    <RowElement>
                        <StyledInput type="text" value={state.amount3} onChange={setAmount3}/>
                    </RowElement>
                    <RowElement>
                        <StyledSelect onChange={setLaw3}>
                            <option>{state.law3}</option>
                            <option>Linklaters</option>
                            <option>Something</option>
                            <option>Another one</option>
                            <option>Other</option>
                            <option>Clifford chance</option>
                        </StyledSelect>
                    </RowElement>
                </Row>
                <Row>
                    <RowElement>
                        <StyledInput type="number" value={state.year4}step="1" min="1900" max="2050" onChange={setYear4}/>
                    </RowElement>
                    <RowElement>
                        <StyledSelect onChange={setCenter4}>
                            <option>{state.center4}</option>
                            <option>CS 47</option>
                            <option>CS 32</option>
                            <option>CS 56</option>
                            <option>CS 72</option>
                            <option>CS 153</option>
                        </StyledSelect>
                    </RowElement>
                    <RowElement>
                        <StyledInput type="text" value={state.amount4} onChange={setAmount4}/>
                    </RowElement>
                    <RowElement>
                        <StyledSelect onChange={setLaw4}>
                            <option>{state.law4}</option>
                            <option>Linklaters</option>
                            <option>Something</option>
                            <option>Another one</option>
                            <option>Other</option>
                            <option>Clifford chance</option>
                        </StyledSelect>
                    </RowElement>
                </Row>
                <Row>
                    <RowElement>
                        <StyledInput type="number" value={state.year5}step="1" min="1900" max="2050" onChange={setYear5}/>
                    </RowElement>
                    <RowElement>
                        <StyledSelect onChange={setCenter5}>
                            <option>{state.center5}</option>
                            <option>CS 47</option>
                            <option>CS 32</option>
                            <option>CS 56</option>
                            <option>CS 72</option>
                            <option>CS 153</option>
                        </StyledSelect>
                    </RowElement>
                    <RowElement>
                        <StyledInput type="text" value={state.amount5} onChange={setAmount5}/>
                    </RowElement>
                    <RowElement>
                        <StyledSelect onChange={setLaw5}>
                            <option>{state.law5}</option>
                            <option>Linklaters</option>
                            <option>Something</option>
                            <option>Another one</option>
                            <option>Other</option>
                            <option>Clifford chance</option>
                        </StyledSelect>
                    </RowElement>
                </Row>

            </Table>
            <img src="./icons/floppy-disk.png" alt="Save" onClick={()=>{
                        propsy.change(state)
            }}/>
        </AmountContainer>
    )
}