import styled from "styled-components";
import { breakpoints, colors, fonts } from "./theme"; 
import {Form as FormFormik, Field as FieldFormik, ErrorMessage as ErrorMessageFormik } from "formik";
import { css } from "styled-components";


export const Grid = styled.div`
    
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 48px;

    @media (${breakpoints.tabletSmall}){
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    @media (${breakpoints.desktop}){
        grid-template-columns: repeat(3, 1fr);
        column-gap: 48px;
    }
    
    @media (${breakpoints.desktopLarge}){
        grid-template-columns: repeat(4, 1fr);
    }

`;

export const Button = styled.button`
    border: none;
    display: inline-flex;
    height: 48px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    width: 220px;
    background-color: ${colors.bgPrimary};
    color: ${colors.primary};
    border-radius: 30px;
    font-weight: 500;
    transition: all 0.3s ease-out;
    text-transform: uppercase;

    &:hover{
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        cursor: pointer;
    }

    ${props => props.isSecondary && `
        background: ${colors.primary};
        color: ${colors.bgPrimary};
    `}

    ${props => props.isNav && `
        width: 150px;
    `}

    ${props => props.isOutlined && `
         border: 1px solid ${colors.primary};
    `}

    ${props => props.isHeading && `
          width: 200px;
    `}

    
    ${props => props.isForm && `
            width: 220px;
            display: block;
            margin: 0 auto;          
        `}
    
    ${props => props.isHamburger && `
        display: block;
        margin: 0 auto; 
    `}

`;

export const FormWrapper = styled.div`
     @media (${breakpoints.tabletSmall}){
        width: 400px;

        ${props => props.isCentered !== false && `
            margin: 0 auto;
        `}
    }
`;

export const Form = styled(FormFormik)`
`;

export const FormRow = styled.div`
   margin-bottom: 32px;
    &:last-child{
        margin-bottom: 0;
    }
`;

const FieldStyle = css`
    border: 1px solid ${colors.textSecondary};
    border-radius: 6px;
    width: 100%;
    line-height: 50px;
    height: 50px;
    padding: 0 12px;
    outline: none;
    font-size: 14px;
    font-family: ${fonts.primary};

    &:focus {
        border-color: ${colors.textPrimary};
    }

    @media (${breakpoints.desktop}){
        font-size: 16px;
    }
`;

export const Field = styled(FieldFormik)`
    ${FieldStyle}
`;

export const Select = styled.select`
    ${FieldStyle}
`;

export const Option = styled.option``;

export const ErrorMessage = styled(ErrorMessageFormik)`
    font-size: 14px;
    color: ${colors.primary};
    padding-top: 8px;
`;


export const Search = styled.input`
    display: grid;
    margin: auto;
    margin-bottom: 40px;
    width: 220px;
    height: 30px;
    border: 1px solid ${colors.textSecondary};
    border-radius: 6px;
    line-height: 40px;
    outline:none;
    font-size:14px;
    padding-top:0px;
    padding-bottom:0px;
    padding-left:15px;
    padding-right:15px;

    :focus{
        border: 1px solid ${colors.textPrimary};
    }
    
    ::placeholder{
        text-align: center;
    }

    @media(${breakpoints.tabletMedium}){
        width:400px;
        padding:0;  
    }
    
    @media(${breakpoints.desktop}){
        font-size: 16px;
    }
`;



