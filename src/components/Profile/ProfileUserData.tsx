import React, { FC } from "react";
import styled from "styled-components";

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
  >p{
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
  position:relative;
  >p{
      padding:5px;
  }
`

const ProfileContainer = styled.div`
  width:90%;
  display:flex;
  justify-content:space-between;
  /* background-color:pink; */
`
export interface IProfileUserData{
  name:string;
  city:string;
  companyName:string;
  phone: string;
  email:string;
  partner: string;
  photo:string;
}

export const ProfileUserData: FC<IProfileUserData> = (props) => {


    return(
        <ProfileContainer>
          <ProfileInfo>
            <PictureProfileComponent>
              <UserPhoto
                src={props.photo}
                alt="UserPhoto"
              />
              <p>See profile</p>
            </PictureProfileComponent>
            <DescProfileComponent>
              <p>{props.name}</p>
              <p>{props.companyName}</p>
              <p>{props.city}</p>
              <p>{props.partner}</p>
            </DescProfileComponent>
          </ProfileInfo>
          <ContactProfileImfo>
              <p>{props.phone}</p>
              <p>{props.email}</p>
          </ContactProfileImfo>
        </ProfileContainer>
    )

}