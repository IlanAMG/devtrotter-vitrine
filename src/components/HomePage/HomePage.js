//librairies externes
import React from 'react'

//styles
import StyledHomePage from './StyledHomePage';
//components

//images
import logo from '../../assets/logo.png'

export const HomePage = () => {
    return (
        <StyledHomePage>
            <img alt='background' src='https://i.goopics.net/n4PP1.jpg' />
            <img className='logo' alt='logo' src={logo} />
            <span>FR</span>
            <section className='container-titres'>
                <div className='wrapper-h3'>
                    <h3>VOTRE VISION ÉVEILLE NOTRE SAVOIR-FAIRE</h3>
                    <div className='separator-h3' />
                </div>
                <h1>DEVTROTTER STUDIO</h1>
                <h2>DÉVELOPPEMENT WEB & MOBILE | UX / UI DESIGN</h2>
            </section>
        </StyledHomePage>
    )
}
