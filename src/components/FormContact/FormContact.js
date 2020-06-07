import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import StyledFormContact from './StyledFormContact'

export const FormContact = ({ title, value }) => {
    const initial_form = {
        user_name: "",
        user_email: "",
        user_tel: "",
        message: ""
    }

    const [state, setState] = useState(initial_form)

    var service_id = "devtrotter_info_gmail_com";
    var template_id = "template_18JlHl4M_clone";
    var user_id = "user_mIxa9YDPzwWE77Da7IeXu";

    const sendEmail = async (e) => {
        e.preventDefault();
        await emailjs.send(service_id, template_id, state, user_id)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setState(initial_form)
    }

    useEffect(() => {
        setState({
            ...state,
            message: value
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])
    return (
        <StyledFormContact>
            <div className='container-h1'>
                <h1>{title}</h1>
            </div>
            <form onSubmit={sendEmail}>
                <div className='container-input'>
                    <label htmlFor="user_name">NOM</label>
                    <input id='user_name' onChange={e => setState({ ...state, user_name: e.target.value })} value={state.user_name} type="text" name="user_name" required />
                    <label htmlFor="user_email">E-MAIL</label>
                    <input id='user_email' onChange={e => setState({ ...state, user_email: e.target.value })} value={state.user_email} type="email" name="user_email" required />
                    <label htmlFor="user_tel">TÉLÉPHONE</label>
                    <input id='user_tel' onChange={e => setState({ ...state, user_tel: e.target.value })} value={state.user_tel} type="tel" name="user_tel" />
                </div>
                <label htmlFor="message">MESSAGE</label>
                <textarea id='message' onChange={e => setState({ ...state, message: e.target.value })} value={state.message} name="message" cols="30" rows="10" required></textarea>
                <div className='wrapper-btn-form'>
                    <button name='send' className='btn'>ENVOYER</button>
                </div>
            </form>
        </StyledFormContact>
    )
}
