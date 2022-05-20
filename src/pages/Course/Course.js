import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import { useNavigate } from "react-router-dom";


const Course = () => {

    const navigate = useNavigate();

    return (
        <> 
        <Header modifiers={['secondary']} />
        <Main>
            <Section title={'1. Introduction'} actionText={'120+ minutes'} buttonText={'Back'} buttonClickHandler={() => navigate(-1)}  >
                <SingleCourse />
            </Section>
        </Main>
        </>
    );
};

export default Course;