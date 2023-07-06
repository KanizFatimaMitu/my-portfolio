import React from 'react';
import Intro from '../Components/Intro';
import Skills from '../Components/Skills';
import Swiper from '../Components/Swiper';
import ProjectCard from '../Components/Carousel';

const Home = () => {
    return (
        <div>
            
            <Intro></Intro>
            <Skills></Skills>
            <Swiper></Swiper>
            <ProjectCard></ProjectCard>
           
        </div>
    );
};

export default Home;