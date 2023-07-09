import React, { useState } from 'react';

const ContactMe = () => {
    const [email, setEmail] = useState('');
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            text
        }
        console.log(data)
        fetch('http://localhost:5000/text', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">let me know your query here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="input input-bordered"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">text</span>
                                </label>
                                {/* <input type="text" placeholder="Type here...." className="textarea" /> */}
                                <textarea
                                    className="textarea"
                                    placeholder="Type here...."
                                    onChange={(e) => setText(e.target.value)}
                                ></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"
                                    type="submit"
                                >Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;