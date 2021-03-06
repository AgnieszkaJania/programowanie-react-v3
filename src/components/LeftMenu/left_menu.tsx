import React, { FC } from 'react';
import styled from 'styled-components';
import { fontSize } from '../../styledHelpers/FontSizes';
import { Colors } from '../../styledHelpers/Colors';
import { BetterLink } from '../../styledHelpers/betterLinks';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IFotoReducer } from '../../reducers/fotoReducers';


const LeftWrapper = styled.div`
    float:left;
    width: 20%;
    background-color:${Colors.white};
    font-family: 'Courier New', Courier, monospace;
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
    align-content: space-around;
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
export const OtherIcons = styled.div`
    display:flex;
    width:20%;
    //background-color:green;
    
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
export const UserPhoto = styled.img`
    width:45px;
    border-radius:50px;
    height:45px;
`

export const LeftMenu: FC = () =>{
    
    const { usersList, fotoList, currentUser } = useSelector<IState, IUsersReducer & IFotoReducer>(globalState => ({
        ...globalState.users,
        ...globalState.foto
    }));

    return(
       
        <LeftWrapper>
            {console.log(usersList)}
            {console.log(fotoList)}
            {usersList.length > 0 && fotoList.length > 0 && 
                <ProfileInfo>
                    <BetterLink to="/profile">
                    <UpperProfile>
                        <ProfileElements>
                            <UserPhoto src={fotoList.find(a=>a.id === currentUser?.id)?.url || ""} alt="Logo" />
                        </ProfileElements>
                        <ProfileElements>
                        <UserName>
                            {usersList[0].name}
                        </UserName>
                        </ProfileElements>
                        <ProfileElements>
                            <UserDesc>
                            Job title - {usersList[0].company.name}
                            </UserDesc>
                        </ProfileElements>
                    </UpperProfile>
                    </BetterLink>
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
            }
            
            <OtherInfo>
               <BetterLink to = "/publications">
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
               </BetterLink>
               <BetterLink to="/ecosystem">
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
               </BetterLink>
                <BetterLink to="/entities">
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
                </BetterLink>
                
            </OtherInfo>
           
        </LeftWrapper>
        
    );
    
        
    
};