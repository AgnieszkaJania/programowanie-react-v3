import React, { FC, useEffect, useState } from "react";
import useDropdown from "react-dropdown-hook";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setData } from "../../actions/topMenuItem";
import { IState } from "../../reducers";
import { IFotoReducer } from "../../reducers/fotoReducers";
import { IPostReducer } from "../../reducers/postReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { Colors } from "../../styledHelpers/Colors";
import { Filters } from "./Filters";
type SetData = ReturnType<typeof setData>;

const EntitiesWrapper = styled.div`
  /* z-index:1; */
  box-shadow: 0px 0px 2px 2px ${Colors.shadowColor};
  border-radius: 3px;
  background-color: ${Colors.white};
  margin-left: 30px;
  color: ${Colors.lightblack};
  font-family: "Courier New", Courier, monospace;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width:70%;
`;
const CompaniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: yellow;
  
  
`;
const CompaniesContainer2 = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center; 
    width:100%; 
`;
const CompaniesContainerExpanded = styled.div`
    >img{
        width:20px;
        height:20px;
        position:absolute;
            top:0px;
            left:0px;
    }
    position:absolute;
    top: 0px;
    left:0px;
    z-index:1;
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    background-color: yellow;
    height:70%;
    overflow:scroll;
`
const CompanyContainer = styled.div`
  border-radius: 3px;
  background-color: white;
  border: 1px solid ${Colors.shadowColor};
  border-bottom: 2px outset ${Colors.shadowColor};
  padding: 5px;
  display: flex;
  align-items:center;
  width: 250px;
  margin: 5px 3px;
  height:100px;
`;
const ComapnyImage = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 3px;
`;
const TextContainer = styled.div`
  /* background-color:hotpink; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding: 5px 0px;
  margin-left: 10px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.blue};
  text-align: left;
`;
const Description = styled.div`
  text-align: left;
  font-size: 12px;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color:yellow; */
`;
const MosaicMenu = styled.div`
  display: flex;
  /* background-color:red; */
  border: 1px solid lightgray;
  border-radius: 3px;
`;
const Mosaic = styled.div`
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background-color: #c6d1e0;
  color: ${Colors.blue};
  font-weight: bold;
  img {
    width: 20px;
    height: 20px;
  }
  p {
    margin-left: 5px;
  }
`;
const Menu = styled.div`
  display: flex;
  padding: 5px;
  img {
    width: 30px;
    height: 30px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: bold;
    font-size: 30px;
  }
  img {
    width: 20px;
    height: 20px;
    margin-left: 20px;
  }
`;
const OptionsMainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0px;
  /* background-color:pink; */
`;
const InputFilter = styled.input`
  background-color: ${Colors.white};
  background-image: url("./icons/search.png");
  background-position: right center;
  background-repeat: no-repeat;
  padding: 3px;
  border: 2px solid ${Colors.lightgrey};
  border-radius: 5px;
  width: 150px;
  margin-right: 30px;
  text-align: left;
`;
const RightIcons = styled.div`
  display: flex;
`;
const LeftIcons = styled.div`
  display: flex;
`;
const IconContainer = styled.div`
  border-left: 1px solid lightgray;
  position:relative;
`;
const LeftIconsContainer = styled.div`
  border-right: 1px solid lightgray;
  padding-right: 10px;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
  img {
    width: 25px;
    height: 25px;
    margin-left: 10px;
  }
  p {
    margin-left: 5px;
  }
`;
const FollowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid blue;
  border-radius: 3px;
  margin-left: 30px;
  padding: 2px;
  color: blue;
  width:150px;
  img {
    margin-left: 10px;
  }
`;
const AllContainer = styled.div`
  background-color: #c6d1e0;
  border-bottom: 1px outset lightgray;
  border-radius: 3px;
  color: blue;
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 5px;
  margin-left:3px;
  
  img {
    width: 15px;
    height: 15px;
  }
  p {
    margin: 0px 5px;
  }
