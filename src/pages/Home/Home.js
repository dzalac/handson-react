import React from "react";
import { useState, useEffect } from "react";
import {Grid} from "../../lib/style/generalStyles";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/Coursecard";
import Testimonial from "../../components/Testimonial/Testimonial";
import { useNavigate } from "react-router-dom";
import coursesMock from "../../lib/mock/courses";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";


const Home = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setCourses(coursesMock)
        },1000)
    },[])

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
 
    return (
        <> 
            <Header isNav={true} />
            <Main>
                <section>
                    <Landing/>
                </section>
                <Section  
                    title={'Open new possibilities'} 
                    actionText={'Learn Something new'}
                    buttonText={'More courses'}
                    onClick={() => navigate('/courses')  }
                    >                      
                    {courses && <Grid>
                        {courses.map((course, index) => index <= 3 && 
                            <CourseCard
                            key={course.id}
                            courseId={course.id}
                            imgSrc={course.imgSrc}
                            imgAlt={course.imgAlt}
                            title={course.title}
                            subtitle={course.subtitle}
                            />
                        )}
                        </Grid>}
                        <ClipLoader 
                        css={override}
                        size={150}
                        color={"#123abc"}
                        loading={!courses}/>                                               
                </Section>   
                <Section isHeadingVisible={false} modifiers={['Testimonials']}> <Testimonial></Testimonial> </Section>      
            </Main>
        </>
    );
};

export default Home;