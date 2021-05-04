import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { ICommentReducer } from "../../../reducers/commentReducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { fontSize } from '../../../styledHelpers/FontSizes';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentWrapper = styled.div`
  box-shadow: 0px 0px 2px 2px ${Colors.shadowColor};
  background-color: ${Colors.white};
  border-radius: 3px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;
const CommentTitle = styled.p`
    color:${Colors.blue};
    font-weight: bold;
    font-size: ${fontSize[16]};
    margin: 5px 15px;
    
`



const PageElements = styled.div`
    display: flex;
    justify-content:center;
    div{
        padding: 5px;
        font-weight:bold;
        color:#0587bb;
    }
`;

const PER_PAGE = 10;

export const ResumeYourWorkContainer: FC = () => {
  const { commentList, currentUser  } = useSelector<IState, ICommentReducer & IUsersReducer>(
    (globalState) => ({
      ...globalState.users,
      ...globalState.comment
    })
  );

  const [state, setState] = useState({
    page: 0,
    maxPage: 0,
    comments: [...commentList]
  });

  useEffect(() => {
    setState({ ...state, maxPage: (Math.ceil(commentList.length / PER_PAGE)-1) });
  }, [commentList]);

  const currentElement = state.page * PER_PAGE;
  const ItemsPerPage = commentList.slice(
    currentElement,
    currentElement + PER_PAGE
  );
  
  function SetPage(page:number){
    if ( page > state.maxPage) {
        page = 0;
    }
    else if(page < 0){
        page = state.maxPage;
    }
    setState({
        ...state,
        page: page,
    });
  }

  return (
    <MainWrapper>
        {console.log(state)}
      {ItemsPerPage.map((item, i) => (
        <CommentWrapper key={i}>
          <CommentTitle>{item.name}</CommentTitle>
          {item.body}
        </CommentWrapper>
      ))}
      <PageElements>
        <div onClick={()=>{SetPage(state.page-1)}}>Previous</div>
        {
          state.page !== 0 &&
          <div onClick={()=>{SetPage(0)}}>1</div>
        }
        {
            state.page >1 &&
            <><div>...</div><div>{state.page}</div></>
        }
        <div>{state.page+1}</div>
        {
            state.page < state.maxPage-1&&
            <><div>{state.page+2}</div><div>...</div></>
        }
        {
            state.page !==state.maxPage &&
            <div onClick={()=>{SetPage(state.maxPage)}}>{state.maxPage + 1}</div>
        }
        <div onClick={()=>{SetPage(state.page+1)}}>Next</div>
      </PageElements>
    </MainWrapper>
  );
};
