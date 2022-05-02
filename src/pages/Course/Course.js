import React from "react";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import LectureImg1 from '../../assets/Images/lecture-1.jpg';
import LectureImg2 from '../../assets/Images/lecture-2.jpg';
import LectureImg3 from '../../assets/Images/lecture-3.jpg';
import LectureImg4 from '../../assets/Images/lecture-4.jpg';
import LectureImg5 from '../../assets/Images/lecture-5.jpg';
import LectureImg6 from '../../assets/Images/lecture-6.jpg';
import CourseCard from "../../components/CourseCard/Coursecard";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import { useNavigate } from "react-router-dom";


const Course = () => {

    const navigate = useNavigate();

    return (
        <> 
          <Header modifiers={['secondary']} />

        <Main>
            <Section title={'1. Introduction'} actionText={'120+ minutes'} buttonText={'Back'} buttonClickHandler={() => navigate(-1)}  >
            <SingleCourse></SingleCourse>

            </Section>
    
        </Main>
          
            
        </>
    );
};

export default Course;