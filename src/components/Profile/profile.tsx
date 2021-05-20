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
import { InternalRewiews } from "./InternalRewiews";
import { AmountOfFees } from "./AmountOfFees";
import { ExpertiseNotEdited, IExpertise } from "./ExpertiseNotEdited";
import { Correspondants } from "./Correspondants";
import { IPanelInformations, PanelInformationsNotE } from "./PanelInformationsNotE";
import { IProposal, ProposalsNotEdited } from "./ProposalsNotEdited";


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
  width: 80%;
  /* background-color:pink; */
`;
const TopOneIcon = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0px 15px 10px;
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
  margin-top:10px;
  border-bottom:1px solid grey;
`
const CustomContainerBorder = styled(CustomContainer)`
  border-color:white;
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
    editable2: false,
    data: {
      name: currentUser?.name || "",
      city: currentUser?.address.city || "",
      companyName: currentUser?.company.name || "",
      phone: currentUser?.phone || "",
      email: currentUser?.email || "",
      partner: "Pasrtner",
      photo: fotoList.find(a=>a.id === currentUser?.id)?.url || ""
    },
    blueData:{
        expertise: "Mergers and acquisitions",
        specialities1: "Cross border operation",
        specialities2: "Transaction over 500M$/€",
        admission1: "Paris bar association",
        admission2:"Tunisian bar association",
        countries:"Tunisia",
    },
    panelInfo:{
      info1:"Hourly fee",
      info2:"610€/hour (Negociated)",
      info3:"Terms and conditions",
      info4:"Monthly 10k€ retainer - see with Jenny Smith",
      info5:"Corporate M&A and international acquisitions",
    },
    proposalData:{
              name1:"Operation Time",
              entity1:"Renault TTT",
              location1:"France",
              expertise1:"#Tax",
              date1:"22/12/2021",
              firm1:"Racine",
              name2:"Operation Time",
              entity2:"Renault TTT",
              location2:"France",
              expertise2:"#Tax",
              date2:"22/12/2021",
              firm2:"Racine",
              name3:"Operation Time",
              entity3:"Renault TTT",
              location3:"France",
              expertise3:"#Tax",
              date3:"22/12/2021",
              firm3:"Racine",
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

    console.log(data);
    return;
  }
  const SetData2=(data: IExpertise)=>{
    setState({
      ...state,
      blueData: data
    });

    console.log(data);
    return;
  }
  const SetData3=(data: IPanelInformations)=>{
    setState({
      ...state,
      panelInfo: data
    });

    console.log(data);
    return;
  }
  const SetData4=(data: IProposal)=>{
    setState({
      ...state,
      proposalData: data
    });

    console.log(data);
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
  const EditData2=()=>{
    if(state.editable2){
      setState({
        ...state,
        editable2:false
      })
    }else{
      setState({
        ...state,
        editable2:true
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
        <CustomContainerBorder>
          <EditIcon onClick={EditData2}  src="./icons/pencil.png"/>
          {!state.editable2 &&
            <ExpertiseNotEdited expertise={state.blueData.expertise} specialities1={state.blueData.specialities1}
            specialities2={state.blueData.specialities2} admission1={state.blueData.admission1}admission2={state.blueData.admission2}countries={state.blueData.countries}/>
          }
          {state.editable2 &&
            <Expertise data={state.blueData} change={(a:IExpertise)=>{SetData2(a)}}/>
          }
        </CustomContainerBorder>

        <CustomContainer>
          {!state.editable2 &&
            <PanelInformationsNotE info1={state.panelInfo.info1} info2={state.panelInfo.info2} info3={state.panelInfo.info3}
            info4={state.panelInfo.info4} info5={state.panelInfo.info5}
            />
          }
          {state.editable2 &&
            <PanelInformations data={state.panelInfo} change={(a:IPanelInformations)=>{SetData3(a)}}/>
          }
          <Correspondants/>
        </CustomContainer>
        <CustomContainerBorder>
          {!state.editable2 &&
            <ProposalsNotEdited name1={state.proposalData.name1} entity1={state.proposalData.entity1} 
            location1={state.proposalData.location1} 
            expertise1={state.proposalData.expertise1} date1={state.proposalData.date1} firm1={state.proposalData.firm1}
            name2={state.proposalData.name2} entity2={state.proposalData.entity2} 
            location2={state.proposalData.location2} 
            expertise2={state.proposalData.expertise2} date2={state.proposalData.date2} firm2={state.proposalData.firm2}
            name3={state.proposalData.name3} entity3={state.proposalData.entity3} 
            location3={state.proposalData.location3} 
            expertise3={state.proposalData.expertise3} date3={state.proposalData.date3} firm3={state.proposalData.firm3}
            
            />
          }
          {state.editable2 &&
            <Proposals data={state.proposalData} change={(a:IProposal)=>{SetData4(a)}}/>
          }
          
          
          <InternalRewiews editable={state.editable2}/>
          <AmountOfFees/>
        </CustomContainerBorder>
       
      </ProfileWrapper>
    </MainBoardWrapper>
  );
};
