import React from "react";
import {Hamburger as HamburgerWrapper} from "./HamburgerStyle";
import Button from "../Button/Button";
import {ButtonLink} from "../Header/HeaderStyle"

function Hamburger() {
    return(

        <HamburgerWrapper>
        <div>
         
                <a href="/courses"> Courses</a>
                <a href="/"> Register</a>
                <a href="/"> Sign In</a>
             
       
        </div>

        </HamburgerWrapper>
    )
}

export default Hamburger;