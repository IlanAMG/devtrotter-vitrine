import React, { useContext, useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import '../styles/App.css';

import Context from '../utils/context';
import StyledPacks from '../styles/StyledPacks';
import { FormContact } from '../components/FormContact/FormContact';
import bgPacks from '../assets/bgPacks.jpg'

export const Packs = () => {
    const { setLocation } = useContext(Context)
    const location = useLocation()
    const [hover, setHover] = useState([false, true, false])
    const [styles, setStyles] = useState(null)
    const [openForm, setOpenForm] = useState(false)
    const [valueForm, setValueForm] = useState('')

    const handleHover = (i) => {
        let cloneHover = [...hover]
        for (let j = 0; j <= cloneHover.length - 1; j++) {
            cloneHover[j] = false
        }
        cloneHover[i] = true
        setHover(cloneHover)
        if (i === 0) {
            setStyles({width: '33%'})
        } else if (i === 1) {
            setStyles({width: '66%'})
        } else if (i === 2) {
            setStyles({width: '99.5%'})
        } 
    }

    const handleOpenForm = (i) => {
        if (i === 0) {
            setValueForm('Bonjour, je suis intéressé par le pack Essentiel...')
        }
        if (i === 1) {
            setValueForm('Bonjour, je suis intéressé par le pack Standard...')
        }
        if (i === 2) {
            setValueForm('Bonjour, je suis intéressé par le pack Complet...')
        }
        setOpenForm(!openForm)
    }

    useEffect(() => {
        setLocation(location.pathname)
    }, [])

    return (
        <StyledPacks>
            <Link to='/'>
                <svg width="21" height="31" viewBox="0 0 21 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0571 1.00001L1 15.5L20.0571 30" stroke="#F0F0F0"/>
                </svg>
            </Link>
            <img className='bg' alt='background' src={bgPacks} />
            <div className='container-h1packs'>
                <h1>NOS PACKS</h1>
            </div>
            <section className='section-videos'>
                    <video onClick={() => handleOpenForm(0)} onMouseOver={() => handleHover(0)} className={hover[0] && 'middle'} autoPlay loop muted playsinline>
                        <source data-src='/videos/ESSENTIAL.mp4' type='video/mp4' src='/videos/ESSENTIAL.mp4' />
                    </video>
                    <video onClick={() => handleOpenForm(1)} onMouseOver={() => handleHover(1)} className={hover[1] && 'middle'} autoPlay loop muted playsinline>
                        <source data-src='/videos/STANDARD.mp4' type='video/mp4' src='/videos/STANDARD.mp4' />
                    </video>
                    <video onClick={() => handleOpenForm(2)} onMouseOver={() => handleHover(2)} className={hover[2] && 'middle'} autoPlay loop muted playsinline>
                        <source data-src='/videos/COMPLET.mp4' type='video/mp4' src='/videos/COMPLET.mp4' />
                    </video>
                <div className='bar-progress'><div style={styles} className='progress'/></div>
            </section>
            <button className='btn-packs'style={openForm ? {right: '720px', transform: 'translate(180deg)'} : null} onClick={handleOpenForm}>
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
                {openForm && <FormContact title={'DEMANDER UN DEVIS'} value={valueForm} />}
            </section>
        </StyledPacks>
    )
}
