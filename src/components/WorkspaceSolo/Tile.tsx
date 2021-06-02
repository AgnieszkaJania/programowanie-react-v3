import React, { FC, useEffect, useState } from "react";
import useDropdown from "react-dropdown-hook";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Colors } from "../../styledHelpers/Colors";

interface ITitle{
    desc: string;
    title: string;
    photo: string;
}

interface Itmp{
    color:string;
}

const Tmp = styled.div<Itmp>`
    background-color: ${props=>props.color};
`;

export class Tile extends React.Component<ITitle>{
    render(){
        return <Tmp color="red">{this.props.desc}</Tmp>
    }
}