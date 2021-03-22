import React, { FC } from 'react';
import styled from 'styled-components';
import { TopNav } from '../TopNav/top_nav';
import { LeftMenu } from '../LeftMenu/left_menu';
import { Workspace } from './Workspace/workspace';

const Wrapper = styled.div`
    background-color: white;
    display:flex;
    flex-direction:column;
    padding:10px;
    
    
`;
const Content = styled.div`
    background-color:rgb(241,249,248);
    padding: 20px; 
    display:flex;
    
`;



export const HomePage: FC = () =>{
    
    return(
        <Wrapper>
            <TopNav/>
            <Content>
                <LeftMenu/>
                <Workspace/>
                
            </Content>
        </Wrapper>
    );
    
        
    
};