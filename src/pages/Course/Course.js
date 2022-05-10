import React from "react";
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
        courses && setCourse(...courses.filter(course => course.id === parseInt(id) ))
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
                    buttonClickHandler={() => navigate(-1)}  
                >
                
                
                <SingleCourse  imgSrc={course.ImgSrc} imgAlt={course.imgAlt} text={course.text} ></SingleCourse>
    
                </Section>
     
            </Main>

          )}

       
          
            
        </>
    );
};

export default Course;