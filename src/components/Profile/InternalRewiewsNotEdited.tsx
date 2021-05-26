import React, { FC } from "react";
import styled from "styled-components";

const ProposalsContainer=styled.div`
    color:black;
    border-bottom:1px solid grey;
    
`
const Title = styled.div`
    font-weight:bold;
    margin: 20px 0px;
    
`
const Table = styled.div`
    /* display:flex; */
    //background-color:saddlebrown;

`
const Header = styled.div`
    border-bottom:1px solid grey; 
    display:flex;
    //background-color:yellow;
    width:100%;
    justify-content:flex-start;
    
`
const BottomInfo = styled.div`
    font-size:15px;
    font-weight:bold;
    text-align:left;
`
const Row = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-start;
`
const RowElement=styled.div`
        padding:10px;
        //background-color:red;
        text-align:left;
        width:14%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
`
const HeaderElement = styled.div`
        padding:10px;
        text-align:left;
        font-weight:bold;
        width:14%;
        //background-color:pink;
        //border:1px solid black;
`

export interface IInternalRewiews{
    internalName1:string,
    internalEntity1: string,
    internalLocation1: string,
    internalExpertise1:string,
    internalDate1: string,
    internalName2:string,
    internalEntity2: string,
    internalLocation2: string,
    internalExpertise2:string,
    internalDate2: string,
    internalName3:string,
    internalEntity3: string,
    internalLocation3: string,
    internalExpertise3:string,
    internalDate3: string,
}

export const InternalRewiewsNotEdited: FC<IInternalRewiews>=(props)=>{
    return(
        <ProposalsContainer>
                <Title>
                    Internal Rewiews
                </Title>
                <Table>
                    <Header>
                        <HeaderElement>
                            Name
                        </HeaderElement>
                        <HeaderElement>
                            Entity
                        </HeaderElement>
                        <HeaderElement>
                            Location
                        </HeaderElement>
                        <HeaderElement>
                            Expertise
                        </HeaderElement>
                        <HeaderElement>
                            Date
                        </HeaderElement>
                        
                        
                    </Header>
                    <Row>
                       <RowElement>
                            {props.internalName1}
                       </RowElement>
                       <RowElement>
                           {props.internalEntity1}
                       </RowElement>
                       <RowElement>
                           {props.internalLocation1}
                       </RowElement>
                       <RowElement>
                           {props.internalExpertise1}
                       </RowElement>
                       <RowElement>
                           {props.internalDate1}
                       </RowElement>
                    </Row>
                    <Row>
                       <RowElement>
                            {props.internalName2}
                       </RowElement>
                       <RowElement>
                           {props.internalEntity2}
                       </RowElement>
                       <RowElement>
                           {props.internalLocation2}
                       </RowElement>
                       <RowElement>
                           {props.internalExpertise2}
                       </RowElement>
                       <RowElement>
                           {props.internalDate2}
                       </RowElement>
                    </Row>
                    <Row>
                       <RowElement>
                            {props.internalName3}
                       </RowElement>
                       <RowElement>
                           {props.internalEntity3}
                       </RowElement>
                       <RowElement>
                           {props.internalLocation3}
                       </RowElement>
                       <RowElement>
                           {props.internalExpertise3}
                       </RowElement>
                       <RowElement>
                           {props.internalDate3}
                       </RowElement>
                    </Row>
                </Table>
                <BottomInfo>See more Reviews</BottomInfo>
        </ProposalsContainer>
    )
}