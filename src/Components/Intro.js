import React from 'react';

const Intro = () => {
    return (
        <div >
            <div className="hero h-[75vh] bg-base-200">
                <div className="hero-content text-center">
                    <div
                        className="max-w-md"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">"My name is "Kaniz Fatima".I am a MERN stack web developer. I love to use my creativity and make something new. That's why I love to play with code. Over the last year, I gather knowledge in various parts of web development by myself. My ultimate goal is to become an awesome full-stack web developer who can develop beautiful UIs and also can handle the back-end smoothly."</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;