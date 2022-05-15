import React from "react";
import {Grid} from "../../lib/style/generalStyles";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/Coursecard";
import { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";



const Courses = () => {

    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


    const [courses, setCourses] = useState(null);
    //const [loading, setLoading] = useState(false);

    useEffect(() => {
        //setLoading(true)
        setTimeout(() => {
            setCourses(coursesMock)
            //setLoading(false)
        },1000)


   
    },[])

   //const [query, setQuery] = useState(" ")


    return (
        <> 
          <Header isSecondary={true} />

          <Main>
              <Section title={'All lectures'} >

                {/*
                <div>
                    <input type="text" placeholder="Unesi course" onChange={event => setQuery(event.target.value)} />
                </div>

    */}



                {/*
                courses.filter(courses => {
                    if (!query) {
                        return courses;
                    } else if (courses.title.toLowerCase().includes(query.toLowerCase())) {
                        return courses;
                        } 
                    }).map((course, id) => (
                        <div className="box" key={id}>
                            <Grid>
                          
                              <CourseCard
                              key={course.id}
                              courseId={course.id}
                              imgSrc={course.imgSrc}
                              imgAlt={course.imgAlt}
                              title={course.title}
                              subtitle={course.subtitle}
                          />
                          
                         </Grid>
                        
                        </div>
                    )) 
                    */}

                    

                    {/*
                        loading ?
                        <ClipLoader 
                            css={override}
                            size={150}
                            color={"#123abc"}
                            loading={loading}
                        
                        />

                        :

                        <Grid>
                            {courses.map((course) =>  
                              <CourseCard
                              key={course.id}
                              courseId={course.id}
                              imgSrc={course.imgSrc}
                              imgAlt={course.imgAlt}
                              title={course.title}
                              subtitle={course.subtitle}
                          />
                          )}
                            </Grid>


                            */}
        
           

              {courses && <Grid>
                            {courses.map((course) =>  
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

                         {/*
                courses.filter(post => {
                    if (query === '') {
                        return post;
                    } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                        } 
                    }).map((course, id) => (
                        <div className="box" key={id}>
                            <Grid>
                          
                              <CourseCard
                              key={course.id}
                              courseId={course.id}
                              imgSrc={course.imgSrc}
                              imgAlt={course.imgAlt}
                              title={course.title}
                              subtitle={course.subtitle}
                          />
                          
                         </Grid>
                        
                        </div>
                    )) 
                    */}
         

            { /*
                  <Grid>
                  <CourseCard
                            imgSrc={LectureImg1}
                            imgAlt={'Introduction'}
                            title={'1. Introduction'}
                            subtitle={'60 Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg2}
                            imgAlt={'HTML & CSS'}
                            title={'2. HTML & CSS'}
                            subtitle={'120+ Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg3}
                            imgAlt={'Version Control System'}
                            title={'3. Version Control System'}
                            subtitle={'120+ Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg4}
                            imgAlt={'Advanced CSS'}
                            title={'4. Advanced CSS'}
                            subtitle={'120+ Minutes'}
                        />
                         <CourseCard
                            imgSrc={LectureImg5}
                            imgAlt={'JavaScript basics'}
                            title={'5. JavaScript Basics'}
                            subtitle={'120+ Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg6}
                            imgAlt={'Advanced JavaScript'}
                            title={'6. Advanced JavaScript'}
                            subtitle={'120+ Minutes'}
                        />
                           <CourseCard
                            imgSrc={LectureImg7}
                            imgAlt={'JavaScript basics'}
                            title={'7. Intro to React'}
                            subtitle={'120+ Minutes'}
                        />
                        <CourseCard
                            imgSrc={LectureImg8}
                            imgAlt={'Advanced JavaScript'}
                            title={'8. React events&listeners'}
                            subtitle={'120+ Minutes'}
                        />
                  </Grid>
                  */}
              </Section>
          </Main>
            
        </>
    );
};

export default Courses;