import React from "react";
import styled from "styled-components";

interface IColorfulTile{
    title:string;
    icon:string;
    color:string;
    textColor:string;
    bold:boolean;
}
interface IFeatures{
    color:string;
    textColor:string;
}
const SingleColorfulTile = styled.div<IFeatures>`
    div{
        background-color: ${props=>props.color};
        color:${props=>props.textColor};
        padding:5px;
        border-radius:2px;
        display:flex;
        margin: 10px;
        justify-content:space-around;
        align-items:center;
        height:20px;
    }
    img{
        width:15px;
        height:20px;
        margin-right:5px;
    }
    
`;

const ParagraphThick = styled.p`
    font-weight:bold;
`


export class ColorfulTile extends React.Component<IColorfulTile>{
    render(){
        return <SingleColorfulTile color={this.props.color} textColor={this.props.textColor}>
            
            
            {this.props.bold &&
                <div>
                    <ParagraphThick>{this.props.title}</ParagraphThick>
                </div>
            }
            {!this.props.bold &&
                <div>
                    <img src={this.props.icon} alt="Small icon"/>
                    <p>{this.props.title}</p>
                </div>
            }
        </SingleColorfulTile>
        
    }
}