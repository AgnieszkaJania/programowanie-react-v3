import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import Slider from 'react-slick';
// import { settings } from 'node:cluster';
import { BetterLink } from '../../../styledHelpers/betterLinks';

const SliderWrapper = styled.div`
    width:100%;
    /* background-color:blue; */
`
const CustomSlider = styled(Slider)`
    display:flex;
    align-items:center;
    width:100%;
    overflow:hidden;
    .slick-list{
        width:100%;
        
    }
    .slick-track{
        display:flex;
        align-items:center;
        
        /* background-color:hotpink; */
        > div{
            margin: 10px 17px;
            background-color:red;
            /* margin-top:10px;
            margin-bottom:10px; */
            display:flex;
            justify-content:flex-start;   
        }
    }
    button{
        visibility: hidden;
    }
   
`
const SliderElement = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:250px;
    height:200px;
    box-shadow: 0px 0px 2px 2px ${Colors.shadowColor};
    background-color:${Colors.white};
    border-radius: 3px;
    position:relative;
   
   
    
    
`
const Picture = styled.div`
    background-image: url('./icons/skyscrapers.jpg');
    width:100%;
    height:40%;
    border-radius:3px;
`
const BigIcon = styled.div`
    box-shadow: 0px 0px 2px 2px ${Colors.shadowColor};
    background-color:${Colors.white};
    border-radius: 3px;
    //padding:5px;
    position:absolute;
    top:50px;
    left:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    width:30%;
    height:40%;
`
const Title = styled.div`
    color:${Colors.black};
    font-weight:bold;
    position:absolute;
    left: 90px;
    top:90px;
    //background-color:hotpink;
`

const Icon = styled.img`
    /* background-image: url('./icons/skyscrapers.jpg'); */
    width:40%;
    height:40%;
`
const SliderFooter = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;  
    margin-bottom:5px;
    margin-left:5px;
    color:${Colors.grey};
    font-size:15px;
    height:25%;
    /* background-color:hotpink; */
    
`
export const TitleUsers = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    font-weight:bold;
    width:90%;
    /* background-color:hotpink; */
    >img{
        /* margin-right:5px; */
    }
`


export const Dot = styled.img`
    width:3px;
`
const LastUpdated = styled.div`
    font-size:10px;
