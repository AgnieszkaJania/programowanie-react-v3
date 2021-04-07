import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { Cateories } from '../TopNav/top_nav'; 
import { OtherIcons } from '../LeftMenu/left_menu';
import { Link } from 'react-router-dom';

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
// function chosenArea(e){
//     console.log('done');

// }
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

export const ExpandedMenu: FC =()=>{

    return(
        <ExMenuWrapper>
                <FilterInput  placeholder="Filter..."></FilterInput>
            <ScrollCategory>
                
                <CategoryWrapper>
                
                    <CategoryLabel><p>Platform</p></CategoryLabel>
                    <Link to="/">
                        
                        <MenuItem>
                            <OtherIcons>
                                <img src="./icons/house2.svg" alt="House"/>
                            </OtherIcons>
                            <Cateories>
                                    Home    
                            </Cateories>  
                        </MenuItem>
                    </Link>
                    <Link to="/Publications">
                        <MenuItem>
                            <OtherIcons>
                                <img src="./icons/publications.png" alt="YourPublications"/> 
                            </OtherIcons>
                            <Cateories>
                                Publications
                            </Cateories>
                        </MenuItem>
                    </Link>
                    <Link to ="/People">
                        <MenuItem>
                            <OtherIcons>
                                <img src="./icons/people.png" alt="People"/>
                            </OtherIcons>
                            <Cateories>
                                People
                            </Cateories>
                        </MenuItem>
                    </Link>
                    
                    <Link to="/Entities">
                        <MenuItem>
                            <OtherIcons>
                                <img src="./icons/entities.png" alt="Entities"/> 
                            </OtherIcons>
                            <Cateories>
                                Entities
                            </Cateories>
                        </MenuItem>
                    </Link>
                    <Link to="/Administration">
                        <MenuItem>
                            <OtherIcons>
                                <img src="./icons/administration.png" alt="Administration"/> 
                            </OtherIcons>
                            <Cateories>
                                Administration
                            </Cateories>
                        </MenuItem>
                    </Link>
                </CategoryWrapper>

                <CategoryWrapper>
                    <CategoryLabel><p>Workspaces</p></CategoryLabel>
                    <MenuItem>                                          
                        <OtherIcons>
                            <img src="./icons/administration.png" alt="Administration"/> 
                        </OtherIcons>
                        <Cateories>
                            Client contract
                        </Cateories>
                    </MenuItem>
                    <MenuItem>                       
                        <OtherIcons>
                            <img src="./icons/administration.png" alt="Administration"/> 
                        </OtherIcons>
                        <Cateories>
                            Supplier contract
                        </Cateories>
                    </MenuItem>
                    <MenuItem>                       
                        <OtherIcons>
                            <img src="./icons/entities.png" alt="Entities"/> 
                        </OtherIcons>
                        <Cateories>
                            Corporate
                        </Cateories>
                    </MenuItem>
                    <MenuItem>                      
                        <OtherIcons>
                            <img src="./icons/administration.png" alt="Administration"/> 
                        </OtherIcons>
                        <Cateories>
                            Group norms 
                        </Cateories>
                    </MenuItem>
                    <MenuItem>                       
                        <OtherIcons>
                            <img src="./icons/administration.png" alt="Administration"/> 
                        </OtherIcons>
                        <Cateories>
                            Real estate contracts
                        </Cateories>
                    </MenuItem>
                </CategoryWrapper> 
            </ScrollCategory>  
         
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

            </CategoryWrapper>
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