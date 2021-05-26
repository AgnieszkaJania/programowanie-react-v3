import React, { FC, useEffect, useState } from "react";
import useDropdown from "react-dropdown-hook";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

const FiltersWrapper = styled.div`
  display:flex;
  flex-direction:column;
  color:${Colors.black};
    margin: 5px 0px;
`
const FilterRow = styled.div`
  display:flex;
  margin: 5px 0px;
  padding-left:20px;
  font-weight:bold;
  img{
      width:20px;
      height:20px;
  }
  div{
      display:flex;
      margin-right:10px;
      /* background-color:pink; */
      align-items:center;
      p{
          margin:0px 5px;
      }
  }
  
`
const StyledInput = styled.input`
    background-color:lightgray;
    padding:10px;
    color:gray;
    border:1px solid lightgray;
    border-radius:5px;
    margin:0px 10px;

`
const FirstElement = styled.div`
    width:13%;
   /* background-color:pink; */
   img{
       margin-right:5px;
   }
    
`
const LastElement = styled.div`
    width:13%;
    color:${Colors.blue};
    img{
       margin-right:5px;
   }
    
`
const Choose = styled(LastElement)`
    width:80%;
    /* background-color:pink; */
`
const Title = styled.div`
    color:${Colors.lightgrey};
    font-size:15px;
    
`

export const Filters: FC =()=>{
    return(
        <FiltersWrapper>
        <Title>Rows are filtered by the following conditions starting form the top.</Title>
        <FilterRow>
            <FirstElement>
                <img src="./icons/close.png" alt="Cross"/>
                <p>Where</p>
            </FirstElement>
            <div>
                <p>Comapny</p>
                <img src="./icons/arrow-down.svg" alt="Arrow down"/>
            </div>
            <div>
                <p>Contains</p>
                <img src="./icons/arrow-down.svg" alt="Arrow down"/>
            </div>
            <StyledInput placeholder="Type..."></StyledInput>
        </FilterRow>
        <FilterRow>
            <FirstElement>
            <img src="./icons/close.png" alt="Cross"/>
            <p>Where</p>
            </FirstElement>
           <div>
           <p>Status</p>
            <img src="./icons/arrow-down.svg" alt="Arrow down"/>
           </div>
            <div>
            <p>Is</p>
            <img src="./icons/arrow-down.svg" alt="Arrow down"/>
            </div>
            <StyledInput placeholder="Type..."></StyledInput>
            <div>
            <p>In</p>
            <img src="./icons/arrow-down.svg" alt="Arrow down"/>
            </div>
            <StyledInput placeholder="Entity..."></StyledInput>
        </FilterRow>
        <FilterRow>
            <FirstElement>
            <img src="./icons/close.png" alt="Cross"/>
            <p>And</p>
            </FirstElement>
           <div>
           <p>Status</p>
            <img src="./icons/arrow-down.svg" alt="Arrow down"/>
           </div>
           <div>
           <p>Ends before</p>
            <img src="./icons/arrow-down.svg" alt="Arrow down"/>
           </div>
            <StyledInput placeholder="Date"></StyledInput>
            <div>
            <p>In</p>
            <img src="./icons/arrow-down.svg" alt="Arrow down"/>
            </div>
            <StyledInput placeholder="Entity..."></StyledInput>
        </FilterRow>
        <FilterRow>
            <LastElement>
            <img src="./icons/plus.png" alt="Plus"/>
            <p>Add filter</p>
            </LastElement>
            <Choose>
            <p>choose property</p>
            <img src="./icons/arrow-down.svg" alt="Arrow down"/>
            </Choose>
        </FilterRow>
        </FiltersWrapper>
    )
}