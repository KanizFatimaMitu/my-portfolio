import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
    const [data, setData] = useState([]);

     useEffect(()=> {
        fetch('http://localhost:5000/projects')
        .then(res =>res.json())
        .then(data => setData(data))
     },[])

    return (
        <div>
            <h1>Resume</h1>
            <button className="btn"><Link to='/'>Back to portfolio</Link></button>
            <h1>
                total data : {data.length}
            </h1>

        </div>
    );
};

export default Resume;