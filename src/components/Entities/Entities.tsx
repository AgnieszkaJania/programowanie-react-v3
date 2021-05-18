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
const TitleContainer = styled.div`
    display:flex;
    align-items:center;
    /* background-color:hotpink; */
    height:10%;
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



export const Entities: FC = () =>{
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
   const PerPage = fotoList.slice(0,24);
    return(
        <EntitiesWrapper>
            
            <TitleContainer>
                <p>Entities</p>
                <img src="./icons/cog.png" alt="Settings"/>
            </TitleContainer>
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