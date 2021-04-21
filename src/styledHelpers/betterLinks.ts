import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BetterLink = styled(Link)`
    color:inherit;
    text-decoration:inherit;
`
export const BasicLink = styled(BetterLink)`
    font-size:5px;
    color:blue;
`