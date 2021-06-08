import React from "react";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

interface ITile{
    desc: string;
    title: string;
    title2:string;
    photo: string;
    alt: string;
}
const SingleTileContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    text-align:left;
    background-color:white;
    border: 2px outset gray;
    border-radius:5px;
    padding:20px;   
    margin:5px;
    width:30%;
    color:${Colors.black};
    img{
        width:30px;
        height:40px;
    }
`
const Desc = styled.div`
    font-size:15px;
    margin-top:10px;
`
const Title = styled.div`
    font-size: 20px;
    margin-top:10px;
    span{
        font-weight:bold;
    }
    
`




//<Tmp color="red">{this.props.desc}</Tmp>

export class Tile extends React.Component<ITile>{
    render(){
        return <SingleTileContainer>
            <img src={this.props.photo} alt={this.props.alt}/>
            <Title>
                {this.props.title}
                <span>{this.props.title2}</span>
            </Title>
            <Desc>
                {this.props.desc}
            </Desc>


        </SingleTileContainer>
        
    }
}