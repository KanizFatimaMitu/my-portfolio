import React from 'react';

const Skills = () => {
    return (
        <div className='grid grid-cols-1 gap-4 my-4 lg:grid-cols-6 gap-6 p-2'>
            <button className="btn btn-active btn-primary">HTML</button>
            <button className="btn btn-active btn-primary">CSS</button>
            <button className="btn btn-active btn-primary">JavaScript</button>
            <button className="btn btn-active btn-primary">React</button>
            <button className="btn btn-active btn-primary">Express.js</button>
            <button className="btn btn-active btn-primary">MongoDB</button>
        </div>
    );
};

export default Skills;