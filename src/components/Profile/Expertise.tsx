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

export const Expertise: FC = () => {
        return(
            <ExpertiseContainer>
                <Title>
                    Expertise
                </Title>
               <ChosenCategories>
                    <StyledSelect >
                        <option>Mergers and acquisitions</option>
                        <option>sel 1</option>
                        <option>sel 2</option>
                        <option>sel 3</option>
                        <option>sel 4</option>
                    </StyledSelect>
                    
               </ChosenCategories>
               
                <Title>
                    Specialties
                </Title>
                <ChosenCategories>
                    <StyledSelect >
                            <option>Cross border operation</option>
                            <option>sel 1</option>
                            <option>sel 2</option>
                            <option>sel 3</option>
                            <option>sel 4</option>
                    </StyledSelect>
                    <StyledSelect >
                            <option>Transaction over 500M$/€</option>
                            <option>sel 1</option>
                            <option>sel 2</option>
                            <option>sel 3</option>
                            <option>sel 4</option>
                    </StyledSelect>
               </ChosenCategories>
                <Title>
                    Admission to practice law
                </Title>
                    <ChosenCategories>
                        <StyledSelect >
                            <option>Paris bar association</option>
                            <option>sel 1</option>
                            <option>sel 2</option>
                            <option>sel 3</option>
                            <option>sel 4</option>
                        </StyledSelect>
                        <StyledSelect >
                            <option>Tunisian bar association</option>
                            <option>sel 1</option>
                            <option>sel 2</option>
                            <option>sel 3</option>
                            <option>sel 4</option>
                        </StyledSelect>
                    </ChosenCategories>
                <Title>
                    Countries
                </Title>
                    <ChosenCategories>
                        <StyledSelect >
                            <option>Tunisia</option>
                            <option>Poland</option>
                            <option>Sweden</option>
                            <option>Germany</option>
                            <option>Spain</option>
                        </StyledSelect>
                    </ChosenCategories>
            </ExpertiseContainer>
        )
}