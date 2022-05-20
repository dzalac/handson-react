import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Landing = styled.div`
     height: 100vh;
    position: relative;
`;

export const LandingImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const Overlay= styled.div`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;  
`;

export const OverlayPrimary = styled.div`
    height: 100%;
    width: 27%;
    left: 0;
    position: absolute;
    background-color: ${colors.overlayPrimary};
`;

export const OverlaySecondary = styled.div`
    height: 100%;
    position: absolute;
    right: 0;
    width: 73%;
    background-color: ${colors.overlaySecondary};
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: calc((100% - 1300px) / 2);
    display: flex;
    height: 100%;
    width: 1300px;
    align-items: center;
`;

export const ContentInner = styled.div`
    margin: 0 auto;

    @media (${breakpoints.tabletSmall}) {
            width: 450px;
    }

    @media (${breakpoints.tablet}) {
            width: 550px;          
    }

    @media (${breakpoints.desktop}) {
            width: 960px;           
    }

    @media (${breakpoints.desktopLarge}) {
            width: 1280px;
    }
`; 

export const Title = styled.h1`
    color: ${colors.bgSecondary};
    font-size: 56px;
    width: 550px;
    margin-bottom: 24px;

    @media (${breakpoints.tabletSmall}) {
        width: 450px;
        font-size: 56px; 
    }
`;

export const Subtitle = styled.p`
        color: ${colors.bgSecondary};
        font-size: 16px;
        width: 440px;
        margin-bottom: 48px;

        @media (${breakpoints.tabletSmall}) {
                font-size: 16px;        
        }
`;

