import React, { FC } from "react";
import styled from "styled-components";
import { IState } from "../../reducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { IFotoReducer } from "../../reducers/fotoReducers";
import { useSelector } from "react-redux";


const PanleInfoContainer = styled.div`
    width:95%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  /* background-color:pink; */
  color:black;
`
const Title = styled.div`
    font-weight:bold;
    /* font-size:20px; */
    margin:20px 0px;
    
`
const SmallTitles = styled.div`
    color:grey;
    margin-bottom:10px;
`
const Paragraf = styled.div`
    margin-bottom:10px;

`
const CorContainer = styled.div`

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

const ButtonWrap = styled.div`
    /* position:relative; */
`
const NewButton = styled.label`
    display: inline-block;
    padding: 8px 12px; 
    cursor: pointer;
    border-radius: 4px;
    background-color: #ecf8f8;
    font-size: 16px;
    
    
`
const InputFile=styled.input`
    /* position: absolute; */
   
  
   
`


export const PanelInformations: FC=()=>{

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
        <PanleInfoContainer>
            <Title>
                Panel informations
            </Title>
            <SmallTitles>
                Hourly fee
            </SmallTitles>
            <Paragraf>
                610€/hour (Negociated)
            </Paragraf>
            <SmallTitles>
            Terms and conditions
            </SmallTitles>
            <Paragraf>
                Monthly 10k€ retainer - see with Jenny Smith
            </Paragraf>
            <ButtonWrap/>
                <NewButton>
                <InputFile type="file"/>
                </NewButton> 
            <Title>
                Services and projects
            </Title>
            <Paragraf>
                Corporate M&A and international acquisitions
            </Paragraf>
            <Title>
                International corespondants
            </Title>
            <CorContainer>
                <Correspondant>
                    
                    <img src={fotoList.find(a=>a.id === usersList[1]?.id)?.url} alt="Correspondant"/>
                    <div>
                        {usersList[1]?.name}
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
                    
                    <img src={fotoList.find(a=>a.id === usersList[1]?.id)?.url} alt="Correspondant"/>
                    <div>
                        {usersList[1]?.name}
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
            </CorContainer>
        </PanleInfoContainer>
    )
}