`;
const FollowIcon = styled.div`
  min-width: 30px;
  height: 30px;
  background-image: url("./icons/frequency.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  margin: 0px 5px;
`;
const FollowMenu = styled.div`
    display:flex;
    flex-direction:column;
    position:absolute;
    right:0px;
    width:150px;
    padding:4px;
    background-color:lightgray;
    text-align:center;
    z-index:1;
    >div{
        padding:10px;
    }
 
`

interface IEntities {
  filter: string;
}
const EntitiesArray = [
  {
    fotoId: 1,
    title: "World company SAS",
    desc: "Caracas 1050, Districto Capital, Venezuela",
  },
  {
    fotoId: 2,
    title: "World company MMM",
    desc: "Caracas 1070, Districto Capital, Venezuela",
  },
  {
    fotoId: 3,
    title: "World company Apple",
    desc: "Cupertino 1050, California, USA",
  },
  {
    fotoId: 4,
    title: "World company SAS",
    desc: "Caracas 1050, Districto Capital, Venezuela",
  },
  {
    fotoId: 5,
    title: "World company Johnson",
    desc: "Berlin 1100, Berlin, Germany",
  },
  {
    fotoId: 6,
    title: "World company Toyota",
    desc: "Tokyo 1413, Japan",
  },
  {
    fotoId: 7,
    title: "World company GMC",
    desc: "Broad Ave 1000, Detroit, USA",
  },
  {
    fotoId: 8,
    title: "World company LPP",
    desc: " Dluga 17, Gdansk, Poland",
  },
  {
    fotoId: 9,
    title: "World company LOT",
    desc: " Zolta 200, Warszawa, Poland",
  },
  {
    fotoId: 10,
    title: "World company SAMSUNG",
    desc: " Wfgdta 10, Seoul, South Korea",
  },
  {
    fotoId: 11,
    title: "Company Volkswagen AG",
    desc: " Main Str, Lipsk, Germany",
  },
  {
    fotoId: 12,
    title: "Company IKEA",
    desc: " Storgatan 350, Stockholm, Sweden",
  },
  {
    fotoId: 13,
    title: "World company Quantas",
    desc: " Long Str 17, Sydney, Australia",
  },
  {
    fotoId: 14,
    title: "Vattenfall AB",
    desc: " Langgatan 333, Stockholm, Sweden",
  },
  {
    fotoId: 15,
    title: "Vichy",
    desc: " agdsa 170, Vichy, France",
  },
  {
    fotoId: 16,
    title: "World company SAS",
    desc: "Caracas 1050, Districto Capital, Venezuela",
  },
  {
    fotoId: 17,
    title: "World company MMM",
    desc: "Caracas 1070, Districto Capital, Venezuela",
  },
  {
    fotoId: 18,
    title: "World company Apple",
    desc: "Cupertino 1050, California, USA",
  },
  {
    fotoId: 19,
    title: "World company SAS",
    desc: "Caracas 1050, Districto Capital, Venezuela",
  },
  {
    fotoId: 20,
    title: "World company Johnson",
    desc: "Berlin 1100, Berlin, Germany",
  },
  {
    fotoId: 21,
    title: "World company Toyota",
    desc: "Tokyo 1413, Japan",
  },
  {
    fotoId: 22,
    title: "World company GMC",
    desc: "Broad Ave 1000, Detroit, USA",
  },
  {
    fotoId: 23,
    title: "World company LPP",
    desc: " Dluga 17, Gdansk, Poland",
  },
  {
    fotoId: 24,
    title: "World company LOT",
    desc: " Zolta 200, Warszawa, Poland",
  },
  {
    fotoId: 25,
    title: "World company SAMSUNG",
    desc: " Wfgdta 10, Seoul, South Korea",
  },
  {
    fotoId: 26,
    title: "Company Volkswagen AG",
    desc: " Main Str, Lipsk, Germany",
  },
  {
    fotoId: 27,
    title: "Company IKEA",
    desc: " Storgatan 350, Stockholm, Sweden",
  },
  {
    fotoId: 28,
    title: "World company Quantas",
    desc: " Long Str 17, Sydney, Australia",
  },
  {
    fotoId: 29,
    title: "Vattenfall AB",
    desc: " Langgatan 333, Stockholm, Sweden",
  },
  {
    fotoId: 30,
    title: "Unilever AG",
    desc: " Star Str 219, Utrecht, Netherlands",
  },
  {
    fotoId: 31,
    title: "Henkel AG",
    desc: " Martin Luter Str 219, Stuttgart, Germany",
  },
  {
    fotoId: 30,
    title: "Unilever AG",
    desc: " Star Str 219, Utrecht, Netherlands",
  },
];

export const Entities: FC<IEntities> = (props) => {
  const { fotoList } = useSelector<
    IState,
    IPostReducer & IUsersReducer & IFotoReducer
  >((globalState) => ({
    ...globalState.post,
    ...globalState.users,
    ...globalState.foto,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<SetData>(setData("Entities", "./icons/entities.png"));
  }, []);

  const [state, setState] = useState({
    inputText: "",
    sort: false,
    follow: "Followed",
    mosaic:true,
    expanded:false,
    filters:false,
  });
  

  const filterEntities = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      inputText: event.target.value,
    });
    console.log(state);
  };
  const sortEntities = () => {
    if (state.sort) {
        setState({
            ...state,
            sort:false
        })
    }else{
        setState({
            ...state,
            sort:true
        })
    }
  };
  const openFilters = () =>{
    if(state.filters){
      setState({
        ...state,
        filters:false
      })
    }else{
      setState({
        ...state,
        filters:true
      })
    }
  }
  const SortedArray = EntitiesArray.filter(a => a.title.toLocaleLowerCase().includes(state.inputText.toLowerCase())).sort((a,b)=>{
      if(state.sort === false){
            return 0;
      }
      return a.title.localeCompare(b.title);
  });
  const [
    wrapperRef,
    dropdownOpen,
    toggleDropdown,
    
  ] = useDropdown();
  const menuHandler = () => {
    console.log("kliknieto");
    toggleDropdown();
    };

  return (
    <EntitiesWrapper>
      <HeaderContainer>
        <TitleContainer>
          <p>Entities</p>
          <img src="./icons/cog.png" alt="Settings" />
        </TitleContainer>
        <MosaicMenu>
          <Mosaic onClick={()=>{setState({...state, mosaic:true})}}>
            <img src="./icons/mosaic.png" alt="Mosaic" />
            <p>Mosaic</p>
          </Mosaic>
          <Menu onClick={()=>{setState({...state, mosaic:false})}}>
            <img src="./icons/menu.png" alt="Menu" />
          </Menu>
        </MosaicMenu>
      </HeaderContainer>
      <OptionsMainContainer>
        <LeftIcons>
          <LeftIconsContainer>
            <AllContainer>
              <img src="./icons/button.png" alt="Button" />
              <p>All</p>
              <img src="./icons/arrow-down.svg" alt="Arrow" />
            </AllContainer>
          </LeftIconsContainer>
          <LeftIconsContainer>
            <div onClick={sortEntities}>
              <img src="./icons/sort.png" alt="Sort" />
              <p>Sort</p>
            </div>
            <div onClick={openFilters}>
              <img src="./icons/filter.png" alt="Filter" />
              <p>Filters</p>
            </div>
          </LeftIconsContainer>
          <LeftIconsContainer>
            <img onClick={()=>{setState({...state, expanded:true})}}src="./icons/expand.png" alt="Expand" />
          </LeftIconsContainer>
          <LeftIconsContainer>
            <div onClick={()=>{navigator.clipboard.writeText(window.location.href)}}>
                <img src="./icons/share.png" alt="Share" />
                <p>Share</p>
            </div>
          </LeftIconsContainer>
        </LeftIcons>
        <RightIcons>
          <InputFilter placeholder="Search ..." onChange={filterEntities} />
          <IconContainer ref={wrapperRef}>
                <FollowContainer onClick={menuHandler}>
                    <FollowIcon />
                    <p>{state.follow}</p>
                    <img src="./icons/arrow-down.svg" alt="ArrowDown" />
                </FollowContainer>
                {dropdownOpen && <FollowMenu>
                    <div onClick={()=>{setState({...state, follow:"All"})}}>All</div>
                    <div onClick={()=>{setState({...state, follow:"Followed"})}}>Followed</div>
                </FollowMenu>}
          </IconContainer>
        </RightIcons>
      </OptionsMainContainer>
      {state.filters &&
        <Filters/>
      }
        {state.mosaic && !state.expanded &&
            <CompaniesContainer>
                {SortedArray.map((item, i) => (
                <CompanyContainer key={i}>
                    <ComapnyImage
                    src={fotoList.find((a) => a.id === item.fotoId)?.url}
                    />
                    <TextContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    </TextContainer>
                </CompanyContainer>
                ))}
            </CompaniesContainer>
        }
        {!state.mosaic && !state.expanded &&
            <CompaniesContainer2>
             {SortedArray.map((item, i) => (
             <CompanyContainer key={i}>
                 <ComapnyImage
                 src={fotoList.find((a) => a.id === item.fotoId)?.url}
                 />
                 <TextContainer>
                 <Title>{item.title}</Title>
                 <Description>{item.desc}</Description>
                 </TextContainer>
             </CompanyContainer>
             ))}
            </CompaniesContainer2>
        }
        {state.expanded && 
            <CompaniesContainerExpanded>
                <img onClick={()=>setState({...state, expanded:false})} src="./icons/close.png" alt="Close"/>
                {SortedArray.map((item, i) => (
                <CompanyContainer key={i}>
                    <ComapnyImage
                    src={fotoList.find((a) => a.id === item.fotoId)?.url}
                    />
                    <TextContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    </TextContainer>
                </CompanyContainer>
                ))}
            </CompaniesContainerExpanded>
        }

    </EntitiesWrapper>
  );
};
