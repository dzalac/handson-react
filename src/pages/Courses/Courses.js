import React from "react";
import {Grid, Search} from "../../lib/style/generalStyles";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/Coursecard";
import { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


const Courses = () => {
    const [courses, setCourses] = useState(null);
    const [filteredCourses, setFilteredCourses] = useState(null);
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    useEffect(() => {      
        setTimeout(() => {
            setCourses(coursesMock);
            setFilteredCourses(coursesMock);           
        },1000);
    }, []);

    const handleSearch = (title) => {
        const filteredResults = filteredCourses.filter(course => course.title.toLowerCase().includes(title.toLowerCase()));
        setCourses(filteredResults);    
    }

    return (
        <> 
          <Header isSecondary={true} />
          <Main>
              <Section title={'All lectures'} >   
                <div>    
                    <Search type="text" placeholder="Unesi course" onChange={event => handleSearch(event.target.value)} />             
                </div>   
                {courses && <Grid>
                    {courses.map((course) =>  
                        <CourseCard
                        key={course.id}
                        courseId={course.id}
                        imgSrc={course.imgSrc}
                        imgAlt={course.imgAlt}
                        title={course.title}
                        subtitle={course.subtitle}
                        />)
                    }
                </Grid>}
                <ClipLoader 
                    css={override}
                    size={150}
                    color={"#123abc"}
                    loading={!courses}/>                      
              </Section>
          </Main>          
        </>);
};

export default Courses;