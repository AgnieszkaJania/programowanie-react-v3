import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { MainBoardWrapper } from "../HomePage/Workspace/workspace";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IFotoReducer } from "../../reducers/fotoReducers";
import { IPostReducer } from "../../reducers/postReducers";
import { SetData, setData } from "../../actions/topMenuItem";
import{IProfileUserData, ProfileUserData} from './ProfileUserData';
import { EditProfileUserData } from "./editProfileUserData";
import { Expertise } from "./Expertise";
import { PanelInformations } from "./PanelInformations";
import { Proposals } from "./Proposals";


const EditIcon = styled.img`
    width:20px;
    height:20px;
    position:absolute;
    top:0px;
    right:0px;
    z-index:1;
`
const ProfileWrapper = styled.div`
  width: 100%;
  background-color: ${Colors.white};
  box-shadow: 0px 0px 2px 2px ${Colors.shadowColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  min-height: 50%;
  
  
`;
const TopIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const TopOneIcon = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px 15px;
  >img{
    width:20px;
    height:20px;
  }
`;
const IconText = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
  /* background-color:red; */
`;

const CustomContainer = styled.div`
  width:80%;
  /* background-color:hotpink; */
  position:relative;
  border-bottom:1px solid grey;
`

export const Profile: FC = () => {
  const dispatch = useDispatch();
  //props.editable = false;

  const {
    //postList,
    fotoList,
    //usersList,
    //currentPost,
    currentUser,
  } = useSelector<IState, IPostReducer & IUsersReducer & IFotoReducer>(
    (globalState) => ({
      ...globalState.post,
      ...globalState.users,
      ...globalState.foto,
    })
  );

  const [state, setState] = useState({
    editable: false,
    data: {
      name: currentUser?.name || "",
      city: currentUser?.address.city || "",
      companyName: currentUser?.company.name || "",
      phone: currentUser?.phone || "",
      email: currentUser?.email || "",
      partner: "Pasrtner",
      photo: fotoList.find(a=>a.id === currentUser?.id)?.url || ""
    }
  });

  useEffect(()=>{
    setState({
      ...state,
      data: {
        name: currentUser?.name || "",
        city: currentUser?.address.city || "",
        companyName: currentUser?.company.name || "",
        phone: currentUser?.phone || "",
        email: currentUser?.email || "",
        partner: "Partner",
        photo: fotoList.find(a=>a.id === currentUser?.id)?.url || ""
      }
    });
  },[currentUser, fotoList])

  useEffect(()=>{
    dispatch<SetData>(setData("Profile info", fotoList.find(a=>a.id===currentUser?.id)?.url || ""))
  },[fotoList, currentUser]);

  const SetData=(data: IProfileUserData)=>{
    setState({
      ...state,
      data: data
    });
    return;
  }

  const EditData=()=>{
      if(state.editable){
        setState({
          ...state,
          editable:false
        })
      }else{
        setState({
          ...state,
          editable:true
        })
      }
  }
  return (
    <MainBoardWrapper>
      {console.log(currentUser)}
      <ProfileWrapper>
        <TopIcons>
          <TopOneIcon>
            <img src="./icons/comments.png" alt="Message" />
            <IconText>Message</IconText>
          </TopOneIcon>
          <TopOneIcon>
            <img src="./icons/entities2.png" alt="Request" />
            <IconText>Create a reguest </IconText>
          </TopOneIcon>
          <TopOneIcon>
            <img src="./icons/entities2.png" alt="Cluster" />
            <IconText>Add to a cluster</IconText>
          </TopOneIcon>
          <TopOneIcon>
            <img src="./icons/close.png" alt="Cluster" />
          </TopOneIcon>
        </TopIcons>
        <CustomContainer>
          <EditIcon onClick={EditData} src="./icons/pencil.png"/>
          {state.editable &&
             <EditProfileUserData data={state.data} change={(a:IProfileUserData)=>{SetData(a)}}/>
          }
          {!state.editable &&
            <ProfileUserData 
            name={state.data.name}
            city={state.data.city}
            companyName={state.data.companyName}
            phone={state.data.phone}
            email={state.data.email}
            partner={state.data.partner}
            photo={state.data.photo}
            />
          }
        </CustomContainer>
        <CustomContainer>
          <EditIcon  src="./icons/pencil.png"/>
          <Expertise/>
        </CustomContainer>
        <CustomContainer>
          <PanelInformations/>
        </CustomContainer>
        <CustomContainer>
          <Proposals/>
        </CustomContainer>
       
      </ProfileWrapper>
    </MainBoardWrapper>
  );
};
