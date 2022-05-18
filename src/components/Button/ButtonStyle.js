import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme"; 

export const Button = styled.button`
    border: none;
    display: inline-flex;
    height: 48px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    width: 220px;
    background-color: ${colors.bgPrimary};
    color: $colorPrimary;
    border-radius: 30px;
    font-weight: 500;
    text-transform: uppercase;

    &:hover{
        transition: all 0.3s ease-in-out;
    filter: drop-shadow(0 3px 3px ${colors.textPrimary});
    }

    &_nav {
        width: 150px;

        &:hover {
            transition: all 0.3s ease-in-out;
            filter: drop-shadow(0 3px 3px ${colors.black});
        }
    }

    ${props => props.isSecondary && `
         background: ${colors.primary};
        color: ${colors.bgPrimary};

    `}

    ${props => props.isNav && `
        width: 150px;

    &:hover {
        transition: all 0.3s ease-in-out;
        filter: drop-shadow(0 3px 3px ${colors.black});
    }

    `}

    ${props => props.isOutlined && `
         border: 1px solid ${colors.primary};

    `}

    ${props => props.isHeading && `
          width: 200px;

    `}

`;