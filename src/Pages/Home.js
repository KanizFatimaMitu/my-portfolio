import React from 'react';
import Navbar from '../Shareable/Navbar';
import Footer from '../Shareable/Footer';
import Intro from '../Components/Intro';
import Skills from '../Components/Skills';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Intro></Intro>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;