import React, { useEffect, useState } from 'react';
import Navbar from '../Shareable/Navbar';
import Footer from '../Shareable/Footer';

const Projects = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [])

    return (
        <div>
            <Navbar></Navbar>
            {
                posts.map(post => <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.body}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Projects;