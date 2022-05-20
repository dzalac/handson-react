import React from "react";
import "./Header.scss"
import LogoImg from "../../assets/Images/logo.svg"
import { useState } from "react";
import {
    Header as HeaderWrapper,HeaderInner,LogoLink,LogoImg as LogoElement,Hamburger,Nav,HeaderNavLink,ButtonLink
} from "./HeaderStyle"
import {Button} from "../../lib/style/generalStyles";
import Hamburger2 from "../Hamburger/Hamburger";

const Header = ({isSecondary}) => {
    const [showMenu, setShowMenu] = useState(false);   
    //ovdje je nav link, ali ne radi
    const navLinkStyles = ({isActive}) => {
        return{
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'none'
        }
    }

    return (
        <>
        <HeaderWrapper isSecondary={isSecondary}>
            <HeaderInner>
                <LogoLink to="/">
                    <LogoElement src={LogoImg} alt="logo" />
                </LogoLink>
                <Hamburger onClick={() => setShowMenu(!showMenu) } />
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

        {showMenu && 
            <Hamburger2 />
        }
        </>
    );


};

export default Header;