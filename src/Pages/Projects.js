import React, { useEffect, useState } from 'react';
import Post from '../Components/Post';

const Projects = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [])

    return (
        <div>
           
            {
                posts.map(post =>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
                        <Post
                            post={post}
                            key={post.id}
                        ></Post>
                    </div>)
            }
           
        </div>
    );
};

export default Projects;