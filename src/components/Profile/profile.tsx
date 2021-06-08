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
import { IInternalRewiews, InternalRewiewsNotEdited } from "./InternalRewiewsNotEdited";
import { AmountOfFeesNotEdited, IAmount } from "./AmountOfFeesNotEdited";
import { CorrespondantsNotEdited, ICorrespondants } from "./CorrespondantsNotEdited";


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
    usersList,
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
    correspondantData:{
      photo1: fotoList.find(a => a.id === usersList[1]?.id)?.url || "",
      name1: usersList[1]?.name || "",
      photo2: fotoList.find(a => a.id === usersList[1]?.id)?.url || "",
      name2: usersList[1]?.name || ""
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
      infoFile:"Nie wybrano pliku",
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
          },
    internalRewiewsData:{
      internalName1:"Operation Time",
      internalEntity1:"Renault TTT",
      internalLocation1:"France",
      internalExpertise1:"#Tax",
      internalDate1:"22/12/2021",
      internalName2:"Operation Time",
      internalEntity2:"Renault TTT",
      internalLocation2:"France",
      internalExpertise2:"#Tax",
      internalDate2:"22/12/2021",
      internalName3:"Operation Time",
      internalEntity3:"Renault TTT",
      internalLocation3:"France",
      internalExpertise3:"#Tax",
      internalDate3:"22/12/2021",
    },
    amountData:{
      year1:"2019",
      center1:"CS 153",
      amount1:"3500€",
      law1:"Clifford chance",
      year2:"2018",
      center2:"CS 153",
      amount2:"9500€",
      law2:"Linklaters",
      year3:"2017",
      center3:"CS 47",
      amount3:"10500€",
      law3:"Linklaters",
      year4:" ",
      center4:"CS 153",
      amount4:"18500€",
      law4:"Linklaters",
      year5:" ",
      center5:"Cs 32",
      amount5:"15500€",
      law5:"Linklaters",
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
      },
      correspondantData:{
        photo1: fotoList.find(a => a.id === usersList[1]?.id)?.url || "",
        name1: usersList[1]?.name || "",
        photo2: fotoList.find(a => a.id === usersList[1]?.id)?.url || "",
        name2: usersList[1]?.name || "" 
      }
    });
  },[currentUser, fotoList, usersList])

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
  const SetData5=(data: IInternalRewiews)=>{
    setState({
      ...state,
      internalRewiewsData: data
    });
    return;
  }
  const SetData6=(data: IAmount)=>{
    setState({
      ...state,
      amountData: data
    });
    return;
  }
  const setCorrespondantsData=(data:ICorrespondants)=>{
    setState({
      ...state,
      correspondantData: data
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
            <img src="./icons/close.png" alt="Close" />
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
            info4={state.panelInfo.info4} info5={state.panelInfo.info5} infoFile={state.panelInfo.infoFile}
            />
          }
          {state.editable2 &&
            <PanelInformations data={state.panelInfo} change={(a:IPanelInformations)=>{SetData3(a)}}/>
          }
          {!state.editable2 &&
            <CorrespondantsNotEdited photo1={state.correspondantData.photo1} name1={state.correspondantData.name1}
            photo2={state.correspondantData.photo2} name2={state.correspondantData.name2}
            />
          }
          {state.editable2 &&
            <Correspondants data={state.correspondantData} change={(a:ICorrespondants)=>{setCorrespondantsData(a)}}/>
          }
          
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
          {!state.editable2 &&
            <InternalRewiewsNotEdited internalName1={state.internalRewiewsData.internalName1} internalName2={state.internalRewiewsData.internalName2}
            internalName3={state.internalRewiewsData.internalName3} internalEntity1={state.internalRewiewsData.internalEntity1}
            internalEntity2={state.internalRewiewsData.internalEntity2} internalEntity3={state.internalRewiewsData.internalEntity3}
            internalLocation1={state.internalRewiewsData.internalLocation1}  internalLocation2={state.internalRewiewsData.internalLocation2}
            internalLocation3={state.internalRewiewsData.internalLocation3} internalExpertise1={state.internalRewiewsData.internalExpertise1}
            internalExpertise2={state.internalRewiewsData.internalExpertise2} internalExpertise3={state.internalRewiewsData.internalExpertise3}
            internalDate1={state.internalRewiewsData.internalDate1} internalDate2={state.internalRewiewsData.internalDate2}
            internalDate3={state.internalRewiewsData.internalDate3}
            />
          }
          {state.editable2 &&
            <InternalRewiews data={state.internalRewiewsData} change={(a:IInternalRewiews)=>{SetData5(a)}}/>
          }
          {!state.editable2 &&
            <AmountOfFeesNotEdited year1={state.amountData.year1} year2={state.amountData.year2} year3={state.amountData.year3}
            year4={state.amountData.year4} year5={state.amountData.year5} center1={state.amountData.center1}
            center2={state.amountData.center2} center3={state.amountData.center3} center4={state.amountData.center4}
            center5={state.amountData.center5} amount1={state.amountData.amount1} amount2={state.amountData.amount2}
            amount3={state.amountData.amount3} amount4={state.amountData.amount4} amount5={state.amountData.amount5}
            law1={state.amountData.law1} law2={state.amountData.law2} law3={state.amountData.law3} law4={state.amountData.law4}
            law5={state.amountData.law5}
            />
          }
          {state.editable2 &&
            <AmountOfFees data={state.amountData} change={(a:IAmount)=>{SetData6(a)}}/>
          }
          
        
        </CustomContainerBorder>
       
      </ProfileWrapper>
    </MainBoardWrapper>
  );
};
