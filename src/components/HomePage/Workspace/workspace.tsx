import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { IPostReducer } from '../../../reducers/postReducers';
import { Colors } from '../../../styledHelpers/Colors';
import { IState } from '../../../reducers';



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
   // background-color:red;
    display:flex;
    width:100%;

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
    
`
const TitlePublicationContainer = styled.div`
    font-weight:bold;
    text-align:left;
`
const DateUserContainer = styled.div`
    display:flex;
    font-size:13px;
`

export const Workspace: FC = () =>{
    
    const { postList } = useSelector<IState, IPostReducer>(globalState => ({
        ...globalState.post
        
    }));
    return(
        <MainBoardWrapper>
            {console.log(postList)}
            <LatestPublications>
                <ImageText/> 
                <LatestPubTextWrapper>
                    <TitleWrapper>
                        Latest publications
                   
                    </TitleWrapper>
                   {postList.length > 0 &&

                        <ArticlesContainer>
                                                
                            <Article>
                                <ArticleImage/>
                                <TextContainer>
                                    <TitlePublicationContainer>
                                        {postList[0].title}
                                    </TitlePublicationContainer>
                                    <DateUserContainer>
                                        <p>7 jan. 2020</p>
                                    </DateUserContainer>
                                </TextContainer>
                            </Article>
                            <Article>
                                <ArticleImage/>
                                <TextContainer>
                                    <TitlePublicationContainer>
                                            {postList[0].title}
                                    </TitlePublicationContainer>
                                    <DateUserContainer>
                                        <p>7 jan. 2020</p>
                                    </DateUserContainer>
                                </TextContainer>
                            </Article>
                            <Article>
                                <ArticleImage/>
                                <TextContainer>
                                    <TitlePublicationContainer>
                                            {postList[0].title}
                                    </TitlePublicationContainer>
                                    <DateUserContainer>
                                        <p>7 jan. 2020</p>
                                    </DateUserContainer>
                                </TextContainer>
                            </Article>
                        </ArticlesContainer>
                        

                    }
                    <div>See more publications</div>

                </LatestPubTextWrapper>

            </LatestPublications>
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