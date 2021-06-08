import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { SliderContainer } from './slider_container';
import { ResumeYourWorkContainer } from './resumeYourWorkContainer';
import useDropdown from "react-dropdown-hook";
import { LatestPublication } from '../LatestPublication/latest_publication';

export const MainBoardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:30px;
    width:70%;
    color:${Colors.lightblack};
    font-family: 'Courier New', Courier, monospace;
    
`

const TitleWrapper = styled.div`
    font-weight: bold;
    font-size:120%;
`

const Workspaces = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin-top:20px;

`
const ResumeYourWork = styled.div`
    display:flex;
    flex-direction:column;
`

const SectionTitleWrapper = styled(TitleWrapper)`
    margin-left:20px;
    margin-bottom:5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:5px;
`
const RightIcons = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  color: ${Colors.black};
  margin-right:20px;
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
    
    >img{
        margin-left:15px;
    }
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
const FollowWrapper = styled.div`
    
     

`
export const Workspace: FC = () =>{
    
    

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
           <LatestPublication/>
            <Workspaces>
                <SectionTitleWrapper>
                    <p>Workspaces</p>
                </SectionTitleWrapper>
                <SliderContainer/>
            </Workspaces>
            <ResumeYourWork>
                <SectionTitleWrapper>
                    <p>Resume your work</p>
                        
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
                            
                        
                </SectionTitleWrapper>
                <ResumeYourWorkContainer filter={state.inputText} zmienna={state.filter}/>
            </ResumeYourWork>
        </MainBoardWrapper>
    );
    
        
    
};