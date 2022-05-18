import "./Button.scss"
import {Button as ButtonWrapper} from "./ButtonStyle";

const Button = ({children, clickHandler, ...otherProps}) => {

    {/*const modifierClasses = {
        secondary: 'Button_secondary',
        nav: 'Button_nav',
        landing: 'Button_landing',
        heading: 'Button_heading',
        outline: 'Button_outline'
    }; */}

    //let buttonClass = "Button";

    //modifiers.map(modifier => buttonClass += " " + modifierClasses[modifier]);

    return (
        <ButtonWrapper {...otherProps} onClick={clickHandler} >{children}</ButtonWrapper>
    ) //<button className={buttonClass} onClick={clickHandler} >{children}</button>

    

};

export default Button;