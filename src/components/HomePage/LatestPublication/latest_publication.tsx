import React, { FC } from "react";
import { useSelector } from 'react-redux';
import { IPostReducer } from '../../../reducers/postReducers';
import { Colors } from '../../../styledHelpers/Colors';
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { IFotoReducer } from '../../../reducers/fotoReducers';
import styled from 'styled-components';
import { Article } from "../Workspace/article";

const LatestPublications = styled.div`
    width:100%;
    background-color:${Colors.white};
    box-shadow: 0px 0px 2px 2px ${Colors.shadowColor};
    display:flex;
    border-radius: 3px;
`
const LatestPubTextWrapper = styled.div`
    text-align:left;
    padding:5px;
    margin-left:10px;
    width:100%;
    
`
const ImageText = styled.div`
    background-image: url('./icons/skyscrapers.jpg');
    background-repeat: no-repeat;
    width:40%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    color:white;
`
const NameUserContainer = styled.div`
    display:flex;
    font-size:13px;
    color:${Colors.black};
    margin-left: 5px;
`
const MainNameUserContainer = styled(NameUserContainer)`
    color:${Colors.white};
`
const PostUserPhoto = styled.img`
    width:20px;
    height:20px;
    margin-left:10px;
    border-radius:10px;
`
const UserInfoContainer = styled.div`
    display:flex;
    align-items:center;
`
const ImageTexInnerDiv = styled.div`
    padding-left:10px;
    padding-bottom:20px;
`

const TitlePublicationContainer = styled.div`
    font-weight:bold;
    text-align:left;
`
const DateUserContainer = styled.div`
    display:flex;
    font-size:13px;
`
const TitleWrapper = styled.div`
    font-weight: bold;
    font-size:120%;
`
const ArticlesContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

export const LatestPublication: FC = () =>{
    const { postList,fotoList, usersList, currentPost } = useSelector<IState, IPostReducer & IUsersReducer & IFotoReducer>(globalState => ({
        ...globalState.post,
        ...globalState.users,
        ...globalState.foto
        
    }));
    
    return(
        <LatestPublications>
        <ImageText>
               <ImageTexInnerDiv>
                    <TitlePublicationContainer>
                            {currentPost?.title || ""}
                    </TitlePublicationContainer>
                    <UserInfoContainer>
                        <DateUserContainer>
                            <p>7 jan. 2020</p>
                        </DateUserContainer>
                        <PostUserPhoto src={fotoList?.find(a=> a?.id === currentPost?.userId)?.url || ""} alt="User logo"/>
                        <MainNameUserContainer>
                            {usersList?.find(a => a?.id === currentPost?.userId)?.name || ""}
                        </MainNameUserContainer>

                                    
                    </UserInfoContainer>
               </ImageTexInnerDiv>
        </ImageText> 
        <LatestPubTextWrapper>
            <TitleWrapper>
                Latest publications
        
            </TitleWrapper>
        

                <ArticlesContainer>                   
                   <Article photo={fotoList.find(a=> a?.id === postList[2]?.userId)?.url || ""} alt="User photo" 
                   name={usersList?.find(a => a?.id === postList[2]?.userId)?.name || ""} title={postList[2]?.title || ""}/>
                   <Article photo={fotoList.find(a=> a?.id === postList[3]?.userId)?.url || ""} alt="User photo" 
                   name={usersList?.find(a => a?.id === postList[3]?.userId)?.name || ""} title={postList[3]?.title || ""}/>
                   <Article photo={fotoList.find(a=> a?.id === postList[10]?.userId)?.url || ""} alt="User photo" 
                   name={usersList?.find(a => a?.id === postList[10]?.userId)?.name || ""} title={postList[10]?.title || ""}/>
                </ArticlesContainer>
            <div>See more publications</div>

        </LatestPubTextWrapper>

        </LatestPublications>
    );
    
        
    
};