`

export const SliderContainer: FC = () =>{

    const settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow: 3.8,
        slidesToScroll: 2
    }

    return(
        <SliderWrapper>
            <CustomSlider {...settings}>
                <div>
                
                        <SliderElement>
                        
                            <Picture/>
                            <BetterLink to="/clientContract">   
                            <BigIcon>
                                <Icon src="./icons/administration.png" alt="Administration"/> 
                            </BigIcon>
                            </BetterLink>
                            <Title>Client contract</Title>
                            <SliderFooter>
                                <TitleUsers>
                                    <img src="./icons/administration.png" alt="Administration"/>
                                    <p>Contract</p>
                                    <Dot src="./icons/black-circle.png" alt="Dot" />
                                    <img src="./icons/people.png" alt="People"/>
                                    <p> 150 users</p>
                                </TitleUsers>
                                <LastUpdated>
                                    <p>Last update 2 days ago</p>
                                </LastUpdated>
                            </SliderFooter>
                        </SliderElement>
                
                </div>
                <div>
                    <SliderElement>
                        <Picture/>
                        <BetterLink to="/supplierContract">
                        <BigIcon>
                            <Icon src="./icons/administration.png" alt="Administration"/> 
                        </BigIcon>
                        </BetterLink>
                        <Title>Supplier contract</Title>
                        <SliderFooter>
                            <TitleUsers>
                                <img src="./icons/administration.png" alt="Administration"/>
                                <p>Contract</p>
                                <Dot src="./icons/black-circle.png" alt="Dot" />
                                <img src="./icons/people.png" alt="People"/>
                                <p> 25 users</p>
                            </TitleUsers>
                            <LastUpdated>
                                <p>Last update 2 days ago</p>
                            </LastUpdated>
                        </SliderFooter>
                    </SliderElement>      
                </div>
                <div>
                    <SliderElement>
                        <Picture/>
                        <BetterLink to="/corporate">
                        <BigIcon>
                            <Icon src="./icons/entities.png" alt="Entities"/> 
                        </BigIcon>
                        </BetterLink>
                        <Title>Corporate</Title>
                        <SliderFooter>
                            <TitleUsers>
                                <img src="./icons/entities.png" alt="Entities"/>
                                <p>Corporate</p>
                                <Dot src="./icons/black-circle.png" alt="Dot" />
                                <img src="./icons/people.png" alt="People"/>
                                <p> 25 users</p>
                            </TitleUsers>
                            <LastUpdated>
                                <p>Last update 2 days ago</p>
                            </LastUpdated>
                        </SliderFooter>
                    </SliderElement>      
                </div>
                <div>
                    <SliderElement>
                        <Picture/>
                        <BetterLink to="/groupNorms">
                        <BigIcon>
                            <Icon src="./icons/administration.png" alt="Administration"/> 
                        </BigIcon>
                        </BetterLink>
                        <Title>Group norms</Title>
                        <SliderFooter>
                            <TitleUsers>
                                <img src="./icons/administration.png" alt="Administration"/>
                                <p>Norms</p>
                                <Dot src="./icons/black-circle.png" alt="Dot" />
                                <img src="./icons/people.png" alt="People"/>
                                <p> 25 users</p>
                            </TitleUsers>
                            <LastUpdated>
                                <p>Last update 2 days ago</p>
                            </LastUpdated>
                        </SliderFooter>
                        
                    </SliderElement>      
                </div>
                <div>
                    <SliderElement>
                        <Picture/>
                        <BetterLink to="/realEstateContracts">
                        <BigIcon>
                            <Icon src="./icons/administration.png" alt="Administration"/> 
                        </BigIcon>
                        </BetterLink>
                        <Title>Real estate contracts</Title>
                        <SliderFooter>
                            <TitleUsers>
                                <img src="./icons/administration.png" alt="Administration"/>
                                <p>Contract</p>
                                <Dot src="./icons/black-circle.png" alt="Dot" />
                                <img src="./icons/people.png" alt="People"/>
                                <p> 25 users</p>
                            </TitleUsers>
                            <LastUpdated>
                                <p>Last update 2 days ago</p>
                            </LastUpdated>
                        </SliderFooter>
                    </SliderElement>      
                </div>
                <div>
                    <SliderElement>
                        <Picture/>
                        <BetterLink to="/">
                        <BigIcon>
                            <Icon src="./icons/house.png" alt="Home"/> 
                        </BigIcon>
                        </BetterLink>
                        <Title>Home</Title>
                        <SliderFooter>
                            <TitleUsers>
                                <img src="./icons/house.png" alt="Home"/>
                                <p>Home</p>
                                <Dot src="./icons/black-circle.png" alt="Dot" />
                                <img src="./icons/people.png" alt="People"/>
                                <p> 25 users</p>
                            </TitleUsers>
                            <LastUpdated>
                                <p>Last update 2 days ago</p>
                            </LastUpdated>
                        </SliderFooter>
                    </SliderElement>      
                </div>
                <div>
                    <SliderElement>
                        <Picture/>
                        <BetterLink to="/publications">
                        <BigIcon>
                            <Icon src="./icons/publications.png" alt="Publications"/> 
                        </BigIcon>
                        </BetterLink>
                        <Title>Publications</Title>
                        <SliderFooter>
                            <TitleUsers>
                                <img src="./icons/publications.png" alt="Publications"/>
                                <p>Publ.</p>
                                <Dot src="./icons/black-circle.png" alt="Dot" />
                                <img src="./icons/people.png" alt="People"/>
                                <p> 25 users</p>
                            </TitleUsers>
                            <LastUpdated>
                                <p>Last update 2 days ago</p>
                            </LastUpdated>
                        </SliderFooter>
                    </SliderElement>      
                </div>
                <div>
                    <SliderElement>
                        <Picture/>
                        <BetterLink to="/people">
                        <BigIcon>
                            <Icon src="./icons/administration.png" alt="Administration"/> 
                        </BigIcon>
                        </BetterLink>
                        <Title>People</Title>
                        <SliderFooter>
                            <TitleUsers>
                                <img src="./icons/administration.png" alt="Administration"/>
                                <p>People</p>
                                <Dot src="./icons/black-circle.png" alt="Dot" />
                                <img src="./icons/people.png" alt="People"/>
                                <p> 30 users</p>
                            </TitleUsers>
                            <LastUpdated>
                                <p>Last update 2 days ago</p>
                            </LastUpdated>
                        </SliderFooter>
                    </SliderElement>      
                </div>
                <div>
                    <SliderElement>
                        <Picture/>
                        <BetterLink to="/entities">
                        <BigIcon>
                            <Icon src="./icons/entities.png" alt="Entities"/> 
                        </BigIcon>
                        </BetterLink>
                        <Title>Entities</Title>
                        <SliderFooter>
                            <TitleUsers>
                                <img src="./icons/entities.png" alt="Entities"/>
                                <p>Entities</p>
                                <Dot src="./icons/black-circle.png" alt="Dot" />
                                <img src="./icons/people.png" alt="People"/>
                                <p> 30 users</p>
                            </TitleUsers>
                            <LastUpdated>
                                <p>Last update 2 days ago</p>
                            </LastUpdated>
                        </SliderFooter>
                    </SliderElement>      
                </div>
                <div>
                    <SliderElement>
                        <Picture/>
                        <BetterLink to="administration">
                        <BigIcon>
                            <Icon src="./icons/administration.png" alt="Administration"/> 
                        </BigIcon>
                        </BetterLink>
                        <Title>Administration</Title>
                        <SliderFooter>
                            <TitleUsers>
                                <img src="./icons/administration.png" alt="Administration"/>
                                <p>Contract</p>
                                <Dot src="./icons/black-circle.png" alt="Dot" />
                                <img src="./icons/people.png" alt="People"/>
                                <p> 150 users</p>
                            </TitleUsers>
                            <LastUpdated>
                                <p>Last update 2 days ago</p>
                            </LastUpdated>
                        </SliderFooter>
                    </SliderElement>      
                </div>
            </CustomSlider>
        </SliderWrapper>
    )
}