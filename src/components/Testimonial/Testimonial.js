import React from 'react';
import './Testimonial.scss';
import {Testimonial as TestimonialWrapper, Figure, TestimonialImg as TestimonialImage, TestimonialContent, Text, Quotation} from "./TestimonialStyle";

import TestimonialImg from '../../assets/Images/testimonial.jpg';

const Testimonial = () => {
    return (
        
        <TestimonialWrapper>
            <Figure>
                <TestimonialImage src={TestimonialImg} alt="Testimonialka" />
            </Figure>
            <TestimonialContent>
                <Text>
                    <Quotation>"</Quotation>
                    At the academy, I learned how to apply technology in practice. 
                    Frontend education was demanding, it required a lot of time. 
                    Upon completion, I got my first job as a developer.
                    <Quotation>"</Quotation>
                </Text>
            </TestimonialContent>
        </TestimonialWrapper>
    );
}

export default Testimonial;