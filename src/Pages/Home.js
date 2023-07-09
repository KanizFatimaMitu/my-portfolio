import React from 'react';
import Intro from '../Components/Intro';
import Skills from '../Components/Skills';
import Swiper from '../Components/Swiper';
import ProjectCard from '../Components/Carousel';
import ContactMe from '../Components/ContactMe';

const Home = () => {
    return (
        <div>

            <Intro></Intro>
            <Skills></Skills>
            <Swiper></Swiper>
            <ProjectCard></ProjectCard>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;