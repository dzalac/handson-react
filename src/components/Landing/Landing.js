import "./Landing.scss"
import LandingImg from "../../assets/Images/landing.jpg"
import {Button} from "../../lib/style/generalStyles";
import { useNavigate } from "react-router-dom";
import {
    Landing as LandingWrapper,
    LandingImg as LandingImage,
    Overlay,
    OverlayPrimary,
    OverlaySecondary,
    Content,
    ContentInner,
    Title,
    Subtitle} from "./LandingStyle";

const Landing = (isLanding) => {
    const navigate = useNavigate();

    return (
        <LandingWrapper>
            <LandingImage src={LandingImg} />
            <Overlay>
                <OverlayPrimary />
                <OverlaySecondary />
            </Overlay>
            <Content>
                <ContentInner>
                    <Title>Learn what matters, Speck Academy powered by FOI</Title>
                    <Subtitle>Make a turnaround in your career or upgrade your current skill set with knowledge-based lessons from IT practice.</Subtitle>
                    <Button isLanding={isLanding}  onClick={() => navigate('/courses')} > Explore Courses</Button>
                </ContentInner>
            </Content>
        </LandingWrapper>
    );
};

export default Landing;