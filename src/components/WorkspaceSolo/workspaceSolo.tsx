import React, { FC, useEffect, useState } from "react";
import useDropdown from "react-dropdown-hook";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";
import { ResumeYourWorkContainer } from '../HomePage/Workspace/resumeYourWorkContainer';
import { Tile } from "./Tile";
export const MainBoardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:30px;
    width:70%;
    color:${Colors.lightblack};
    font-family: 'Courier New', Courier, monospace;
    
`
const TopWrapper = styled.div`
    width:100%;
    background-color:${Colors.white};
    box-shadow: 0px 0px 2px 2px ${Colors.shadowColor};
    display:flex;
    flex-direction:column;
    border-radius: 3px;
`
const TopImage = styled.div`
    background-image:url('./icons/skyscrapers.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height:200px;
    /* width:100%; */
`
const TitleWrapper = styled.div`
    font-weight: bold;
    font-size:120%;
    //margin-left:10px;
`
const SectionTitleWrapper = styled(TitleWrapper)`
    margin-left:20px;
    margin-bottom:5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    /* background-color:hotpink; */
    padding:5px;
`
const RightIcons = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  color: ${Colors.black};
  margin-right:20px;
`
const ResumeYourWork = styled.div`
    display:flex;
    flex-direction:column;
`
const FollowIcon = styled.div`
    min-width:30px;
    height:30px;
    background-image: url("./icons/frequency.png");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    margin:0px 5px;
    
`
const FollowButton = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    
    /* background-color:red; */
    
    >img{
        margin-left:15px;
    }
`
const FollowWrapper = styled.div`
    
     

`
const InputFilter = styled.input`
  background-color: ${Colors.white};
  background-image: url("./icons/search.png");
  background-position: right center;
  background-repeat: no-repeat;
  padding: 5px;
  border: 2px solid ${Colors.lightgrey};
  border-radius: 5px;
  width: 200px;
  margin-right:30px;
  text-align: center;
`
const FollowMenu = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    background-color:lightgray;
    text-align:center;
    z-index:1;
    >div{
        padding:10px;
    }
    
`
const TopContentWrapper = styled.div`
    display:flex;
    padding:20px;
    align-items:center;
    position:relative;
    
`
const Description = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-around;
    margin-left:20px;
    span{
        font-size:30px;
        font-weight:bold;
        color:${Colors.black};
    }
`
const SettingsImg = styled.img`
    width:20px;
    height:20px;
    position:absolute;
    top: 10px;
    right:20px;

`
const MainWrapper = styled.div`
    width:80%;
    border:2px solid silver;
    border-radius:5px;
    background-color: gray;
    display:flex;
    flex-direction:column;
    p{
        color:${Colors.lightgrey};
        font-size:bold;

    }
`
const TilesContainer=styled.div`
    display:flex;
`
const Icon = styled.div`

`
interface IWorkspaceSolo{
    image: string;
    name: string;
}
export const WorkspaceSolo: FC<IWorkspaceSolo> = (props) => {

    const [state, setState] = useState({
        filter: false,
        inputText: "",
    });
    const getmedown=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setState({
            ...state,
            inputText: event.target.value,
        })
    };
    const [
        wrapperRef,
        dropdownOpen,
        toggleDropdown,
        
      ] = useDropdown();
      const menuHandler = () => {
        console.log("kliknieto");
        toggleDropdown();
    };
    return(
        <MainBoardWrapper>
           <TopWrapper>
            <TopImage/>
           <TopContentWrapper>
            <img src={props.image} alt={props.name}/>
           <Description>
            <span>{props.name}</span>
            <p>Workspaces purpose and a bit of context. This much needed description is here to remind people
                where they are, if they are new or have poor memory.
            </p>
           </Description>
            <SettingsImg src="./icons/cog.png" alt="Settings"/>
           </TopContentWrapper>
           </TopWrapper>
           <ResumeYourWork>
                <SectionTitleWrapper>
                    <p>Latest updates</p>
                        
                        <RightIcons>
                           
                            <InputFilter placeholder="Filter by title ... " onChange={getmedown} />
                            <FollowWrapper ref={wrapperRef}>
                                <FollowButton onClick={menuHandler}>
                                    <FollowIcon />
                                    <p>Follow</p>
                                    <img src="./icons/arrow-down.svg" alt="ArrowDown" />
                                </FollowButton>
                                {dropdownOpen && <FollowMenu>
                                    <div onClick={()=>{setState({...state, filter: true})}}>
                                        Follow my
                                    </div>
                                    <div onClick={()=>{setState({...state, filter: false})}}>
                                        Follow all
                                    </div>
                                </FollowMenu>}
                            </FollowWrapper>
                            
                        </RightIcons>
                        <Tile title="title" desc="desc" photo="photo"/>
                        
                </SectionTitleWrapper>
                <ResumeYourWorkContainer filter={state.inputText} zmienna={state.filter}/>
            </ResumeYourWork>
        </MainBoardWrapper>
    )

}