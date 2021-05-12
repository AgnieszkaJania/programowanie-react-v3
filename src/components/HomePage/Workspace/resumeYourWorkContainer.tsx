import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Colors } from "../../../styledHelpers/Colors";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { ICommentReducer } from "../../../reducers/commentReducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import {IPostReducer} from "../../../reducers/postReducers";
import { fontSize } from '../../../styledHelpers/FontSizes';
import {TitleUsers} from './slider_container';
import {Dot} from './slider_container';

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
// const CommentFooter = styled.div`
//   display:flex;
//   justify-content:space-around;

// `
const FooterInfo = styled(TitleUsers)`
  width: 70%;
  margin:5px 15px;
  color:${Colors.grey};
  font-size: 14px;

`
const Update = styled.div`
  font-weight:lighter;
`
const CommentBody = styled.div`
  margin: 0px 15px;
`

const PER_PAGE = 10;

const SmallIcon = styled.img`
  width:20px;
  height:20px;
  
`

interface ICostam {
  filter: string,
  zmienna: boolean
}

export const ResumeYourWorkContainer: FC<ICostam> = (props) => {
  const { commentList, currentUser, postList, usersList  } = useSelector<IState, ICommentReducer & IUsersReducer & IPostReducer>(
    (globalState) => ({
      ...globalState.users,
      ...globalState.comment,
      ...globalState.post
    })
  );

  const comment = commentList.filter(a=>a.name.toLowerCase().includes(props.filter));

  //const PostsForCurrentUser = postList.map(item => item.userId === currentUser.id);
  //const CommentsForCurrentUserPosts = commentList.map(item => item.postId == PostsForCurrentUser. )
  const [state, setState] = useState({
    page: 0,
    maxPage: 0,
    comments: [...comment]
  });

  useEffect(() => {
      if(props.zmienna){
        zmien1()
      }else{
        zmien2()
      }
  }, [commentList, props]);

  const currentElement = state.page * PER_PAGE;
  const ItemsPerPage = state.comments.slice(
    currentElement,
    currentElement + PER_PAGE
  );
  
    const zmien1=()=>{
      const a = comment.filter(a=>a.id in [...postList.filter(b=>b.userId === currentUser?.id)]);
      console.log(a);
        setState({
          ...state,
          comments: a,
          maxPage: (Math.ceil(a.length / PER_PAGE)-1)
        });
    }
    const zmien2=()=>{
      setState({ 
        ...state, 
        comments: [...comment],
        maxPage: (Math.ceil(comment.length / PER_PAGE)-1) });
    }
    

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
            <CommentBody>
              {item.body}
            </CommentBody>
            <FooterInfo>
              <SmallIcon src="./icons/entities2.png"/>
              <div>Subsid.corp.</div>
              <Dot src="./icons/black-circle.png" alt="Dot" />
              <SmallIcon src="./icons/administration.png"/>
              <div>Corporate</div>
              <Dot src="./icons/black-circle.png" alt="Dot" />
              <Update>
                <span>Last updated 3 days ago by </span>
                {usersList?.length > 0 &&
                  <>{usersList?.find(a=>a?.id === postList?.find(b=>b?.id===item?.postId)?.userId)?.name || ""}</>
                }
                
              </Update>
            </FooterInfo>
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
