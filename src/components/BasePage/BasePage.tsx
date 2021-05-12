import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { TopNav } from '../TopNav/top_nav';
import { LeftMenu } from '../LeftMenu/left_menu';
import { useDispatch } from 'react-redux';
import { getComments } from '../../actions/commentActions';
import { getFotos } from '../../actions/fotoActions';
import { getPosts } from '../../actions/postActions';
import { getUsers } from '../../actions/usersActions';

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
type GetPosts = ReturnType<typeof getPosts>
type GetComments = ReturnType<typeof getComments>

const BasePage: FC = (props) =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch<GetUsers>(getUsers());
        dispatch<GetFotos>(getFotos());
        dispatch<GetPosts>(getPosts());
        dispatch<GetComments>(getComments());

    }, []);


    return(
        <Wrapper>
            <TopNav/>
            <Content>
                <LeftMenu/>
                {props.children}
                
            </Content>
        </Wrapper>
    );
      
};

export default BasePage;