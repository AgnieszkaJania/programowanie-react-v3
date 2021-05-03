import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { Cateories } from '../TopNav/top_nav'; 
import { OtherIcons } from '../LeftMenu/left_menu';
import { BetterLink } from '../../styledHelpers/betterLinks';
import { useSelector } from 'react-redux';
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IFotoReducer } from '../../reducers/fotoReducers';


const ExMenuWrapper = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    background-color:white;
    border: 1px solid ${Colors.lightgrey};
    max-height:80vh;
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
    background-color:red;
`
const MenuPhoto = styled.img`
    width:20%;
    height:20%;
    border-radius:50px;
`
const LogoutTitle = styled.div`
    margin-left:5px;
`

export const ExpandedMenu: FC =()=>{

    const { usersList, fotoList, currentUser } = useSelector<IState, IUsersReducer & IFotoReducer>(globalState => ({
        ...globalState.users,
        ...globalState.foto
    }));

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        const text = e.target.value;
        setInputText(text);
    }

    return(
        <ExMenuWrapper>
                <FilterInput type="text" value={inputText} onChange={inputHandler}  placeholder="Filter..."/>
            <ScrollCategory>
                
                <CategoryWrapper>
                
                    <CategoryLabel><p>Platform</p></CategoryLabel>
                    {'Home'.toLowerCase().includes(inputText.toLowerCase()) &&
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
                                
                    }           
                    {'Publications'.toLowerCase().includes(inputText.toLowerCase()) &&        
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
                    }
                    {'People'.toLowerCase().includes(inputText.toLowerCase()) &&
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
                    }
                    {'Entities'.toLowerCase().includes(inputText.toLowerCase()) &&
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
                    }
                    {'Administration'.toLowerCase().includes(inputText.toLowerCase()) &&
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
                    }
                </CategoryWrapper>

                <CategoryWrapper>
                    <CategoryLabel><p>Workspaces</p></CategoryLabel>
                    {'Client contract'.toLowerCase().includes(inputText.toLowerCase()) &&
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
                    }
                    {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase()) &&
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
                    }
                    {'Corporate'.toLowerCase().includes(inputText.toLowerCase()) &&
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
                    }
                    {'Group norms'.toLowerCase().includes(inputText.toLowerCase()) &&
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
                    }
                    {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase()) &&
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
                    }
                </CategoryWrapper> 
            </ScrollCategory>  
            {usersList.length > 0 && fotoList.length > 0 && 
                <CategoryWrapper>
                    
                    <CategoryLabel>Account</CategoryLabel>
                    {'Settings'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <MenuItem>
                            <OtherIcons>
                                <img src="./icons/settings.png" alt="Settings"/>  
                            </OtherIcons>
                            <Cateories>
                                Settings     
                            </Cateories>
                        </MenuItem>
                    }
                    {'Privacy'.toLowerCase().includes(inputText.toLowerCase()) &&
                        <MenuItem>
                            <OtherIcons>
                                <img src="./icons/privacy.png" alt="Privacy"/>   
                            </OtherIcons>
                            <Cateories>
                                Privacy     
                            </Cateories>
                        </MenuItem>
                    }
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
                    <LogoutTitle>
                        Logout
                    </LogoutTitle>
                </LogoutWrapper>
            </CategoryWrapper>

        </ExMenuWrapper>
    )
}