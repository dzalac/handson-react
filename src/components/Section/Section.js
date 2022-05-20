import React from 'react';
import {Button} from "../../lib/style/generalStyles";
import './Section.scss';

import {
    Section as SectionWrapper,
    SectionInner,
    SectionActionText,
    SectionHeading,
    SectionTitleH1,
    SectionTitleH2
} from "./SectionStyle"

const Section = ({
    isTestimonial,
    actionText,
    title,
    buttonText,
    onClick,
    isHeadingVisible = true,
    children,
    isMainSection = false,
    isCentered = false,
    }) => {

    return (
        <SectionWrapper isTestimonial={isTestimonial}>
            <SectionInner>
                {actionText && <SectionActionText> {actionText} </SectionActionText>}
                {isHeadingVisible && (
                    <SectionHeading>
                        {title && (isMainSection ? <SectionTitleH1 isCentered={isCentered} >{title}</SectionTitleH1>  : <SectionTitleH2 isCentered={isCentered} >{title}</SectionTitleH2>)}
                        {buttonText && (
                            <Button isHeading isOutlined  onClick={onClick} >
                                {buttonText}
                            </Button>
                        )}
                    </SectionHeading>
                )}
                {children}
            </SectionInner>
        </SectionWrapper>
    );
}

export default Section;
