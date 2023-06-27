import React from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <div>
            <h1>here will be my Resume</h1>
            <button className="btn"><Link to='/'>Back to portfolio</Link></button>
        </div>
    );
};

export default Resume;