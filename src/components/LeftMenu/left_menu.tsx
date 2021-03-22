import React, { FC } from 'react';
import styled from 'styled-components';
import { fontSize } from '../../styledHelpers/FontSizes';
import { Wrapper } from '../../styledHelpers/Components';

const LeftWrapper = styled.div`
    float:left;
    width: 20%;
    background-color:white;
    font-family: Arial, Helvetica, sans-serif;
    height:100%;
    

`
const ProfileInfo = styled.div`
    //border: 3px groove grey;
    //background-color:white;
    z-index:1;
    box-shadow: 0px 0px 2px 2px rgb(205,197,197);
    border-radius: 3px;
    
`
const OtherInfo = styled.div`
    padding:10px;
    background-color:rgb(241,249,248);
    margin-top:4px;
`
const UpperProfile = styled.div`

    border-bottom: 1px solid lightgrey; 
    display: flex;
    align-items: center;
    flex-direction:column;
    align-content: space-around
    

`
const LowerProfile = styled.div`
    padding:10px;
`
const UserName = styled.p`
    color:blue;
    font-weight: bold;
    font-size: ${fontSize[14]};
    
`
const UserDesc = styled.p`
    color:lightgrey;
    font-size: ${fontSize[10]};
`
const OtherOptions = styled.div`
    display:flex;
    align-items:center;
    padding:5px;
    justify-content: space-between;
`
const UserOptions = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:5px;
    
    
`
const LeftText = styled.p`
    font-size: ${fontSize[14]};
    color: rgb(97,92,92);
    font-weight: bold;
    
    
`
const OtherIcons = styled.div`
    //margin-right:-100px;
`
const UserOptionsComponents = styled.div`
    text-align:left;
    padding:5px;
    width:150px;
    //background-color:yellow;
    
`
const BorderedIcon = styled.div`
    border: 1px solid grey;
    display:flex;
    border-radius: 3px;
    padding:3px;
`
const ProfileElements = styled.div`
    padding:5px;
`

export const LeftMenu: FC = () =>{
    
    return(
       
        <LeftWrapper>
            <ProfileInfo>
                <UpperProfile>
                    <ProfileElements>
                        <img src="./icons/ClipartKey_3011907.png" alt="Logo" width="40"/>
                    </ProfileElements>
                    <ProfileElements>
                       <UserName>
                           Humberta Swift
                       </UserName>
                    </ProfileElements>
                    <ProfileElements>
                        <UserDesc>
                           Job title - Company
                        </UserDesc>
                    </ProfileElements>
                </UpperProfile>
                <LowerProfile>
                    <UserOptions>
                        <div>
                            <img src="./icons/network.png" alt="Network"/> 
                        </div>
                        <UserOptionsComponents>
                            <LeftText>
                                Your network
                            </LeftText>
                        </UserOptionsComponents>
                        <BorderedIcon>
                            <img src="./icons/user-plus.png" alt="UserPlus"/>
                        </BorderedIcon>
                    </UserOptions>
                    <UserOptions>
                        <div>
                            <img src="./icons/publications.png" alt="YourPublications"/> 
                        </div>
                        <UserOptionsComponents>
                            <LeftText>
                                Your Publications
                            </LeftText>
                        </UserOptionsComponents>
                        <BorderedIcon>
                            <img src="./icons/plus.png" alt="UserPlus"/>
                        </BorderedIcon>
                    </UserOptions>
                </LowerProfile>
            </ProfileInfo>
            <OtherInfo>
                <OtherOptions>
                    <OtherIcons>
                        <img src="./icons/publications.png" alt="Publications"/> 
                    </OtherIcons>
                    <UserOptionsComponents>
                            <LeftText>
                                Publications
                            </LeftText>
                    </UserOptionsComponents>
                    
                </OtherOptions>
                <OtherOptions>
                    <OtherIcons>
                        <img src="./icons/ecosystem.png" alt="Ecosystem"/>
                    </OtherIcons>
                    <UserOptionsComponents>
                            <LeftText>
                               Ecosystem
                            </LeftText>
                    </UserOptionsComponents>
                    
                </OtherOptions>
                <OtherOptions>
                    <OtherIcons>
                        <img src="./icons/entities.png" alt="Entities"/> 
                    </OtherIcons>
                    <UserOptionsComponents>
                            <LeftText>
                                Entities
                            </LeftText>
                    </UserOptionsComponents>
                    
                </OtherOptions>
                
            </OtherInfo>
        </LeftWrapper>
        
    );
    
        
    
};