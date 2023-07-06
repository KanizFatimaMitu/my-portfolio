import React from 'react';

const Post = ({ post }) => {
    return (
        <div >
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={post.thumbnailUrl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{(post.title).slice(0,25)}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            </div>
            );
};

            export default Post;