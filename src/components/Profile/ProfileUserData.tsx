import React, { FC } from "react";
import styled from "styled-components";

//import { Colors } from "../../styledHelpers/Colors";


const ProfileInfo = styled.div`
  display: flex;
  /* background-color:hotpink; */
`;
const PictureProfileComponent = styled.div`
  /* background-color:hotpink; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
const ImageContainer = styled.div`
  display:flex;
  position:relative;
`
const GoldenIcon = styled.div`
  width:20px;
  height:20px;
  border-radius:50px;
  background-color: gold;
  position:absolute;
  right:0px;
  bottom:0px;
  display:flex;
  justify-content:center;
  align-items:center;
  >img{
    width:15px;
    height:15px;
  }
`
const ProfileContainer = styled.div`
  width:90%;
  display:flex;
  justify-content:space-between;
  /* background-color:pink; */
  margin-bottom:15px;
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
              <ImageContainer>
                <UserPhoto
                  src={props.photo}
                  alt="UserPhoto"
                />
                <GoldenIcon>
                  <img src="./icons/star.png" alt="Star"/>
                </GoldenIcon>
              </ImageContainer>
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