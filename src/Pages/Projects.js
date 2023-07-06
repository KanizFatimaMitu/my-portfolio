import React, { useEffect, useState } from 'react';
import Post from '../Components/Post';


const Projects = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?limit=50")
            .then(res => res.json())
            .then(data => setPosts(data))

    }, [])

    const pageHandler = (select) => {
        if (select >= 1
            && select <= posts.length / 10
            && select !== page)
            setPage(select)
    }

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>

                {
                    posts.slice(page * 10 - 10, page * 10).map(post =>

                        <Post
                            post={post}
                            key={post.id}
                        ></Post>
                    )
                }


            </div>
            <div>
                {
                    posts.length > 0 && <div class="join">
                        <button
                            onClick={() => pageHandler(page - 1)}
                            class="join-item btn">«</button>
                        {
                            [...Array(posts.length / 10)].map((_, i) => {
                                return <button
                                    onClick={() => pageHandler(i + 1)}
                                    className={page === (i + 1) ? "join-item btn " : "join-item btn btn-active"}>
                                    Page {i + 1}
                                </button>
                            })
                        }
                        <button
                            onClick={() => pageHandler(page + 1)}
                            class="join-item btn">»</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Projects;