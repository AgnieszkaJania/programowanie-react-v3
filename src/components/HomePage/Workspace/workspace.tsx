import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IPostReducer } from '../../../reducers/postReducers';
import { Colors } from '../../../styledHelpers/Colors';
import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { IFotoReducer } from '../../../reducers/fotoReducers';


export const MainBoardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:30px;
    //background-color:yellow;
    width:70%;
    color:${Colors.lightblack};
    font-family: 'Courier New', Courier, monospace;
    
`
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
    //background-color:yellow;
    margin-left:10px;
    width:100%;
    
`
const ImageText = styled.div`
    //background-color:yellow;
    background-image: url('./icons/skyscrapers.jpg');
    background-repeat: no-repeat;
    width:40%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    color:white;
    
    
    
`
const TitleWrapper = styled.div`
    font-weight: bold;
    font-size:120%;
`
const ArticlesContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    //background-color:red;
`
const Workspaces = styled.div`
   background-color:red;
    display:flex;
    width:100%;
    margin-top:20px;
    margin-left:20px;

`
const ResumeYourWork = styled.div`
    display:flex;
    flex-direction:column;
`
const Article = styled.div`
    display:flex;
    justify-content:flex-start;
    padding-top:5px;
    //background-color:green;
`
const ArticleImage = styled.div`
    min-width: 60px;
    height: 60px;
    background-image: url('./icons/skyscrapers.jpg');
    
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

export const Workspace: FC = () =>{
    
    const { postList,fotoList, usersList, currentPost } = useSelector<IState, IPostReducer & IUsersReducer & IFotoReducer>(globalState => ({
        ...globalState.post,
        ...globalState.users,
        ...globalState.foto
        
    }));
    return(
        <MainBoardWrapper>
            {console.log(postList)}
            {postList.length > 0 && fotoList.length > 0 && usersList.length > 0 &&
                <LatestPublications>
                    <ImageText>
                           <ImageTexInnerDiv>
                            <TitlePublicationContainer>
                                    {currentPost.title}
                                </TitlePublicationContainer>
                                <UserInfoContainer>
                                    <DateUserContainer>
                                        <p>7 jan. 2020</p>
                                    </DateUserContainer>
                                    <PostUserPhoto src={fotoList[currentPost.userId - 1].url} alt="User logo"/>
                                    <MainNameUserContainer>
                                        {usersList[currentPost.userId - 1].name}
                                    </MainNameUserContainer>

                                            
                                </UserInfoContainer>
                           </ImageTexInnerDiv>
                    </ImageText> 
                    <LatestPubTextWrapper>
                        <TitleWrapper>
                            Latest publications
                    
                        </TitleWrapper>
                    

                            <ArticlesContainer>
                                                    
                                <Article>
                                    <ArticleImage/>
                                    <TextContainer>
                                        <TitlePublicationContainer>
                                            {currentPost.title}
                                        </TitlePublicationContainer>
                                        <UserInfoContainer>
                                            <DateUserContainer>
                                                <p>7 jan. 2020</p>
                                            </DateUserContainer>
                                            <PostUserPhoto src={fotoList[currentPost.userId - 1].url} alt="User logo"/>
                                            <NameUserContainer>
                                                {usersList[currentPost.userId - 1].name}
                                            </NameUserContainer>

                                        
                                        </UserInfoContainer>
                                    </TextContainer>
                                </Article>
                                <Article>
                                    <ArticleImage/>
                                    <TextContainer>
                                        <TitlePublicationContainer>
                                            {currentPost.title}
                                        </TitlePublicationContainer>
                                        <UserInfoContainer>
                                            <DateUserContainer>
                                                <p>7 jan. 2020</p>
                                            </DateUserContainer>
                                            <PostUserPhoto src={fotoList[currentPost.userId - 1].url} alt="User logo"/>
                                            <NameUserContainer>
                                                {usersList[currentPost.userId - 1].name}
                                            </NameUserContainer>

                                        
                                        </UserInfoContainer>
                                    </TextContainer>
                                </Article>
                                <Article>
                                    <ArticleImage/>
                                    <TextContainer>
                                        <TitlePublicationContainer>
                                            {currentPost.title}
                                        </TitlePublicationContainer>
                                        <UserInfoContainer>
                                            <DateUserContainer>
                                                <p>7 jan. 2020</p>
                                            </DateUserContainer>
                                            <PostUserPhoto src={fotoList[currentPost.userId - 1].url} alt="User logo"/>
                                            <NameUserContainer>
                                                {usersList[currentPost.userId - 1].name}
                                            </NameUserContainer>

                                        
                                        </UserInfoContainer>
                                    </TextContainer>
                                </Article>
                            </ArticlesContainer>
                        <div>See more publications</div>

                    </LatestPubTextWrapper>

                </LatestPublications>
            }
            <Workspaces>
                <TitleWrapper>
                    Workspaces
                </TitleWrapper>
            </Workspaces>
            <ResumeYourWork>
                <TitleWrapper>
                    Resume your work
                </TitleWrapper>
            </ResumeYourWork>
        </MainBoardWrapper>
    );
    
        
    
};