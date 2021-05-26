import React, { FC } from "react";
import styled from "styled-components";

const AmountContainer = styled.div`
    color:black;
`

const Title = styled.div`
    font-weight:bold;
    margin: 20px 0px;
    
`
const Table = styled.div`
   
`
const Header = styled.div`
    border-bottom:1px solid grey; 
    display:flex;
    //background-color:yellow;
    width:100%;
    justify-content:flex-start;
    
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
export interface IAmount{
    year1:string,
    center1:string,
    amount1:string,
    law1:string,
    year2:string,
    center2:string,
    amount2:string,
    law2:string,
    year3:string,
    center3:string,
    amount3:string,
    law3:string,
    year4:string,
    center4:string,
    amount4:string,
    law4:string,
    year5:string,
    center5:string,
    amount5:string,
    law5:string,
}
export const AmountOfFeesNotEdited: FC<IAmount>=(props)=>{

    return(
        <AmountContainer>
                <Title>
                    Amount of fees
                </Title>
                <Table>
                    <Header>
                        <HeaderElement>
                            Year
                        </HeaderElement>
                        <HeaderElement>
                            Cost center
                        </HeaderElement>
                        <HeaderElement>
                            Total amount
                        </HeaderElement>
                        <HeaderElement>
                            Law firm
                        </HeaderElement>
                    </Header>
                    <Row>
                        <RowElement>
                            {props.year1}
                        </RowElement>
                        <RowElement>
                            {props.center1}
                        </RowElement>
                        <RowElement>
                            {props.amount1}
                        </RowElement>
                        <RowElement>
                            {props.law1}
                        </RowElement>
                        
                    </Row>
                    <Row>
                        <RowElement>
                            {props.year2}
                        </RowElement>
                        <RowElement>
                            {props.center2}
                        </RowElement>
                        <RowElement>
                            {props.amount2}
                        </RowElement>
                        <RowElement>
                            {props.law2}
                        </RowElement>
                        
                    </Row>
                    <Row>
                        <RowElement>
                            {props.year3}
                        </RowElement>
                        <RowElement>
                            {props.center3}
                        </RowElement>
                        <RowElement>
                            {props.amount3}
                        </RowElement>
                        <RowElement>
                            {props.law3}
                        </RowElement>
                        
                    </Row>
                    <Row>
                        <RowElement>
                            {props.year4}
                        </RowElement>
                        <RowElement>
                            {props.center4}
                        </RowElement>
                        <RowElement>
                            {props.amount4}
                        </RowElement>
                        <RowElement>
                            {props.law4}
                        </RowElement>
                        
                    </Row>
                    <Row>
                        <RowElement>
                            {props.year5}
                        </RowElement>
                        <RowElement>
                            {props.center5}
                        </RowElement>
                        <RowElement>
                            {props.amount5}
                        </RowElement>
                        <RowElement>
                            {props.law5}
                        </RowElement>
                        
                    </Row>
                </Table>
        </AmountContainer>
    )
}