import React from 'react';
import Navbar from '../Shareable/Navbar';
import Footer from '../Shareable/Footer';
import Intro from '../Components/Intro';
import Skills from '../Components/Skills';
import Swiper from '../Components/Swiper';
import ProjectCard from '../Components/Carousel';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Intro></Intro>
            <Skills></Skills>
            <ProjectCard></ProjectCard>
            <Swiper></Swiper>
            <Footer></Footer>
        </div>
    );
};

export default Home;