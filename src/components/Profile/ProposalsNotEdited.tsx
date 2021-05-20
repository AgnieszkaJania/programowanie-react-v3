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
    color:blue;
    /* background-color:pink; */
    text-align:right;
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
        width:16.6%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
`
const HeaderElement = styled.div`
        padding:10px;
        text-align:left;
        font-weight:bold;
        width:16.6%;
`

export interface IProposal{
    name1:string,
    entity1:string,
    location1:string,
    expertise1:string,
    date1:string,
    firm1:string,
    name2:string,
    entity2:string,
    location2:string,
    expertise2:string,
    date2:string,
    firm2:string,
    name3:string,
    entity3:string,
    location3:string,
    expertise3:string,
    date3:string,
    firm3:string,
}

export const ProposalsNotEdited: FC<IProposal>=(props)=>{
    return(
        <ProposalsContainer>
                <Title>
                    Proposals
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
                        <HeaderElement>
                            Firm
                        </HeaderElement>
                    </Header>
                    <Row>
                        <RowElement>
                            {props.name1}
                        </RowElement>
                        <RowElement>
                            {props.entity1}
                        </RowElement>
                        <RowElement>
                            {props.location1}
                        </RowElement>
                        <RowElement>
                            {props.expertise1}
                        </RowElement>
                        <RowElement>
                            {props.date1}
                        </RowElement>
                        <RowElement>
                            {props.firm1}
                        </RowElement>
                    </Row>
                    <Row>
                        <RowElement>
                            {props.name2}
                        </RowElement>
                        <RowElement>
                            {props.entity2}
                        </RowElement>
                        <RowElement>
                            {props.location2}
                        </RowElement>
                        <RowElement>
                            {props.expertise2}
                        </RowElement>
                        <RowElement>
                            {props.date2}
                        </RowElement>
                        <RowElement>
                            {props.firm2}
                        </RowElement>
                    </Row>
                    <Row>
                        <RowElement>
                            {props.name3}
                        </RowElement>
                        <RowElement>
                            {props.entity3}
                        </RowElement>
                        <RowElement>
                            {props.location3}
                        </RowElement>
                        <RowElement>
                            {props.expertise3}
                        </RowElement>
                        <RowElement>
                            {props.date3}
                        </RowElement>
                        <RowElement>
                            {props.firm3}
                        </RowElement>
                    </Row>
                </Table>
                <BottomInfo>See more proposals</BottomInfo>
        </ProposalsContainer>
    )
}