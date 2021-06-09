import React, { FC } from "react";
import styled from "styled-components";
import { Wrapper } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";
import useDropdown from "react-dropdown-hook";
import { ExpandedMenu } from "../TopNav/ExpandedMenu";
import { ITopMenuReducer } from "../../reducers/topMenuItems";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { BetterLink } from "../../styledHelpers/betterLinks";

const InnerWrapper = styled.div`
  width: 100%;
  background: ${Colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  z-index: 1;
  box-shadow: 0px 0px 4px 4px ${Colors.shadowColor};
  padding: 3px;
`;

const RightIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 10%;
`;
const InputWrapper = styled.div`
  padding: 10px;
`;
const SelectOption = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InputSearch = styled.input`
  background-color: ${Colors.white};
  background-image: url("./icons/search.png");
  background-position: right center;
  background-repeat: no-repeat;
  padding: 5px;
  border: 2px solid ${Colors.lightgrey};
  border-radius: 5px;
  width: 500px;
  text-align: center;
`;
const RoundImage = styled.div`
  border-radius: 50%;
  background-color: ${Colors.lightgrey};
  padding: 10px;
  display: flex;
`;
const LefIcons = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: space-around;
`;
export const Cateories = styled.div`
  margin-left: 5px;
  text-decoration:none;
  width:80%;
  
`;

const WrapRefWrapper = styled.div`
  width: 60%;
  //background-color:grey;
  position: relative;
`;


const ChosenItem = styled.div`
  width: 100%;
  height: 20px;
  padding: 10px 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const TopNavImage = styled.div`
  width:35px;
  display:flex;
  align-items:center;
  padding:3px;
  
  img{
    max-width:35px;
    border-radius:20px;
  }
`
const BackgroundImageDiv = styled.div`
  position:relative;
`
const Notifications = styled.div`
  background-color:blue;
  color:${Colors.white};
  font-size:1.5ch;
  border-radius:10px;
  position:absolute;
  top:0px;
  right:0px;
  padding:0px 5px;
`

export const TopNav: FC = () => {
  const [
    wrapperRef,
    dropdownOpen,
    toggleDropdown,
    
  ] = useDropdown();
  const menuHandler = () => {
    console.log("kliknieto");
    toggleDropdown();
  };
  const {
    data
  } = useSelector<IState, ITopMenuReducer>(
    (globalState) => ({
      ...globalState.data
    })
  );

  return (
    <Wrapper>
      <InnerWrapper>
        <LefIcons>
          <RoundImage>
            <BetterLink to="/">
            <img src="./icons/house2.svg" alt="House" />
            </BetterLink>
          </RoundImage>

          <WrapRefWrapper ref={wrapperRef}>
            <SelectOption onClick={menuHandler}>
              <ChosenItem>
                <TopNavImage>
                  
                  <img src={(data?.icon || "house.png")} alt="House" />
                  
                </TopNavImage>
                <Cateories>{data?.name || ""}</Cateories>
              </ChosenItem>
              <img src="./icons/arrow-down.svg" alt="ArrowDown" />
            </SelectOption>
            {dropdownOpen && <ExpandedMenu />}
          </WrapRefWrapper>
        </LefIcons>
        <InputWrapper>
          <InputSearch placeholder="Search Legalcluster" />
        </InputWrapper>
        <RightIcons>
          <div>
            <img src="./icons/house.png" alt="House" />
          </div>
          <BackgroundImageDiv>
          <Notifications>3</Notifications>
            <RoundImage>
              <img src="./icons/comments.png" alt="Comments" />
            </RoundImage>
          </BackgroundImageDiv>
          <BackgroundImageDiv>
            <Notifications>3</Notifications>
            <RoundImage>
              <img src="./icons/bell.png" alt="Bell" />
            </RoundImage>
          </BackgroundImageDiv>
        </RightIcons>
      </InnerWrapper>
    </Wrapper>
  );
};
