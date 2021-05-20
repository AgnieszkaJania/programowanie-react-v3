import React, { FC, useState } from "react";
import styled from "styled-components";
import { IExpertise } from "./ExpertiseNotEdited";


const ExpertiseContainer = styled.div`
  width:95%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  /* background-color:pink; */
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
    color:grey;
`
const ChosenCategories=styled.div`
    display:flex;
    margin: 10px 0px;
`
const StyledSelect = styled.select`
    &::-ms-expand{display:none}
    -webkit-appearance:none;
    -moz-appearance:none;
    text-overflow:"";
    text-indent:1px;
    /* width:40%; */
    padding:5px;
    background-color:#b3ecf3;
    border-radius:5px;
    color:#5e5ef7;
    margin-right:10px;
    border-color:rgba(0,0,0,0);


`
interface IData2{
    data:IExpertise,
    change: (a:IExpertise)=>void
}
export const Expertise: FC<IData2> = (propsy) => {
    const [state, setState]= useState({
        expertise: propsy.data.expertise,
        specialities1: propsy.data.specialities1,
        specialities2: propsy.data.specialities2,
        admission1: propsy.data.admission1,
        admission2: propsy.data.admission2,
        countries: propsy.data.countries,
    });
    const setExpertise=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          expertise: event.target.value
        })
    }
    const setSpecialities1=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          specialities1: event.target.value
        })
    }
    const setSpecialities2=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          specialities2: event.target.value
        })
    }
    const setAdmission1=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          admission1: event.target.value
        })
    }
    const setAdmission2=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          admission2: event.target.value
        })
    }
    const setCountries=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          countries: event.target.value
        })
    }
        return(
            <ExpertiseContainer>
                <Title>
                    Expertise
                </Title>
               <ChosenCategories>
                    <StyledSelect onChange={setExpertise}>
                        <option>{state.expertise}</option>
                        <option>Other mergers</option>
                        <option>Other acquisitions</option>
                        <option>Wide cooperation</option>
                        <option>Invade company</option>
                    </StyledSelect>
                    
               </ChosenCategories>
               
                <Title>
                    Specialties
                </Title>
                <ChosenCategories>
                    <StyledSelect onChange={setSpecialities1} >
                            <option>{state.specialities1}</option>
                            <option>Domestic operations</option>
                            <option>International operations</option>
                            <option>Other operations</option>
                            <option>International cooperation</option>
                    </StyledSelect>
                    <StyledSelect onChange={setSpecialities2}>
                            <option>{state.specialities2}</option>
                            <option>Transaction over 5000M$/€</option>
                            <option>Transaction over 50000M$/€</option>
                            <option>Transaction over 100000M$/€</option>
                            <option>Transaction over 1000000M$/€</option>
                    </StyledSelect>
               </ChosenCategories>
                <Title>
                    Admission to practice law
                </Title>
                    <ChosenCategories>
                        <StyledSelect onChange={setAdmission1}>
                            <option>{state.admission1}</option>
                            <option>Berlin bar association</option>
                            <option>Warsaw bar association</option>
                            <option>Stockholm bar association</option>
                            <option>London bar association</option>
                        </StyledSelect>
                        <StyledSelect onChange={setAdmission2}>
                            <option>{state.admission2}</option>
                            <option>Polish bar association</option>
                            <option>British bar association</option>
                            <option>American bar association</option>
                            <option>Thai bar association</option>
                        </StyledSelect>
                    </ChosenCategories>
                <Title>
                    Countries
                </Title>
                    <ChosenCategories>
                        <StyledSelect onChange={setCountries}>
                            <option>{state.countries}</option>
                            <option>Poland</option>
                            <option>Sweden</option>
                            <option>Germany</option>
                            <option>Spain</option>
                        </StyledSelect>
                    </ChosenCategories>
                    <img src="./icons/floppy-disk.png" alt="Save" onClick={()=>{
                        propsy.change(state)
                    }}/>
            </ExpertiseContainer>
        )
}