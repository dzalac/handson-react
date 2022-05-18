import React from "react";
import "./Header.scss"
import LogoImg from "../../assets/Images/logo.svg"
import Button from "../Button/Button";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Header as HeaderWrapper,HeaderInner,LogoLink,LogoImg as LogoElement,Hamburger,Nav,HeaderNavLink,ButtonLink
} from "./HeaderStyle"

import Hamburger2 from "../Hamburger/Hamburger";

const Header = ({isSecondary, isNav}) => {
    
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
                    
                    <HeaderNavLink to="/courses">Courses </HeaderNavLink>
                    <ButtonLink to="/sign-in" >
                     {/* <Button modifiers={['nav']} >Sign In</Button>*/}
                        <Button isNav={isNav} >Sign In</Button>  
                    </ButtonLink>

                    <ButtonLink to="/register" >
                       {/*<Button modifiers={['nav', 'secondary']}>Register</Button> */} 
                       <Button  isNav={isNav} isSecondary={isSecondary} > Register</Button>
                    </ButtonLink>
                </Nav>
            </HeaderInner>
        </HeaderWrapper>
    );


};

export default Header;