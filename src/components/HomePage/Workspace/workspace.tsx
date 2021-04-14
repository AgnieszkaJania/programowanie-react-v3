import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

export const MainBoardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:30px;
    background-color:yellow;
    width:70%;
    color:${Colors.lightblack};
`
const LatestPublications = styled.div`
    width:100%;
    background-color:${Colors.white};
    box-shadow: 0px 0px 2px 2px ${Colors.shadowColor};
    display:flex;
`
const LatestPubTextWrapper = styled.div`
    text-align:left;
    padding:5px;
    //background-color:yellow;
    margin-left:10px;
    font-family: Arial, Helvetica, sans-serif;
    width:100%;
    
`
const ImageText = styled.div`
    //background-color:yellow;
    background-image: url('./icons/skyscrapers.jpg');
    background-repeat: no-repeat;
    width:40%;
    height:230px;
    
`
const TitleWrapper = styled.div`
    font-weight: bold;
`
const ArticlesContainer = styled.div`
    display:flex;
    flex-direction:column;
`
const Workspaces = styled.div`
    background-color:red;
    display:flex;
    width:100%;

`
const ResumeYourWork = styled.div`
    display:flex;
    flex-direction:column;
`
interface ITextContentProps{
    name: string;
    surname: string;
    age: number;
}
const MyFunc: FC<ITextContentProps> = (props) =>{
    return(
        <div>
            <div>{props.name}</div>
            <div>{props.surname}</div>
            <div>{props.age}</div>
        
        </div>
        
    )
}

export const Workspace: FC = () =>{
    
    return(
        <MainBoardWrapper>
            <LatestPublications>
                <ImageText/> 
                <LatestPubTextWrapper>
                    <TitleWrapper>
                        Latest publications
                   
                    </TitleWrapper>
                    <ArticlesContainer>
                        List of articles
                    </ArticlesContainer>


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