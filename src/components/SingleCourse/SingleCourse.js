import './SingleCourse.scss';
import React from "react";
import {SingleCourse as SingleCourseWrapper, SingleCourseFigure, SingleCourseImg, SingleCourseText} from "./SingleCourseStyle";

const SingleCourse = ({imgSrc, imgAlt, text}) => {
    return (
        <SingleCourseWrapper>
            <SingleCourseFigure>
                <SingleCourseImg src={imgSrc} alt={imgAlt} />
            </SingleCourseFigure>
            <SingleCourseText>{text}</SingleCourseText>
        </SingleCourseWrapper>
    );
}

export default SingleCourse;