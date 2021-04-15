import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { TopNav } from '../TopNav/top_nav';
import { LeftMenu } from '../LeftMenu/left_menu';
import { Workspace } from './Workspace/workspace';
import {useDispatch} from 'react-redux';
import { getUsers } from '../../actions/usersActions';
import { getFotos } from '../../actions/fotoActions';

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

type GetUsers = ReturnType<typeof getUsers>
type GetFotos = ReturnType<typeof getFotos>

export const HomePage: FC = () =>{

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<GetUsers>(getUsers());
        dispatch<GetFotos>(getFotos());

    }, []);
    
    return(
        <Wrapper>
            <TopNav chosenItem="Home"/>
            <Content>
                <LeftMenu/>
                <Workspace/>
                
            </Content>
        </Wrapper>
    );
      
};