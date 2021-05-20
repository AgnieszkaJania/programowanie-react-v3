import React, { FC } from "react";
import styled from "styled-components";


const ExpertiseContainer = styled.div`
  width:95%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  /* background-color:pink; */
  
`
const Title = styled.div`
    color:grey;
`
const ChosenCategories=styled.div`
    display:flex;
    margin: 10px 0px;
`
const StyledSelect = styled.div`
    padding:5px;
    background-color:#b3ecf3;
    border-radius:5px;
    color:#5e5ef7;
    margin-right:10px;
    border-color:rgba(0,0,0,0);
`
export interface IExpertise{
    expertise: string,
    specialities1: string,
    specialities2:string,
    admission1:string,
    admission2: string,
    countries:string,
}
export const ExpertiseNotEdited: FC<IExpertise> = (props) => {
        return(
            <ExpertiseContainer>
                <Title>
                    Expertise
                </Title>
               <ChosenCategories>
                    <StyledSelect >
                     {props.expertise}  
                    </StyledSelect>
                    
               </ChosenCategories>
               
                <Title>
                    Specialties
                </Title>
                <ChosenCategories>
                    <StyledSelect >
                        {props.specialities1}    
                    </StyledSelect>
                    <StyledSelect >
                           {props.specialities2} 
                    </StyledSelect>
               </ChosenCategories>
                <Title>
                    Admission to practice law
                </Title>
                    <ChosenCategories>
                        <StyledSelect >
                           {props.admission1}
                        </StyledSelect>
                        <StyledSelect >
                            {props.admission2}
                        </StyledSelect>
                    </ChosenCategories>
                <Title>
                    Countries
                </Title>
                    <ChosenCategories>
                        <StyledSelect >
                            {props.countries}
                        </StyledSelect>
                    </ChosenCategories>
            </ExpertiseContainer>
        )
}