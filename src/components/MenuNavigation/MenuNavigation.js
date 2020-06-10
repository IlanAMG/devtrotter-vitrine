import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { IoIosMail } from 'react-icons/io'
import bgEco from '../../assets/bgEco.jpg'

import Context from '../../utils/context';
import StyledMenuNav from './StyledMenuNav';

export const MenuNavigation = () => {
    const { openNav, scrollToRef, accueil, quisommesnous, realisations, nosoffres, ecosysteme, notreequipe, nouscontacter } = useContext(Context)
    const [styles, setStyles] = useState({})

    const handleHover = (i) => {
        const idm = i + 'm'
        if (i > 0 && i < 6) {
            const elements = document.getElementsByClassName(i)
            Array.from(elements).forEach(element => element.beginElement())
        } else {
            const element = document.getElementById(i);
            element.beginElement();
        }
        const circle = document.getElementById(idm)
        circle.beginElement()
    }

    const handleOut = (i) => {
        const id = i + 'bis'
        const idmbis = i + 'mbis'
        if (i > 0 && i < 6) {
            const elements = document.getElementsByClassName(id)
            Array.from(elements).forEach(element => element.beginElement())
        } else {
            const element = document.getElementById(id);
            element.beginElement();
        }
        const circle = document.getElementById(idmbis)
        circle.beginElement()
    }

    useEffect(() => {
        if (openNav) {
            setStyles({ visibility: 'visible', height: '100vh', opacity: '1' })
        } else {
            setStyles({ visibility: 'hidden', height: '0px', opacity: '0' })
        }
    }, [openNav])

    return (
        <StyledMenuNav style={styles} >
            <img className='bg' alt='background' src={bgEco} />
            <div className='filtre' />
            <div className='devtrotter'>
                <h1>DEV TROT TER</h1>
            </div>
            <div className='separator'></div>
            <div className='nav'>
                <div className='container-constelnav'>
                    <svg width="240" height="535" viewBox="0 0 13 309" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.6" cy="6.5" r="6.5" fill="url(#paint0_radial)">
                            <animateMotion id='0m' dur="0.3s" begin='indefinite' path="M0,0 40,0" fill="freeze" />
                            <animateMotion id='0mbis' dur="0.3s" begin='indefinite' path="M40,0 0,0" fill="freeze" />
                        </circle>
                        <circle cx="6.5" cy="53.5" r="6.5" fill="url(#paint1_radial)">
                            <animateMotion id='1m' dur="0.3s" begin='indefinite' path="M0,0 40,0" fill="freeze" />
                            <animateMotion id='1mbis' dur="0.3s" begin='indefinite' path="M40,0 0,0" fill="freeze" />
                        </circle>
                        <circle cx="6.5" cy="104.5" r="6.5" fill="url(#paint2_radial)">
                            <animateMotion id='2m' dur="0.3s" begin='indefinite' path="M0,0 40,0" fill="freeze" />
                            <animateMotion id='2mbis' dur="0.3s" begin='indefinite' path="M40,0 0,0" fill="freeze" />
                        </circle>
                        <circle cx="6.5" cy="155.5" r="6.5" fill="url(#paint3_radial)">
                            <animateMotion id='3m' dur="0.3s" begin='indefinite' path="M0,0 40,0" fill="freeze" />
                            <animateMotion id='3mbis' dur="0.3s" begin='indefinite' path="M40,0 0,0" fill="freeze" />
                        </circle>
                        <circle cx="6.5" cy="204.5" r="6.5" fill="url(#paint4_radial)">
                            <animateMotion id='4m' dur="0.3s" begin='indefinite' path="M0,0 40,0" fill="freeze" />
                            <animateMotion id='4mbis' dur="0.3s" begin='indefinite' path="M40,0 0,0" fill="freeze" />
                        </circle>
                        <circle cx="6.5" cy="253.5" r="6.5" fill="url(#paint5_radial)">
                            <animateMotion id='5m' dur="0.3s" begin='indefinite' path="M0,0 40,0" fill="freeze" />
                            <animateMotion id='5mbis' dur="0.3s" begin='indefinite' path="M40,0 0,0" fill="freeze" />
                        </circle>
                        <circle cx="6.5" cy="302.5" r="6.5" fill="url(#paint6_radial)">
                            <animateMotion id='6m' dur="0.3s" begin='indefinite' path="M0,0 40,0" fill="freeze" />
                            <animateMotion id='6mbis' dur="0.3s" begin='indefinite' path="M40,0 0,0" fill="freeze" />
                        </circle>
                        <line x1='6.4791' y1="253" x2="6.4729" y2="303" stroke="#F6F2F2" strokeWidth="0.945822">
                            <animate className='5' attributeName="x1" from="6.4791" begin='indefinite' to="47" dur="290ms" fill="freeze" />
                            <animate className='5bis' attributeName="x1" from="47" begin='indefinite' to="6.4791" dur="290ms" fill="freeze" />
                            <animate id='6' attributeName="x2" from="6.4791" begin='indefinite' to="47" dur="290ms" fill="freeze" />
                            <animate id='6bis' attributeName="x2" from="47" begin='indefinite' to="6.4791" dur="290ms" fill="freeze" />
                        </line>
                        <line x1='6.4791' y1="203" x2="6.4729" y2="253" stroke="#F6F2F2" strokeWidth="0.945822">
                            <animate className='4' attributeName="x1" from="6.4791" begin='indefinite' to="47" dur="290ms" fill="freeze" />
                            <animate className='4bis' attributeName="x1" from="47" begin='indefinite' to="6.4791" dur="290ms" fill="freeze" />
                            <animate className='5' attributeName="x2" from="6.4791" begin='indefinite' to="47" dur="290ms" fill="freeze" />
                            <animate className='5bis' attributeName="x2" from="47" begin='indefinite' to="6.4791" dur="290ms" fill="freeze" />
                        </line>
                        <line x1='6.4791' y1="156" x2="6.4729" y2="206" stroke="#F6F2F2" strokeWidth="0.945822">
                            <animate className='3' attributeName="x1" from="6.4791" begin='indefinite' to="47" dur="290ms" fill="freeze" />
                            <animate className='3bis' attributeName="x1" from="47" begin='indefinite' to="6.4791" dur="290ms" fill="freeze" />
                            <animate className='4' attributeName="x2" from="6.4791" begin='indefinite' to="47" dur="290ms" fill="freeze" />
                            <animate className='4bis' attributeName="x2" from="47" begin='indefinite' to="6.4791" dur="290ms" fill="freeze" />
                        </line>
                        <line x1='6.4791' y1="105" x2="6.4729" y2="155" stroke="#F6F2F2" strokeWidth="0.945822">
                            <animate className='2' attributeName="x1" from="6.4791" begin='indefinite' to="47" dur="290ms" fill="freeze" />
                            <animate className='2bis' attributeName="x1" from="47" begin='indefinite' to="6.4791" dur="290ms" fill="freeze" />
                            <animate className='3' attributeName="x2" from="6.4791" begin='indefinite' to="47" dur="290ms" fill="freeze" />
                            <animate className='3bis' attributeName="x2" from="47" begin='indefinite' to="6.4791" dur="290ms" fill="freeze" />
                        </line>
                        <line x1='6.4791' y1="53" x2="6.4729" y2="103" stroke="#F6F2F2" strokeWidth="0.945822">
                            <animate className='1' attributeName="x1" from="6.4791" begin='indefinite' to="47" dur="290ms" fill="freeze" />
                            <animate className='1bis' attributeName="x1" from="47" begin='indefinite' to="6.4791" dur="290ms" fill="freeze" />
                            <animate className='2' attributeName="x2" from="6.4791" begin='indefinite' to="47" dur="290ms" fill="freeze" />
                            <animate className='2bis' attributeName="x2" from="47" begin='indefinite' to="6.4791" dur="290ms" fill="freeze" />
                        </line>
                        <line x1='6.4791' y1="6" x2="6.4729" y2="56" stroke="#F6F2F2" strokeWidth="0.945822">
                            <animate id='0' attributeName="x1" from="6.4791" begin='indefinite' to="47" dur="290ms" fill="freeze" />
                            <animate id='0bis' attributeName="x1" from="47" begin='indefinite' to="6.4791" dur="290ms" fill="freeze" />
                            <animate className='1' attributeName="x2" from="6.4791" begin='indefinite' to="47" dur="290ms" fill="freeze" />
                            <animate className='1bis' attributeName="x2" from="47" begin='indefinite' to="6.4791" dur="290ms" fill="freeze" />
                        </line>
                        <defs>
                            <radialGradient id="paint0_radialb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 6.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stopColor="white" />
                                <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint1_radialb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 53.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stopColor="white" />
                                <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint2_radialb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 104.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stopColor="white" />
                                <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint3_radialb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 155.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stopColor="white" />
                                <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint4_radialb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 204.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stopColor="white" />
                                <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint5_radialb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 253.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stopColor="white" />
                                <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint6_radialb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 302.5) rotate(90) scale(6.5)">
                                <stop offset="0.427083" stopColor="white" />
                                <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <ul>
                    <li onMouseOver={() => handleHover(0)} onMouseOut={() => handleOut(0)} onClick={() => scrollToRef(accueil)} >ACCUEIL</li>
                    <li onMouseOver={() => handleHover(1)} onMouseOut={() => handleOut(1)} onClick={() => scrollToRef(quisommesnous)} >QUI SOMMES-NOUS ?</li>
                    <li onMouseOver={() => handleHover(2)} onMouseOut={() => handleOut(2)} onClick={() => scrollToRef(realisations)} >RÉALISATIONS</li>
                    <li onMouseOver={() => handleHover(3)} onMouseOut={() => handleOut(3)} onClick={() => scrollToRef(nosoffres)} >NOS OFFRES</li>
                    <li onMouseOver={() => handleHover(4)} onMouseOut={() => handleOut(4)} onClick={() => scrollToRef(ecosysteme)} >ECOSYSTÈME</li>
                    <li onMouseOver={() => handleHover(5)} onMouseOut={() => handleOut(5)} onClick={() => scrollToRef(notreequipe)} >NOTRE ÉQUIPE</li>
                    <li onMouseOver={() => handleHover(6)} onMouseOut={() => handleOut(6)} onClick={() => scrollToRef(nouscontacter)} >NOUS CONTACTER</li>
                </ul>
            </div>
            <div className='separator'></div>
            <div className='wrapper-logo'>
                <svg className='logo' viewBox="0 0 74 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M55.5042 21.545L37 11.2835L55.5042 0V21.545Z" fill="#7EC4A4" />
                    <path d="M55.5042 43.0899L37 32.8284L55.5042 21.5449V43.0899Z" fill="#277E5E" />
                    <path d="M37 54.3653L18.5042 44.1038L37 32.8203V54.3653Z" fill="#09B5D6" />
                    <path d="M18.5042 65.6568L0 55.3953L18.5042 44.1118V65.6568Z" fill="#0D95B0" />
                    <path d="M55.5042 107.675L37 97.4217L55.5042 86.1299V107.675Z" fill="#753E90" />
                    <path d="M74 96.3912L55.5042 86.1297L74 74.8462V96.3912Z" fill="#484999" />
                    <path d="M37 119L18.5042 108.739L37 97.4468V119Z" fill="#492778" />
                    <path d="M18.5042 108.755L0 98.4939L18.5042 87.2104V108.755Z" fill="#3E3680" />
                    <path d="M18.5042 87.2101L0 76.9486L18.5042 65.6567V87.2101Z" fill="#56519E" />
                    <path d="M37 11.2749L55.5042 21.5364L37 32.8199V11.2749Z" fill="#48B48C" />
                    <path d="M37 32.8203L55.5042 43.0818L37 54.3653V32.8203Z" fill="#3EBEE4" />
                    <path d="M18.5042 44.1118L37 54.3733L18.5042 65.6568V44.1118Z" fill="#52C2EA" />
                    <path d="M0 76.9487L18.5042 87.2102L0 98.4937V76.9487Z" fill="#5E5CA6" />
                    <path d="M37 97.4468L55.5042 107.717L37 119V97.4468Z" fill="#875BA2" />
                    <path d="M18.5042 87.2104L37 97.472L18.5042 108.755V87.2104Z" fill="#6E56A0" />
                    <path d="M55.5042 86.1299L74 96.3914L55.5042 107.675V86.1299Z" fill="#6F6FB2" />
                    <path d="M55.5042 64.5845L74 74.846L55.5042 86.1294V64.5845Z" fill="#6E92C7" />
                    <path d="M0 55.4038L18.5042 65.6653L0 76.9488V55.4038Z" fill="#6F81BF" />
                </svg>
                <div className='container-social'>
                    <a name='twitter' rel="noopener noreferrer" href='https://twitter.com/DevTrotter_Pro' target='_blank' ><AiOutlineTwitter className='icon' /></a>
                    <a name='youtube' rel="noopener noreferrer" href='https://www.youtube.com/channel/UCHuGcYX0jsbCA0lzFj1DmbA' target='_blank' ><AiFillYoutube className='icon' /></a>
                    <a name='instagram' rel="noopener noreferrer" href='https://www.instagram.com/dev.trotter/' target='_blank' ><AiFillInstagram className='icon' /></a>
                    <a name='mail' href='mailto:devtrotter.info@gmail.com'><IoIosMail className='icon' /></a>
                </div>
            </div>
        </StyledMenuNav>
    )
}