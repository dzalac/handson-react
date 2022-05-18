import React from 'react';
import Button from '../Button/Button';
import './Section.scss';

import {
    Section as SectionWrapper,
    SectionInner,
    SectionActionText,
    SectionHeading,
    SectionTitleH1,
    SectionTtileH2,
    SectionTitleH2
} from "./SectionStyle"

const Section = ({
    isTestimonial,
    //modifiers,
    isHeading,
    isOutlined,
    actionText,
    title,
    buttonText,
    //buttonClickHandler,
    isHeadingVisible = true,
    children,
    callback,
    isMainSection = false,
    isCentered = false,
}) => {


    {/* 
    const modifierClasses = {
        testimonials: 'Section_testimonials'
    }

    let sectionClass = 'Section';
    
    if (modifiers){
        modifiers.map(modifier => {
            sectionClass += ' ' + modifierClasses[modifier];
        });
    }

    */}

    return (

  

        <SectionWrapper isTestimonial={isTestimonial}>
            <SectionInner>
                {actionText && <SectionActionText> {actionText} </SectionActionText>}
                {isHeadingVisible && (
                    <SectionHeading>
                        {title && (isMainSection ? <SectionTitleH1 isCentered={isCentered} >{title}</SectionTitleH1>  : <SectionTitleH2 isCentered={isCentered} >{title}</SectionTitleH2>)}
                        {buttonText && (
                            <Button isHeading isOutlined onClick={callback}  >
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

      {/* 
        <section className={sectionClass}>
            <div className="Section-Inner">
                {actionText && <span className="Section-ActionText">{actionText}</span>}
                {isHeadingVisible && <div className="Section-Heading">
                    {title && <h2 className="Section-Title">{title}</h2>}
                    {buttonText && <Button modifiers={['heading', 'outline']} clickHandler={buttonClickHandler} >{buttonText}</Button>}
                </div>}
                {children}
            </div>
        </section>

        */}