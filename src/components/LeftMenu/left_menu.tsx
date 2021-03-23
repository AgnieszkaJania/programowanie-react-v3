import React, { FC } from 'react';
import styled from 'styled-components';
import { fontSize } from '../../styledHelpers/FontSizes';
import { Colors } from '../../styledHelpers/Colors';


const LeftWrapper = styled.div`
    float:left;
    width: 20%;
    background-color:${Colors.white};
    font-family: Arial, Helvetica, sans-serif;
    height:100%;
    

`
const ProfileInfo = styled.div`
    z-index:1;
    box-shadow: 0px 0px 2px 2px ${Colors.shadowColor};
    border-radius: 3px;
    
`
const OtherInfo = styled.div`
    padding:10px;
    background-color:${Colors.backgroundColor};
    margin-top:4px;
`
const UpperProfile = styled.div`

    border-bottom: 1px solid ${Colors.lightgrey}; 
    display: flex;
    align-items: center;
    flex-direction:column;
    align-content: space-around
    

`
const LowerProfile = styled.div`
    padding:10px;
`
const UserName = styled.p`
    color:${Colors.blue};
    font-weight: bold;
    font-size: ${fontSize[14]};
    
`
const UserDesc = styled.p`
    color:${Colors.lightgrey};
    font-size: ${fontSize[10]};
`
const OtherOptions = styled.div`
    display:flex;
    justify-content: flex-start;
    //background-color:red;
    margin: 15px 0px;
    
`
const UserOptions = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:5px;
    
    
`

const LeftText = styled.p`
    font-size: ${fontSize[14]};
    color: ${Colors.lightblack};
    font-weight: bold;
    
    
    
`
const OtherIcons = styled.div`
    display:flex;
    width:20%;
    
`
const UserOptionsComponents = styled.div`
    text-align:left;
    padding:5px;
    width:150px;
   
    
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