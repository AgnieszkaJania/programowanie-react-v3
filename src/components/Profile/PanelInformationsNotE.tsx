import React, { FC } from "react";
import styled from "styled-components";



const PanleInfoContainer = styled.div`
    width:95%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  /* background-color:pink; */
  color:black;
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
export interface IPanelInformations{
    info1:string,
    info2: string,
    info3:string,
    info4:string,
    info5:string
}

export const PanelInformationsNotE: FC<IPanelInformations>=(props)=>{

    return(
        <PanleInfoContainer>
            <Title>
                Panel informations
            </Title>
            <SmallTitles>
                {props.info1}
            </SmallTitles>
            <Paragraf>
                {props.info2}
            </Paragraf>
            <SmallTitles>
                {props.info3}
            </SmallTitles>
            <Paragraf>
                {props.info4}
            </Paragraf>
            <ButtonWrap/>
                <NewButton>
                <InputFile type="file"/>
                </NewButton> 
            <Title>
                Services and projects
            </Title>
            <Paragraf>
                {props.info5}
            </Paragraf>
            <Title>
                International corespondants
            </Title>
            
        </PanleInfoContainer>
    )
}