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
            padding:0 22px;
            /* background-color:red; */
            margin-top:10px;
            margin-bottom:10px;
            display:flex;
            justify-content:flex-start;   
        }
    }
    button{
        display:none;
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
    /* margin: 0 30px; */
   

    
    

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
const TitleUsers = styled.div`
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
const Dot = styled.img`
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
        slidesToShow: 3.5,
        slidesToScroll: 1
    }

    return(
        <SliderWrapper>
            <CustomSlider {...settings}>
                <div>
                    <BetterLink to="/clientContract">
                        <SliderElement>
                            <Picture/>
                            <BigIcon>
                                <Icon src="./icons/administration.png" alt="Administration"/> 
                            </BigIcon>
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
                    </BetterLink>
                </div>
                <div>
                    <SliderElement>
                        <Picture/>
                        <BigIcon>
                            <Icon src="./icons/administration.png" alt="Administration"/> 
                        </BigIcon>
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
                        <BigIcon>
                            <Icon src="./icons/entities.png" alt="Entities"/> 
                        </BigIcon>
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
                        <BigIcon>
                            <Icon src="./icons/administration.png" alt="Administration"/> 
                        </BigIcon>
                        <Title>Group norms</Title>
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
                        <BigIcon>
                            <Icon src="./icons/administration.png" alt="Administration"/> 
                        </BigIcon>
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
            </CustomSlider>
        </SliderWrapper>
    )
}