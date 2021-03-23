import React, { FC } from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

const InnerWrapper = styled.div`
    width:100%; 
    background: ${Colors.white};
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    height:50px;
    z-index:1;
    box-shadow: 0px 0px 4px 4px ${Colors.shadowColor};
    padding:3px;
    
`;

const RightIcons = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    // background-color:green;
    justify-content:space-around;
    width:150px;

    
`
const InputWrapper = styled.div`
    padding:10px;
    
`
const SelectOption = styled.select`
    padding:5px; 
    width:150px;
    border:none;

`
const InputSearch = styled.input`
    background-color: ${Colors.white};
    background-image: url('./icons/search.png');
    background-position: right center; 
    background-repeat: no-repeat;
    padding:5px;
    border: 2px solid ${Colors.lightgrey};
    border-radius:5px;
    width:500px;
    text-align:center;
    
`
const RoundImage = styled.div`
    border-radius:50%;
    background-color:${Colors.lightgrey};
    padding:10px;
    display:flex;   
`
const LefIcons = styled.div`
   display:flex;
   flex-direction:row;
   align-items:center;
   width:250px;
   //background-color:green;
   justify-content:space-around;
     
`

export const TopNav: FC = () =>{
    
    return(
       <Wrapper>
           <InnerWrapper>
                <LefIcons>
                    <div>
                        <img src="./icons/PngItem_788231.png" alt="Logo" width="40"/>
                    </div>
                    <div>
                        <img src="./icons/house2.svg" alt="House"/>
                    </div>
                    <div>
                        <SelectOption>
                            <option>Home</option>
                            <option>Profile</option>
                        </SelectOption>
                    </div>
                    
                </LefIcons>
                <InputWrapper>
                        <InputSearch placeholder="Search Legalcluster"/>
                              
                </InputWrapper>
                <RightIcons>
                        <div>
                            <img src="./icons/house.png" alt="House"/>
                        </div>
                        <RoundImage>
                            <img src="./icons/comments.png" alt="Comments"/>
                        </RoundImage>
                        <RoundImage>
                            <img src="./icons/bell.png" alt="Bell"/>
                        </RoundImage>
                    
                </RightIcons>
           </InnerWrapper>

                
                
           
        </Wrapper>
    );
    
        
    
};