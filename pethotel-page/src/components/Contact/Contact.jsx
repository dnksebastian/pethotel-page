import { useState } from 'react';
import './Contact.css';

import { useForm } from "react-hook-form";

const Contact = () => {
    const [successObj, setSuccessObj] = useState({name: '', email: '', message: ''});
    const [showSuccess, setShowSuccess] = useState(false);


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

        // console.log(data)
        console.log('Form submitted!');

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
                        <input
                        className='contact-input'
                        id='contact-name'
                        name='contact-name'
                        type="text"
                        {...register("cName", { required: 'First name is required', minLength: {value: 3, message: 'Minimum name length is 3'}})}
                        aria-invalid={errors.cName ? "true" : "false"}
                        placeholder='John Doe'
                        />
                        {errors.cName && <p className="input-error">{errors.cName.message || 'Please enter valid name'}</p>}
                    </div>
                    <div className="input-helper">
                        <label htmlFor="contact-email" className="input-label">Email:</label>
                        <input
                        className='contact-input'
                        id='contact-email'
                        name='contact-email'
                        type="email"
                        {...register("cEmail", {required: 'Email is required', pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Please enter valid email'}})}
                        aria-invalid={errors.cEmail ? "true" : "false"}
                        placeholder='john.doe@email.com'
                        />
                        {errors.cEmail && <p className="input-error">{errors.cEmail.message || 'Please enter valid email'}</p>}
                    </div>
                    <div className="input-message-helper">
                        <label htmlFor="contact-message" className="input-label">Message:</label>
                        <textarea
                        className='msg-area'
                        name="contact-message"
                        id="contact-message"
                        rows="10"
                        placeholder='Your message...' {...register("cMessage", { required: 'Message is required', minLength: {value: 3, message: 'Minimum message length is 3' }})}
                        aria-invalid={errors.cMessage ? "true" : "false"}
                        ></textarea>
                        {errors.cMessage && <p className="input-message-error">{errors.cMessage.message || 'Please enter valid message'}</p>}
                    </div>
                    </div>
                    <button id='contact-submit'>Send!</button>
                </form>
                {showSuccess && <div className="success-view">
                    <h2 className="success-heading">Thank you{successObj.name ? `, ${successObj.name}` : ''}!</h2>
                    <p className="success-msg">We will get back to you as soon as possible!</p>
                    <button id='close-sc-btn' onClick={() => {setShowSuccess(false)}}>Ok</button>
                </div>}
            </div>
        </section>
    )
};

export default Contact