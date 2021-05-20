import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {  setData } from '../../actions/topMenuItem';
import { IState } from '../../reducers';
import { ICommentReducer } from '../../reducers/commentReducers';
import { IFotoReducer } from '../../reducers/fotoReducers';
import { IPostReducer } from '../../reducers/postReducers';
import { IUsersReducer } from '../../reducers/usersReducers';
import { Colors } from '../../styledHelpers/Colors';
type SetData= ReturnType<typeof setData>

const EntitiesWrapper = styled.div`
    /* z-index:1; */
    box-shadow: 0px 0px 2px 2px ${Colors.shadowColor};
    border-radius: 3px;
    background-color:white;
    margin-left:30px;
    color:${Colors.lightblack};
    font-family: 'Courier New', Courier, monospace;
    display:flex;
    flex-direction:column;
    padding:10px;
    
`
const CompaniesContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
`
const CompanyContainer = styled.div`
    /* box-shadow: 0px 0px 2px 2px ${Colors.shadowColor}; */
    border-radius: 3px;
    background-color:white;
    border: 1px solid ${Colors.shadowColor};
    border-bottom: 2px outset ${Colors.shadowColor};
    padding:5px;
    display:flex;
    width:23%;
    margin:5px 3px;

`
const ComapnyImage = styled.img`
    width:85px;
    height:85px;
    border-radius:3px;
`
const TextContainer = styled.div`
    /* background-color:hotpink; */
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding: 5px  0px;
    margin-left:10px;
`
const Title = styled.div`
    font-size:20px;
    font-weight:bold;
    color: ${Colors.blue};
    text-align:left;
`
const Description = styled.div`
    text-align:left;
    font-size:12px;
`
const HeaderContainer = styled.div`
    display:flex;
    justify-content:space-between;
    /* background-color:yellow; */
`
const MosaicMenu = styled.div`
    display:flex;
    /* background-color:red; */
    border:1px solid lightgray;
    border-radius:3px;

`
const Mosaic = styled.div`
    display:flex;
    padding:5px;
    justify-content:center;
    align-items:center;
    background-color:#c6d1e0;
    color:${Colors.blue};
    font-weight:bold;
    img{
        width:20px;
        height:20px;
    }
    p{
        margin-left:5px;
    }
`
const Menu = styled.div`
    display:flex;
    padding:5px;
    img{
        width:30px;
        height:30px;
    }
`
const TitleContainer = styled.div`
    display:flex;
    align-items:center;
    p{
        font-weight:bold;
        font-size:30px;
    }
    img{
        width:20px;
        height:20px;
        margin-left:20px;
    }
`
const OptionsMainContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    margin:10px 0px;
`
const InputFilter = styled.input`
  background-color: ${Colors.white};
  background-image: url("./icons/search.png");
  background-position: right center;
  background-repeat: no-repeat;
  padding: 3px;
  border: 2px solid ${Colors.lightgrey};
  border-radius: 5px;
  width: 150px;
  margin-right:30px;
  text-align: left;
`
const RightIcons = styled.div`
    display:flex;
`
const LeftIcons = styled.div`
    display:flex;
`
const IconContainer= styled.div`
    border-left:1px solid lightgray;

`
const LeftIconsContainer=styled.div`
    border-right: 1px solid lightgray;
    padding-right:10px;
    display:flex;
    align-items:center;
    img{
        width:25px;
        height:25px;
        margin-left:10px;
    }
    p{
        margin-left:5px;
    }
`
const FollowContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border: 2px solid blue;
    border-radius:3px;
    margin-left:30px;
    padding:2px;
    color:blue;
    img{
        margin-left:10px;
    }

`
const AllContainer = styled.div`
    background-color:#c6d1e0;
    border-bottom:1px outset lightgray;
    border-radius:3px;
    color:blue;
    display:flex;
    align-items:center;
    padding:5px;
    img{
        width:15px;
        height:15px;
    }
    p{
        margin:0px 5px;
    }
`
const FollowIcon = styled.div`
    min-width:30px;
    height:30px;
    background-image: url("./icons/frequency.png");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    margin:0px 5px;
    
`
interface IEntities{
    filter:string
}
export const Entities: FC<IEntities> = (props) =>{
    const {
        fotoList,
      } = useSelector<IState, IPostReducer & IUsersReducer & IFotoReducer>(
        (globalState) => ({
          ...globalState.post,
          ...globalState.users,
          ...globalState.foto,
        })
      );

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<SetData>(setData("Entities", "./icons/entities.png"))
    },[fotoList]);
   const PerPage = fotoList.slice(0,32);
   
//    const PerPage = [{
//     fotoId : 0,
//     title: "text",
//     des : "23123"
//    },
//{

//}]
    return(
        <EntitiesWrapper>
            
            <HeaderContainer>
                <TitleContainer>
                    <p>Entities</p>
                    <img src="./icons/cog.png" alt="Settings"/>
                </TitleContainer>
                <MosaicMenu>
                    <Mosaic>
                        <img src="./icons/mosaic.png" alt="Mosaic"/>
                        <p>Mosaic</p>
                    </Mosaic>
                    <Menu>
                        <img src="./icons/menu.png" alt="Menu"/>
                    </Menu>
                </MosaicMenu>
            </HeaderContainer>
            <OptionsMainContainer>
                <LeftIcons>
                    <LeftIconsContainer>
                        <AllContainer>
                            <img src="./icons/button.png" alt="Button"/>
                            <p>All</p>
                            <img src="./icons/arrow-down.svg" alt="Arrow"/>
                        </AllContainer>
                    </LeftIconsContainer>
                    <LeftIconsContainer>
                        <img src="./icons/sort.png" alt="Sort"/>
                        <p>Sort</p>
                        <img src="./icons/filter.png" alt="Filter"/>
                        <p>Filters</p>
                    </LeftIconsContainer>
                    <LeftIconsContainer>
                        <img src="./icons/expand.png" alt="Expand"/>
                    </LeftIconsContainer>
                    <LeftIconsContainer>
                        <img src="./icons/share.png" alt="Share"/>
                        <p>Share</p>
                    </LeftIconsContainer>

                    
                </LeftIcons>
                <RightIcons>
                    <InputFilter placeholder="Search ..."/>
                    <IconContainer>
                        <FollowContainer>
                            <FollowIcon/>
                            <p>Followed</p>
                            <img src="./icons/arrow-down.svg" alt="ArrowDown" />
                        </FollowContainer>
                    </IconContainer>
                </RightIcons>
            </OptionsMainContainer>
            <CompaniesContainer>
                {PerPage.map((item,i)=>(

                    <CompanyContainer key={i}>
                        <ComapnyImage src={item.url}/>
                        <TextContainer>
                            <Title>
                                World company SAS
                            </Title>
                            <Description>
                                Caracas 1050, Districto Capital, Venezuela
                            </Description>
                        </TextContainer>
                    </CompanyContainer>
                ))}
               
            </CompaniesContainer>
        </EntitiesWrapper>
    );
      
};