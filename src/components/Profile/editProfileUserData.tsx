import React, { FC, useState } from "react";
import styled from "styled-components";
import { IProfileUserData } from "./ProfileUserData";
//import { Colors } from "../../styledHelpers/Colors";


const ProfileInfo = styled.div`
  display: flex;
  /* background-color:hotpink; */
`;
const PictureProfileComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > p {
    color: aqua;
  }
`;
const DescProfileComponent = styled.div`
  display: flex;
  flex-direction: column;
  text-align:left;
  margin-left:20px;
  >input{
      padding:5px;
  }
`;
export const UserPhoto = styled.img`
  width: 65px;
  border-radius: 50px;
  height: 65px;
`;
const ContactProfileImfo = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  >input{
      padding:5px;
  }
`
const ProfileContainer = styled.div`
  width:90%;
  display:flex;
  justify-content:space-between;
  position:relative;
  border-bottom:1px solid grey;
  
`
const SaveIcon = styled.img`
      position:absolute;
      right:0;
      bottom:100px;
      width:40px;
      height:40px;
`

interface IData{
  data: IProfileUserData,
  change: (a:IProfileUserData)=>void
}

export const EditProfileUserData: FC<IData> = (p) => {
  const [state, setState]= useState({
      name: p.data.name,
      city: p.data.city,
      companyName: p.data.companyName,
      phone: p.data.phone,
      email: p.data.email,
      partner: p.data.partner,
      photo: p.data.photo,
  });

  const setName=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setState({
      ...state,
      name: event.target.value
    })
  }

  const setCompany=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setState({
      ...state,
      companyName: event.target.value
    })
  }
  const setCity=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setState({
      ...state,
      city: event.target.value
    })
  }
  const setPartner=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setState({
      ...state,
      partner: event.target.value
    })
  }
  const setPhone=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setState({
      ...state,
      phone: event.target.value
    })
  }
  const setEmail=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setState({
      ...state,
      email: event.target.value
    })
  }
  
    return(
        <ProfileContainer>
          <ProfileInfo>
            <PictureProfileComponent>
              <UserPhoto
                src={state.photo}
                alt="UserPhoto"
              />
              <p>See profile</p>
            </PictureProfileComponent>
            <DescProfileComponent>
              <input type="text" value={state.name} onChange={setName}/>
              <input type="text" value={state.companyName} onChange={setCompany} ></input>
              <input type="text" value={state.city} onChange={setCity}></input>
              <input type="text" value={state.partner} onChange={setPartner}></input>
            </DescProfileComponent>
          </ProfileInfo>
          <ContactProfileImfo>
                <input type="text" value={state.phone} onChange={setPhone} ></input>
                <input type="text" value={state.email} onChange={setEmail}></input>
          </ContactProfileImfo>
          <SaveIcon src="./icons/floppy-disk.png" alt="Save" onClick={
            ()=>{
              p.change(state);
            }
          }/>
        </ProfileContainer>
    )

}