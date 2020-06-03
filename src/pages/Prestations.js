import React, { useState, useContext, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom';

import Context from '../utils/context';
import StyledPrestations from '../styles/StyledPrestations';

export const Prestations = () => {
    const { setLocation } = useContext(Context)
    const [openForm, setOpenForm] = useState(false)
    const location = useLocation()

    const handleOpenForm = () => {
        setOpenForm(!openForm)
    }
    
    useEffect(() => {
        console.log('options', location.pathname)
        setLocation(location.pathname)
    }, [])

    return (
        <StyledPrestations>
            <Link to='/'>
                <svg width="21" height="31" viewBox="0 0 21 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0571 1.00001L1 15.5L20.0571 30" stroke="#F0F0F0"/>
                </svg>
            </Link>
            <img className='bg' alt='background' src='https://i.goopics.net/GKkNa.jpg' />
            <div className='container-h1'>
                <h1>NOS PRESTATIONS</h1>
            </div>
            <button style={openForm ? {right: '720px', transform: 'translate(180deg)'} : null} onClick={handleOpenForm}>
                {
                    openForm ?
                        <svg width="21" height="31" viewBox="0 0 21 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.400004 0.999998L20 15.5L0.4 30" stroke="#F0F0F0"/>
                        </svg>
                    :
                        <svg width="21" height="31" viewBox="0 0 21 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0571 1.00001L1 15.5L20.0571 30" stroke="#F0F0F0"/>
                        </svg>
                }
            </button>
            <section style={openForm ? {width: '720px'} : null} className='section-form'>

            </section>
        </StyledPrestations>
    )
}
