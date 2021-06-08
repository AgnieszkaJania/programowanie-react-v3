import React, { FC, useState } from "react";
import styled from "styled-components";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IFotoReducer } from "../../reducers/fotoReducers";
import { useSelector } from "react-redux";
import { ICorrespondants } from "./CorrespondantsNotEdited";

const CorrespondantContainer = styled.div`
    position:relative;
`
const SaveIcon = styled.img`
      position:absolute;
      right:0;
      bottom:100px;
      width:40px;
      height:40px;
`

const Correspondant = styled.div`
    background-color:#ecf8f8;
    display:flex;
    margin:5px 0px;
    padding:5px;
    align-items:center;
    >img{
        width:30px;
        height:30px;
        border-radius:50px;
    }
    >div{
        /* font-weight:bold; */
        display:flex;
        /* background-color:pink; */
        align-items:center;
        margin-left:10px;
    }

`
const TopOneIcon = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px 15px;
  >img{
    width:20px;
    height:20px;
  }
`;
const StyledSelect = styled.select`
    &::-ms-expand{display:none}
    -webkit-appearance:none;
    -moz-appearance:none;
    text-overflow:"";
    text-indent:1px;
    //width:20%;
    padding:5px;
    background-color:#b3ecf3;
    border-radius:5px;
    color:#5e5ef7;
    margin:0px 10px;
    border-color:rgba(0,0,0,0);
    

`;
interface ICorrespondantsData{
    data:ICorrespondants,
    change: (a:ICorrespondants)=>void
}

export const Correspondants: FC<ICorrespondantsData>=(propsy)=>{

    const [state, setState]= useState({
        photo1: propsy.data.photo1,
        name1: propsy.data.name1,
        photo2:propsy.data.photo2,
        name2:propsy.data.name2,
        id1: 0,
        id2:0,
        
    });

    const {
        fotoList,
        usersList,
      } = useSelector<IState, IUsersReducer & IFotoReducer>(
        (globalState) => ({
          ...globalState.users,
          ...globalState.foto,
        })
      );
    const setUser1=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        
        setState({
          ...state,
          id1: Number(event.target.value),
          name1: usersList?.find(a=> a.id === Number(event.target.value))?.name || propsy.data.name1,
          photo1: fotoList?.find(b => b.id === (usersList?.find(a=> a.id === Number(event.target.value))?.id))?.url || propsy.data.photo1, 
        })
        
    }

    const setUser2=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setState({
          ...state,
          id2: Number(event.target.value),
          name2: usersList?.find(a=> a.id === Number(event.target.value))?.name || propsy.data.name2,
          photo2: fotoList?.find(b => b.id === (usersList?.find(a=> a.id === Number(event.target.value))?.id))?.url || propsy.data.photo2,
         
        })
    }
    return(
            <CorrespondantContainer>
                <Correspondant>
                    <img src={state.photo1} alt="Selected user"/>
                    <StyledSelect onChange={setUser1}>
                        <option label={state.name1}>
                            {state.id1} 
                        </option>
                        <option label={usersList[0]?.name}>
                            {usersList[0]?.id}   
                        </option>
                        <option label={usersList[1]?.name}>
                            {usersList[1]?.id}   
                        </option>
                        <option label={usersList[2]?.name}>
                            {usersList[2]?.id}    
                        </option>
                        <option label={usersList[3]?.name}>
                            {usersList[3]?.id}    
                        </option>
                        <option label={usersList[4]?.name}>
                            {usersList[4]?.id}    
                        </option>
                    </StyledSelect>
                    <div>
                        <TopOneIcon>
                            <img src="./icons/comments.png" alt="Message" />
                        </TopOneIcon>
                        <p>Message</p>
                    </div>
                    <div>
                        <TopOneIcon>
                            <img src="./icons/people.png" alt="Profile" />
                        </TopOneIcon>
                        <p>Profile</p>
                    </div>
                </Correspondant>
                <Correspondant>
                    <img src={state.photo2} alt="Selected user"/>
                    <StyledSelect onChange={setUser2}>
                        <option label={state.name2}>
                            {state.id2} 
                        </option>
                        <option label={usersList[5]?.name}>
                            {usersList[5]?.id}   
                        </option>
                        <option label={usersList[1]?.name}>
                            {usersList[1]?.id}   
                        </option>
                        <option label={usersList[6]?.name}>
                            {usersList[6]?.id}    
                        </option>
                        <option label={usersList[7]?.name}>
                            {usersList[7]?.id}    
                        </option>
                        <option label={usersList[8]?.name}>
                            {usersList[8]?.id}    
                        </option>
                    </StyledSelect>
                    <div>
                        <TopOneIcon>
                            <img src="./icons/comments.png" alt="Message" />
                        </TopOneIcon>
                        <p>Message</p>
                    </div>
                    <div>
                        <TopOneIcon>
                            <img src="./icons/people.png" alt="Profile" />
                        </TopOneIcon>
                        <p>Profile</p>
                    </div>
                </Correspondant>
                <SaveIcon src="./icons/floppy-disk.png" alt="Save"  onClick={
                    ()=>{
                      propsy.change(state);
                    }
                }/>
            </CorrespondantContainer>
    )
}