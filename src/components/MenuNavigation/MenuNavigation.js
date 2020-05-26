import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

import logo from '../../assets/logo.png'

import Context from '../../utils/context';
import StyledMenuNav from './StyledMenuNav';

export const MenuNavigation = () => {
    const { openNav, scrollToRef, accueil, quisommesnous, realisations, nosoffres, ecosysteme, notreequipe, nouscontacter } = useContext(Context)
    const [styles, setStyles] = useState({})

    useEffect(() => {
        if (openNav) {
            setStyles({ visibility: 'visible', height: '100vh', opacity: '1' })
            setTimeout(() => {
                document.body.style.overflow = 'hidden';
                document.body.style.height = '100vh';
            }, 1000)
        } else {
            setStyles({ visibility: 'hidden', height: '0px', opacity: '0' })
            document.body.style.overflow = 'unset';
            document.body.style.height = 'auto';
        }
    }, [openNav])
    return (
        <StyledMenuNav style={styles} >
            <img className='bg' alt='background' src='https://i.goopics.net/d37V3.jpg' />
            <div className='filtre' />
            <div className='devtrotter'>
                <h1>DEV TROT TER</h1>
            </div>
            <div className='separator'></div>
            <div className='nav'>
                <div className='container-constel'>
                    <svg width="120" height="535" viewBox="0 0 13 309" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="url(#paint0_radial)" />
                        <circle cx="6.5" cy="53.5" r="6.5" fill="url(#paint1_radial)" />
                        <circle cx="6.5" cy="104.5" r="6.5" fill="url(#paint2_radial)" />
                        <circle cx="6.5" cy="155.5" r="6.5" fill="url(#paint3_radial)" />
                        <circle cx="6.5" cy="204.5" r="6.5" fill="url(#paint4_radial)" />
                        <circle cx="6.5" cy="253.5" r="6.5" fill="url(#paint5_radial)" />
                        <circle cx="6.5" cy="302.5" r="6.5" fill="url(#paint6_radial)" />
                        <line x1="6.47291" y1="253" x2="6.4729" y2="303" stroke="#F6F2F2" stroke-width="0.945822" />
                        <line x1="6.47291" y1="203" x2="6.4729" y2="253" stroke="#F6F2F2" stroke-width="0.945822" />
                        <line x1="6.47291" y1="156" x2="6.4729" y2="206" stroke="#F6F2F2" stroke-width="0.945822" />
                        <line x1="6.47291" y1="105" x2="6.4729" y2="155" stroke="#F6F2F2" stroke-width="0.945822" />
                        <line x1="6.47291" y1="53" x2="6.4729" y2="103" stroke="#F6F2F2" stroke-width="0.945822" />
                        <line x1="6.47291" y1="6" x2="6.4729" y2="56" stroke="#F6F2F2" stroke-width="0.945822" />
                        <defs>
                            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 6.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 53.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 104.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 155.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 204.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 253.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                            <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 302.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stop-color="white" />
                                <stop offset="1" stop-color="#F6F2F2" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <ul>
                    <li onClick={() => scrollToRef(accueil)} >ACCUEIL</li>
                    <li onClick={() => scrollToRef(quisommesnous)} >QUI SOMMES-NOUS ?</li>
                    <li onClick={() => scrollToRef(realisations)} >RÉALISATIONS</li>
                    <li onClick={() => scrollToRef(nosoffres)} >NOS OFFRES</li>
                    <li onClick={() => scrollToRef(ecosysteme)} >ECOSYSTÈME</li>
                    <li onClick={() => scrollToRef(notreequipe)} >NOTRE ÉQUIPE</li>
                    <li onClick={() => scrollToRef(nouscontacter)} >NOUS CONTACTER</li>
                </ul>
            </div>
            <div className='separator'></div>
            <div className='wrapper-logo'>
                <img className='logo' alt='logo' src={logo} />
                <div className='container-social'>
                    <a rel="noopener noreferrer" href='https://twitter.com/DevTrotter_Pro' target='_blank' ><AiOutlineTwitter className='icon' /></a>
                    <a rel="noopener noreferrer" href='https://www.youtube.com/channel/UCHuGcYX0jsbCA0lzFj1DmbA' target='_blank' ><AiFillYoutube className='icon' /></a>
                    <a rel="noopener noreferrer" href='https://www.instagram.com/dev.trotter/' target='_blank' ><AiFillInstagram className='icon' /></a>
                </div>
            </div>
        </StyledMenuNav>
    )
}