import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import '../styles/App.css';

import Context from '../utils/context';
import StyledPacks from '../styles/StyledPacks';
import { BtnMenu } from '../components/BtnMenu/BtnMenu';
import { MenuNavigation } from '../components/MenuNavigation/MenuNavigation';

export const Packs = () => {
    const { setLocation } = useContext(Context)
    const location = useLocation()

    useEffect(() => {
        setLocation(location.pathname)
    }, [])

    return (
        <StyledPacks>
            <BtnMenu />
            <MenuNavigation />
            <img alt='background' src='https://i.goopics.net/GKkNa.jpg' />
            <div className='container-h1'>
                <h1>NOS PACKS</h1>
            </div>
            <section className='section-videos'>
                    <video autoPlay loop muted playsinline>
                        <source data-src='/videos/ESSENTIAL.mp4' type='video/mp4' src='/videos/ESSENTIAL.mp4' />
                    </video>
                    <video className='middle' autoPlay loop muted playsinline>
                        <source data-src='/videos/STANDARD.mp4' type='video/mp4' src='/videos/STANDARD.mp4' />
                    </video>
                    <video autoPlay loop muted playsinline>
                        <source data-src='/videos/COMPLET.mp4' type='video/mp4' src='/videos/COMPLET.mp4' />
                    </video>
            </section>
            <section className='section-form'>

            </section>
        </StyledPacks>
    )
}
