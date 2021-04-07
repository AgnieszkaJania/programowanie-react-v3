import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { TopNav } from '../TopNav/top_nav';
import { LeftMenu } from '../LeftMenu/left_menu';
//import { Workspace } from './Workspace/workspace';

const Wrapper = styled.div`
    background-color: ${Colors.white};
    display:flex;
    flex-direction:column;
    padding:10px;
    
    
`;
const Content = styled.div`
    background-color:${Colors.backgroundColor};
    padding: 20px; 
    display:flex;
    
`;



export const People: FC = () =>{
    
    return(
        <Wrapper>
            <TopNav chosenItem="People" iconName="people.png"/>
            <Content>
                <LeftMenu/>
               People
                
            </Content>
        </Wrapper>
    );
      
};