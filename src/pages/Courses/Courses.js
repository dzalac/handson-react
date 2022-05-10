import React from "react";
import {Grid} from "../../lib/style/generalStyles";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import LectureImg1 from '../../assets/Images/lecture-1.jpg';
import LectureImg2 from '../../assets/Images/lecture-2.jpg';
import LectureImg3 from '../../assets/Images/lecture-3.jpg';
import LectureImg4 from '../../assets/Images/lecture-4.jpg';
import LectureImg5 from '../../assets/Images/lecture-5.jpg';
import LectureImg6 from '../../assets/Images/lecture-6.jpg';
import LectureImg7 from '../../assets/Images/lecture-7.jpg';
import LectureImg8 from '../../assets/Images/lecture-8.jpg';
import CourseCard from "../../components/CourseCard/Coursecard";


const Courses = () => {
    return (
        <> 
          <Header isSecondary={true} />

          <Main>
              <Section title={'All lectures'} >
         


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
              </Section>
          </Main>
            
        </>
    );
};

export default Courses;