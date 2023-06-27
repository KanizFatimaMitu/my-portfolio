import React from 'react';
import kaniz from '../Assests/kaniz.jpg'
import { Link } from 'react-router-dom';

const Dialog = () => {
    return (

        <div>
            < button  onClick={() => window.my_modal_5.showModal()}>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar" >
                    <div className=" rounded-full">
                        <img src={kaniz} alt='' />
                    </div>
                </label>
            </button >
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Assalamualaikum !!</h3>
                    <p className="py-2">"My name is "Kaniz Fatima".I am a MERN stack web developer. I love to use my creativity and make something new. That's why I love to play with code. Over the last year, I gather knowledge in various parts of web development by myself. My ultimate goal is to become an awesome full-stack web developer who can develop beautiful UIs and also can handle the back-end smoothly."</p>
                    <img src={kaniz} alt='' />
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn"><Link to='/resume'>Resume</Link></button>
                        <button className="btn"><a target="_blank" href="https://www.linkedin.com/in/kaniz-mitu/">linkedin</a></button>
                        <button className="btn"><a target="_blank" href="https://www.linkedin.com/in/kaniz-mitu/">Github</a></button>
                    </div>
                </form>
            </dialog>
        </div>

    );
};

export default Dialog;