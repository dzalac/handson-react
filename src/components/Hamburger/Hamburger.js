import React from "react";
import {Hamburger as HamburgerWrapper, HamburgerInner} from "./HamburgerStyle";
import {Button} from "../../lib/style/generalStyles";
import {useNavigate } from "react-router-dom";
import {HeaderNavLink} from "../Header/HeaderStyle";

function Hamburger() {
    const navigate = useNavigate();
    
    return(
        
        

        <HamburgerWrapper>
           
            <Button isHamburger isOutlined onClick={() => navigate(-1)}>Close</Button>
            <HamburgerInner>    
            
                <HeaderNavLink to="/courses">Courses</HeaderNavLink>
                <HeaderNavLink to="/register">Register</HeaderNavLink>
                <HeaderNavLink to="/sign-in">Sign in</HeaderNavLink>
            </HamburgerInner>    
                    
       

        </HamburgerWrapper>
    )
}

export default Hamburger;