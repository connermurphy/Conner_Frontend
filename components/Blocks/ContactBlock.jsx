import axios from 'axios';
import React, { useState } from 'react';
import SocialList from '../Items/SocialList';

function ContactBlock(props) {

    const [name, setName] = useState('');
    const [nameValid, setNameValid] = useState(false);

    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState('');

    const [company, setCompany] = useState('');
    const [companyValid, setCompanyValid] = useState(true);

    const [service, setService] = useState('');
    const [serviceValid, setServiceValid] = useState(false);

    const [message, setMessage] = useState('');
    const [messageValid, setMessageValid] = useState(false);

    const [hasSubmitted, setHasSubmitted] = useState(false);

    const [statusMsg, setStatusMsg] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);

        if (e.target.value.trim() == "" || e.target.value.length == 0) {
            setNameValid(false);
        } else {
            setNameValid(true);
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);

        if (e.target.value.trim() == "" || e.target.value.length == 0 || !e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setEmailValid(false);
        } else {
            setEmailValid(true);
        }
    }
    
    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    }

    const handleServiceChange = (e) => {
        setService(e.target.value);

        if (e.target.value.trim() == "" || e.target.value.length == 0) {
            setServiceValid(false);
        } else {
            setServiceValid(true);
        }
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);

        if (e.target.value.trim() == "" || e.target.value.length == 0) {
            setMessageValid(false);
        } else {
            setMessageValid(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setHasSubmitted(true);
        setStatusMsg('')

        if (nameValid && emailValid && serviceValid && messageValid) {
         
            axios('/api/contact', {
                data: {
                    'name': name,
                    'email': email,
                    'company': company,
                    'service': service,
                    'message': message
                },
                method: 'POST'
            }).then(res => {

                setHasSubmitted(false);

                setName('');
                setNameValid(false);

                setEmail('');
                setEmailValid(false);

                setCompany('');
                setCompanyValid(false);
                
                setService('');
                setServiceValid(false)

                setMessage('');
                setMessageValid(false);  

                setStatusMsg('Email sent. I\'ll be in touch');
                        

            }).catch(err => {                
                console.log(err)
                setStatusMsg('Error. Please try again later!');
            });

        }
    }

    return (
        <section id={props.id}>
            <div className='container tight flex flex-row flex-wrap items-start'>
                <div className='contact-block__form w-full md:w-1/2 lg:w-2/3 md:pr-6 lg:pr-12 xl:pr-16 pb-8 md:pb-0'>
                    <form onSubmit={handleSubmit} className='list'>
                        <div className='input-group'>
                            <div className={`inner  ${!nameValid && hasSubmitted ? 'invalid' : ''} ${name.length && nameValid ? 'valid' : ''}`}>
                                <div className='input-group__header'>
                                    <label for='full_name'>What&apos;s your name</label>
                                </div>
                                <div className='input-group__field'>
                                    <input type='text' name='full_name' id='full_name' placeholder='John Doe' value={name} onChange={handleNameChange} />
                                    <ul className='input-group__validation'>
                                        <li>Please enter your name!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='input-group'>
                            <div className={`inner  ${!emailValid && hasSubmitted ? 'invalid' : ''} ${email.length && emailValid ? 'valid' : ''}`}>
                                <div className='input-group__header'>
                                    <label for='email'>What&apos;s your email</label>
                                </div>
                                <div className='input-group__field'>
                                    <input type='email' name='email' id='email' placeholder='johndoe@mail.com' value={email} onChange={handleEmailChange} />
                                    <ul className='input-group__validation'>
                                        <li>Please enter your email!</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='input-group'>
                            <div className={`inner`}>
                                <div className='input-group__header'>
                                    <label for='company'>What&apos;s the name of your organisation</label>
                                </div>
                                <div className='input-group__field'>
                                    <input type='text' name='company' id='company' value={company} onChange={handleCompanyChange} placeholder='XYZ Holdings' />                                
                                </div>
                            </div>
                        </div>
                        <div className='input-group'>
                            <div className={`inner  ${!serviceValid && hasSubmitted ? 'invalid' : ''} ${service.length && serviceValid ? 'valid' : ''}`}>
                                <div className='input-group__header'>
                                    <label for='service'>What serivce are you looking for?</label>
                                </div>
                                <div className='input-group__field'>
                                    <input type='text' name='service' id='service' placeholder='Web design, Web development, Ecommerce' value={service} onChange={handleServiceChange} />
                                    <ul className='input-group__validation'>
                                        <li>
                                            Please enter the required services!
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='input-group'>
                            <div className={`inner  ${!messageValid && hasSubmitted ? 'invalid' : ''} ${message.length && messageValid ? 'valid' : ''}`}>
                                <div className='input-group__header'>
                                    <label for='message'>Your message</label>
                                </div>
                                <div className='input-group__field'>
                                    <textarea name='message' id='message' placeholder='I am looking for my website to be re-designed...' value={message} onChange={handleMessageChange}></textarea>
                                    <ul className='input-group__validation'>
                                        <li>
                                            Please enter your message!
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='input-group submit'>
                            <div className={`inner`}>
                                <p className={`input-group__status text-left pb-6 text-md ${statusMsg.length ? 'block' : 'hidden'}`}>{statusMsg}</p>                           
                                <div className='input-group__field'>
                                    <button type='submit' class='btn btn__primary'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='contact-block__info w-full md:sticky md:top-[20px] md:w-1/2 lg:w-1/3 md:pl-6 lg:pl-12 flex flex-wrap items-start md:justify-end'>                    
                    {
                        props.Contacts != null && props.Contacts.length ?
                        <div className='w-full pb-6 lg:pb-10'>
                            <h3 className='text-lg pb-2'>Contact Details</h3>
                            <ul>
                                {
                                    props.Contacts.map((x, index) => {
                                        return(
                                            <li key={index}>
                                                {x.Label}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div> : <></>                
                    }
                    {
                        props.Socials != null ? 
                        <div className='w-full'>
                            <h3 className='text-lg pb-2'>Socials</h3>
                            <SocialList socials={props.Socials} animate={true} />
                        </div> : <></>
                    }
                </div>
            </div>
        </section>
    );
}

export default ContactBlock;