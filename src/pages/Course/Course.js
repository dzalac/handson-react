import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses"


const Course = () => {

    const navigate = useNavigate();

    const {id} = useParams();
    const [courses, setCourses] = useState(null);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        setCourses(coursesMock);
    },[]);

    useEffect(() => {
        courses && setCourse(...courses.filter(course => course.id === parseInt(id)));
    },[courses, id]);

    return (
        <> 
          <Header isSecondary={true} />
          {course && (
             <Main>
                <Section 
                    title={course.title} 
                    actionText={course.subtitle} 
                    buttonText={'Back'} 
                    onClick={() => navigate(-1)}  
                >            
                    <SingleCourse  
                        imgSrc={course.imgSrc} 
                        imgAlt={course.imgAlt} 
                        text={course.text} />
                </Section>  
            </Main>
          )}
        </>
    );
};

export default Course;