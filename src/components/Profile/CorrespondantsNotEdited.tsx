import React, { FC } from "react";
import styled from "styled-components";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IFotoReducer } from "../../reducers/fotoReducers";
import { useSelector } from "react-redux";

const CorrespondantContainer = styled.div`

`
export interface ICorrespondants{
    photo1:string;
    name1:string;
    photo2: string;
    name2: string;
}

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

export const CorrespondantsNotEdited: FC<ICorrespondants>=(props)=>{

    const {
        fotoList,
        usersList,
      } = useSelector<IState, IUsersReducer & IFotoReducer>(
        (globalState) => ({
          ...globalState.users,
          ...globalState.foto,
        })
      );

    return(
            <CorrespondantContainer>
                <Correspondant>
                    
                    {/* <img src={fotoList.find(a=>a.id === usersList[1]?.id)?.url} alt="Correspondant"/> */}
                    <img src={props.photo1} alt="Correspondant"/>
                    <div>
                        {props.name1}
                    </div>
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
                    
                    <img src={props.photo2} alt="Correspondant"/>
                    <div>
                        {props.name2}
                    </div>
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
            </CorrespondantContainer>
    )
}