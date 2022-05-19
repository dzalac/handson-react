import React from "react";
import "./Header.scss"
import LogoImg from "../../assets/Images/logo.svg"
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Header as HeaderWrapper,HeaderInner,LogoLink,LogoImg as LogoElement,Hamburger,Nav,HeaderNavLink,ButtonLink
} from "./HeaderStyle"
import {Button} from "../../lib/style/generalStyles";

import Hamburger2 from "../Hamburger/Hamburger";

const Header = ({isSecondary}) => {
    
    //ovdje je nav link, ali ne radi

    const navLinkStyles = ({isActive}) => {
        return{
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'none'
        }
    }

    const [showMenu, setShowMenu] = useState(false);

    let menu;

    if(showMenu){
        menu= <Hamburger2 />
    }

    return (
        <HeaderWrapper isSecondary={isSecondary}>
            <HeaderInner>
                <LogoLink to="/">
                    <LogoElement src={LogoImg} alt="logo" />
                </LogoLink>
                <Hamburger onClick={() => setShowMenu(!showMenu) } />
                {menu}
                <Nav>                 
                    <HeaderNavLink to="/courses">Courses</HeaderNavLink>
                    <ButtonLink to="/sign-in" >
                        <Button isNav>Sign In</Button>  
                    </ButtonLink>

                    <ButtonLink to="/register" >
                       <Button  isNav isSecondary>Register</Button>
                    </ButtonLink>
                </Nav>
            </HeaderInner>
        </HeaderWrapper>
    );


};

export default Header;