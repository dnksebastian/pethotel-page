import { useState } from 'react';
import './Contact.css';

import { useForm } from "react-hook-form";

const Contact = () => {
    const [successObj, setSuccessObj] = useState({name: '', email: '', message: ''});
    const [showSuccess, setShowSuccess] = useState(true);


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setShowSuccess(true);

        const newMsgObj = {
            name: data.cName,
            email: data.cEmail,
            message: data.cMessage
        }

        setSuccessObj(newMsgObj)

        setTimeout(() => {
            setShowSuccess(false)
            setSuccessObj({name: '', email: '', message: ''})
        }, 5000);

        console.log(data)
        reset()
    };

    return (
        <section id='contact'>
            <div className="contact-desc-wrap">
                <h2 className="contact-heading">Contact us!</h2>
                <p className="contact-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magnam nostrum labore voluptate ducimus rem amet dicta tempora doloremque veniam?</p>
            </div>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)} className='contact-form'>
                    <div className="inputs-wrap">
                    <div className="input-helper">
                        <label htmlFor="contact-name" className="input-label">Name:</label>
                        <input id='contact-name' name='contact-name' type="text" {...register("cName", { required: true })} />
                        {errors.cName && <p className="input-error">error</p>}
                    </div>
                    <div className="input-helper">
                        <label htmlFor="contact-email" className="input-label">Email:</label>
                        <input id='contact-email' name='contact-email' type="email" {...register("cEmail", { required: true })}/>
                        {errors.cEmail && <p className="input-error">error</p>}
                    </div>
                    <div className="input-message-helper">
                        <label htmlFor="contact-message" className="input-label">Message:</label>
                        <textarea className='msg-area' name="contact-message" id="contact-message" cols="30" rows="10" placeholder='Your message...' {...register("cMessage", { required: true })}></textarea>
                        {errors.cMessage && <p className="input-message-error">error</p>}
                    </div>
                    </div>
                    <button id='contact-submit'>Send!</button>
                </form>
                {showSuccess && <div className="success-view">
                    <h2 className="success-heading">Thank you{successObj.name ? `, ${successObj.name}` : ''}!</h2>
                    <p className="success-msg">We will get back to you ass son as possible!</p>
                    <button onClick={() => {setShowSuccess(false)}}>Ok!</button>
                </div>}
            </div>
        </section>
    )
};

export default Contact