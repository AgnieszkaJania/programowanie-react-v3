import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { ICommentReducer } from '../../../reducers/commentReducers';


const MainWrapper = styled.div`
    display:flex;
    flex-direction:column;
`
const CommentWrapper = styled.div`
    box-shadow: 0px 0px 2px 2px ${Colors.shadowColor};
    background-color:${Colors.white};
    border-radius: 3px;
`

export  const ResumeYourWorkContainer: FC = () =>{

    const { commentList } = useSelector<IState, ICommentReducer>(globalState => ({
        ...globalState.comment,
           
    }));

    return(
        
        <MainWrapper>
            {console.log(commentList)}
            
            <div></div>
        </MainWrapper>
    )
}