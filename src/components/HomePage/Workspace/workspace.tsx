import React, { FC } from 'react';
import styled from 'styled-components';

const MainBoardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:30px;
    //background-color:yellow;
    width:70%;
`
const LatestPublicationWrapper = styled.div`
    width:100%;
    background-color:white;
    z-index:1;
    box-shadow: 0px 0px 2px 2px rgb(205,197,197);
    display:flex;
    
    
    
`
const LatestPubTextWrapper = styled.div`
    text-align:left;
    padding:5px;
    //background-color:yellow;
    margin-left:10px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color:rgb(97,92,92);
    width:100%;
    
`
const ImageText = styled.div`
    //background-color:yellow;
    background-image: url('./icons/skyscrapers.jpg');
    background-repeat: no-repeat;
    width:40%;
    height:230px;
    //float:left;
    
`
const TitleWrapper = styled.div`
    
`


export const Workspace: FC = () =>{
    
    return(
        <MainBoardWrapper>
            <LatestPublicationWrapper>
                <ImageText/> 
                <LatestPubTextWrapper>
                    <TitleWrapper>
                         Latest publications
                    </TitleWrapper>
                </LatestPubTextWrapper>

            </LatestPublicationWrapper>
        </MainBoardWrapper>
    );
    
        
    
};