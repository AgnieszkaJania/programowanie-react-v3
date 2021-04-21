import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { Cateories } from '../TopNav/top_nav'; 
import { OtherIcons } from '../LeftMenu/left_menu';
import { BetterLink } from '../../styledHelpers/betterLinks';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IFotoReducer } from '../../reducers/fotoReducers';
import{BasicLink} from '../../styledHelpers/betterLinks'

const ExMenuWrapper = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    background-color:white;
    border: 1px solid ${Colors.lightgrey};
    height:80vh;
    min-width:100%;
    
    
`
const CategoryWrapper = styled.div`

`
const CustomText = styled.p`
    text-decoration:none;
`
const ScrollCategory = styled.div`
    overflow:auto;
    border-bottom: 1px solid grey;
`
export const MenuItem = styled.div`
    padding:10px 5px;
    display:flex;
    justify-content:flex-start;
    align-items:center;  
    //background-color:yellow;
    //width:100%; 

`
const CategoryLabel = styled.div`
    color:${Colors.grey};
`

const FilterInput = styled.input`
    border: 1px solid ${Colors.lightgrey};
    border-radius:5px;
    margin: 3px 5px;
    padding:5px;
`
const LogoutWrapper = styled.div`
    display:flex;
    justify-content:center;
    padding:5px;
    border-top: 1px solid grey;
`
const MenuPhoto = styled.img`
    width:20%;
    height:20%;
    border-radius:50px;
`


export const ExpandedMenu: FC =()=>{

    const { usersList, fotoList, currentUser } = useSelector<IState, IUsersReducer & IFotoReducer>(globalState => ({
        ...globalState.users,
        ...globalState.foto
    }));

    return(
        <ExMenuWrapper>
                <FilterInput  placeholder="Filter..."></FilterInput>
            <ScrollCategory>
                
                <CategoryWrapper>
                
                    <CategoryLabel><p>Platform</p></CategoryLabel>
                    <BetterLink to="/">
                        
                        <MenuItem>
                            <OtherIcons>
                                <img src="./icons/house2.svg" alt="House"/>
                            </OtherIcons>
                            <Cateories>
                                    <CustomText>Home</CustomText>    
                            </Cateories>  
                        </MenuItem>
                    </BetterLink>
                    <BetterLink to="/publications">
                        <MenuItem>
                            <OtherIcons>
                                <img src="./icons/publications.png" alt="YourPublications"/> 
                            </OtherIcons>
                            <Cateories>
                                Publications
                            </Cateories>
                        </MenuItem>
                    </BetterLink>
                    <BetterLink to ="/people">
                        <MenuItem>
                            <OtherIcons>
                                <img src="./icons/people.png" alt="People"/>
                            </OtherIcons>
                            <Cateories>
                                People
                            </Cateories>
                        </MenuItem>
                    </BetterLink>
                    
                    <BetterLink to="/entities">
                        <MenuItem>
                            <OtherIcons>
                                <img src="./icons/entities.png" alt="Entities"/> 
                            </OtherIcons>
                            <Cateories>
                                Entities
                            </Cateories>
                        </MenuItem>
                    </BetterLink>
                    <BetterLink to="/administration">
                        <MenuItem>
                            <OtherIcons>
                                <img src="./icons/administration.png" alt="Administration"/> 
                            </OtherIcons>
                            <Cateories>
                                Administration
                            </Cateories>
                        </MenuItem>
                    </BetterLink>
                </CategoryWrapper>

                <CategoryWrapper>
                    <CategoryLabel><p>Workspaces</p></CategoryLabel>
                    <BetterLink to="/clientContract">
                        <MenuItem>                                          
                            <OtherIcons>
                                <img src="./icons/administration.png" alt="Administration"/> 
                            </OtherIcons>
                            <Cateories>
                                Client contract
                            </Cateories>
                        </MenuItem>
                    </BetterLink>
                    <BetterLink to="/supplierContract">
                        <MenuItem>                       
                            <OtherIcons>
                                <img src="./icons/administration.png" alt="Administration"/> 
                            </OtherIcons>
                            <Cateories>
                                Supplier contract
                            </Cateories>
                        </MenuItem>
                    </BetterLink>
                    <BetterLink to="/corporate">
                        <MenuItem>                       
                            <OtherIcons>
                                <img src="./icons/entities.png" alt="Entities"/> 
                            </OtherIcons>
                            <Cateories>
                                Corporate
                            </Cateories>
                        </MenuItem>
                    </BetterLink>
                    <BetterLink to="/groupNorms">
                        <MenuItem>                      
                            <OtherIcons>
                                <img src="./icons/administration.png" alt="Administration"/> 
                            </OtherIcons>
                            <Cateories>
                                Group norms 
                            </Cateories>
                        </MenuItem>
                    </BetterLink>
                    <BetterLink to="/realEstateContracts">
                        <MenuItem>                       
                            <OtherIcons>
                                <img src="./icons/administration.png" alt="Administration"/> 
                            </OtherIcons>
                            <Cateories>
                                Real estate contracts
                            </Cateories>
                        </MenuItem>
                    </BetterLink>
                </CategoryWrapper> 
            </ScrollCategory>  
            {usersList.length > 0 && fotoList.length > 0 && 
                <CategoryWrapper>
                    
                    <CategoryLabel>Account</CategoryLabel>
                    <MenuItem>
                        <OtherIcons>
                            <img src="./icons/settings.png" alt="Settings"/>  
                        </OtherIcons>
                        <Cateories>
                            Settings     
                        </Cateories>
                    </MenuItem>
                    <MenuItem>
                        <OtherIcons>
                            <img src="./icons/privacy.png" alt="Privacy"/>   
                        </OtherIcons>
                        <Cateories>
                            Privacy     
                        </Cateories>
                    </MenuItem>
                    <MenuItem>
                        <MenuPhoto src={fotoList[currentUser.id].url} alt="Logo"/> 
                        <Cateories>
                            {usersList[0].name}
                            <div>See profile</div>
                        </Cateories>
                        
                    </MenuItem>

                </CategoryWrapper>
            }
            <CategoryWrapper>
                <LogoutWrapper>
                    <div>
                        <img src="./icons/logout.png" alt="logout"/> 
                    </div>
                    <Cateories>
                        Logout
                    </Cateories>
                </LogoutWrapper>
            </CategoryWrapper>

        </ExMenuWrapper>
    )
}