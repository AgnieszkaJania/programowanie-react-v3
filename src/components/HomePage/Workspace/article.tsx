import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';


interface IArticle{
    photo:string,
    alt:string,
    name:string,
    title:string,
}
const SingleArticle = styled.div`
    display:flex;
    justify-content:flex-start;
    padding-top:5px;
    //background-color:green;
`
const ArticleImage = styled.img`
    min-width: 60px;
    height: 60px;
    
    
`
const TextContainer = styled.div`
    margin-left: 10px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    //background-color:green;
    
`
const TitlePublicationContainer = styled.div`
    font-weight:bold;
    text-align:left;
`
const DateUserContainer = styled.div`
    display:flex;
    font-size:13px;
`
const NameUserContainer = styled.div`
    display:flex;
    font-size:13px;
    color:${Colors.black};
    margin-left: 5px;
`
const UserInfoContainer = styled.div`
    display:flex;
    align-items:center;
`
const PostUserPhoto = styled.img`
    width:20px;
    height:20px;
    margin-left:10px;
    border-radius:10px;
`
export const Article: FC<IArticle> = (props) =>{

    return(
        <SingleArticle>
        <ArticleImage src={props.photo} alt={props.alt}/>
        <TextContainer>
            <TitlePublicationContainer>
                {props.title}
            </TitlePublicationContainer>
            <UserInfoContainer>
                <DateUserContainer>
                    <p>7 jan. 2020</p>
                </DateUserContainer>
                <PostUserPhoto src={props.photo} alt={props.alt}/>
                <NameUserContainer>
                    {props.name}
                </NameUserContainer>

            
            </UserInfoContainer>
        </TextContainer>
    </SingleArticle>
    )
}