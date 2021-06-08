import styled from 'styled-components';
import { Colors } from './Colors';

export const Wrapper = styled.div`
    background: grey;
    display: flex;
    justify-content: center;
    font-family:'Courier New', Courier, monospace;
`;

export const MainBoardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:30px;
    /* background-color:yellow; */
    width:70%;
    color:${Colors.lightblack};
    font-family: 'Courier New', Courier, monospace;
    
`
export const GeneralWrapper = styled.div`
    width:100%;
    background-color:${Colors.white};
    box-shadow: 0px 0px 2px 2px ${Colors.shadowColor};
    display:flex;
    border-radius: 3px;
`