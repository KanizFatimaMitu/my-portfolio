import React from 'react';
import Navbar from '../Shareable/Navbar';
import Footer from '../Shareable/Footer';
import Intro from '../Components/Intro';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Intro></Intro>
            <Footer></Footer>
        </div>
    );
};

export default Home;