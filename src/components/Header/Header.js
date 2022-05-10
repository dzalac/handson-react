import React from "react";
import "./Header.scss"
import LogoImg from "../../assets/Images/logo.svg"
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";
import {
    Header as HeaderWrapper,HeaderInner,LogoLink,LogoImg as LogoElement,Hamburger,Nav,HeaderNavLink,ButtonLink
} from "./HeaderStyle"

const Header = ({isSecondary}) => {
    
    //ovdje je nav link, ali ne radi

    const navLinkStyles = ({isActive}) => {
        return{
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'none'
        }
    }

    return (
        <HeaderWrapper isSecondary={isSecondary}>
            <HeaderInner>
                <LogoLink to="/">
                    <LogoElement src={LogoImg} alt="logo" />
                </LogoLink>
                <Hamburger />
                <Nav>
                    <HeaderNavLink to="/courses">Courses </HeaderNavLink>
                    <ButtonLink to="/" >
                        <Button modifiers={['nav']} >Sign In</Button>
                    </ButtonLink>

                    <ButtonLink to="/" >
                        <Button modifiers={['nav', 'secondary']}>Register</Button>
                    </ButtonLink>
                </Nav>
            </HeaderInner>
        </HeaderWrapper>
    );


};

export default Header;