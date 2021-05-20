import React, { FC, useState } from "react";
import styled from "styled-components";
import { IPanelInformations } from "./PanelInformationsNotE";



const PanleInfoContainer = styled.div`
    width:95%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  /* background-color:pink; */
  color:black;
  position:relative;
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
    /* font-size:20px; */
    margin:20px 0px;
    
`
const SmallTitles = styled.div`
    color:grey;
    margin-bottom:10px;
`
const Paragraf = styled.div`
    margin-bottom:10px;

`




const ButtonWrap = styled.div`
    /* position:relative; */
`
const NewButton = styled.label`
    display: inline-block;
    padding: 8px 12px; 
    cursor: pointer;
    border-radius: 4px;
    background-color: #ecf8f8;
    font-size: 16px;
    
    
`
const InputFile=styled.input`
    /* position: absolute; */
   
  
   
`
interface IDataPanel{
    data:IPanelInformations,
    change: (a:IPanelInformations)=>void
}

export const PanelInformations: FC<IDataPanel>=(propsy)=>{
    const [state, setState]= useState({
        info1:propsy.data.info1,
        info2:propsy.data.info2,
        info3:propsy.data.info3,
        info4:propsy.data.info4,
        info5:propsy.data.info5,
    })
    const setInfo1=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          info1: event.target.value
        })
    }
    const setInfo2=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          info2: event.target.value
        })
    }
    const setInfo3=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          info3: event.target.value
        })
    }
    const setInfo4=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          info4: event.target.value
        })
    }
    const setInfo5=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
          ...state,
          info5: event.target.value
        })
    }
    return(
        <PanleInfoContainer>
            <Title>
                Panel informations
            </Title>
            <SmallTitles>
                <input type="text" value={state.info1} onChange={setInfo1}/>
            </SmallTitles>
            <Paragraf>
                <input type="text" value={state.info2} onChange={setInfo2}/>
            </Paragraf>
            <SmallTitles>
                <input type="text" value={state.info3} onChange={setInfo3}/>
            </SmallTitles>
            <Paragraf>
                <input type="text" value={state.info4} onChange={setInfo4}/>
            </Paragraf>
            <ButtonWrap/>
                <NewButton>
                <InputFile type="file"/>
                </NewButton> 
            <Title>
                Services and projects
            </Title>
            <Paragraf>
                <input type="text" value={state.info5} onChange={setInfo5}/>
            </Paragraf>
            <Title>
                International corespondants
            </Title>
            <img src="./icons/floppy-disk.png" alt="Save"  onClick={()=>{
                propsy.change(state)
            }}/>
        </PanleInfoContainer>
    )
}