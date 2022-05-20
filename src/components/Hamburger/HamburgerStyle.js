import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme"; 
import {ReactComponent as HamburgerIcon} from "../../assets/Images/icon-hamburger.svg";

export const Hamburger = styled.div`
    background-color:${colors.textPrimary};
    height: 100%;
    width: 100%;
    font-size: 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3; 
    margin-left:0;

    @media(${breakpoints.desktop}) {
        display: none;
    }
    
`;

export const HamburgerInner = styled.div`
    display:grid;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    width:500px;
    height: 500px;
    text-align:center;
    align-items:center;
`;