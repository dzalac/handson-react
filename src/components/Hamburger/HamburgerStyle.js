import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme"; 
import {ReactComponent as HamburgerIcon} from "../../assets/Images/icon-hamburger.svg";

export const Hamburger = styled.div`
    background-color:#ffffff;
    height: 100%;
    width: 300px;
    font-size: 30px;
    padding: 0;
    margin: 10;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
 
    
    
   

    @media(${breakpoints.desktop}) {
        display: none;
    }
    
`;