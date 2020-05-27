import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

import logo from '../../assets/logo.png'

import Context from '../../utils/context';
import StyledMenuNav from './StyledMenuNav';

export const MenuNavigation = () => {
    const coordCircle = [0, 40]
    const { openNav, scrollToRef, accueil, quisommesnous, realisations, nosoffres, ecosysteme, notreequipe, nouscontacter } = useContext(Context)
    const [styles, setStyles] = useState({})
    const [stylesCircle, setStylesCircle] = useState([0, 0, 0, 0, 0, 0, 0])

    const handleHover = (i) => {
        let cloneStylesCircle = [...stylesCircle]
        cloneStylesCircle[i] = coordCircle[1]
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
        setStylesCircle(cloneStylesCircle)
    }
    const handleOut = (i) => {
        let cloneStylesCircle = [...stylesCircle]
        cloneStylesCircle[i] = coordCircle[0]
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
        setStylesCircle(cloneStylesCircle)
    }

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
                    <svg width="240" height="535" viewBox="0 0 13 309" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.6" cy="6.5" r="6.5" fill="url(#paint0_radial)">
                            <animateMotion id='0m' dur="1s" begin='indefinite' path="M0,0 40,0" fill="freeze"/>
                            <animateMotion id='0mbis' dur="1s" begin='indefinite' path="M40,0 0,0" fill="freeze"/>
                        </circle>
                        <circle cx="6.5" cy="53.5" r="6.5" fill="url(#paint1_radial)">
                            <animateMotion id='1m' dur="1s" begin='indefinite' path="M0,0 40,0" fill="freeze"/>
                            <animateMotion id='1mbis' dur="1s" begin='indefinite' path="M40,0 0,0" fill="freeze"/>
                        </circle>
                        <circle cx="6.5" cy="104.5" r="6.5" fill="url(#paint2_radial)">
                            <animateMotion id='2m' dur="1s" begin='indefinite' path="M0,0 40,0" fill="freeze"/>
                            <animateMotion id='2mbis' dur="1s" begin='indefinite' path="M40,0 0,0" fill="freeze"/>
                        </circle>
                        <circle cx="6.5" cy="155.5" r="6.5" fill="url(#paint3_radial)">
                            <animateMotion id='3m' dur="1s" begin='indefinite' path="M0,0 40,0" fill="freeze"/>
                            <animateMotion id='3mbis' dur="1s" begin='indefinite' path="M40,0 0,0" fill="freeze"/>
                        </circle>
                        <circle cx="6.5" cy="204.5" r="6.5" fill="url(#paint4_radial)">
                            <animateMotion id='4m' dur="1s" begin='indefinite' path="M0,0 40,0" fill="freeze"/>
                            <animateMotion id='4mbis' dur="1s" begin='indefinite' path="M40,0 0,0" fill="freeze"/>
                        </circle>
                        <circle cx="6.5" cy="253.5" r="6.5" fill="url(#paint5_radial)">
                            <animateMotion id='5m' dur="1s" begin='indefinite' path="M0,0 40,0" fill="freeze"/>
                            <animateMotion id='5mbis' dur="1s" begin='indefinite' path="M40,0 0,0" fill="freeze"/>
                        </circle>
                        <circle cx="6.5" cy="302.5" r="6.5" fill="url(#paint6_radial)">
                            <animateMotion id='6m' dur="1s" begin='indefinite' path="M0,0 40,0" fill="freeze"/>
                            <animateMotion id='6mbis' dur="1s" begin='indefinite' path="M40,0 0,0" fill="freeze"/>
                        </circle>
                        <line x1='6.4791' y1="253" x2="6.4729" y2="303" stroke="#F6F2F2" stroke-width="0.945822">
                            <animate className='5' attributeName="x1" from="6.4791" begin='indefinite' to="47" dur="1s" fill="freeze" />
                            <animate className='5bis' attributeName="x1" from="47" begin='indefinite' to="6.4791" dur="1s" fill="freeze" />
                            <animate id='6' attributeName="x2" from="6.4791" begin='indefinite' to="47" dur="1s" fill="freeze" />
                            <animate id='6bis' attributeName="x2" from="47" begin='indefinite' to="6.4791" dur="1s" fill="freeze" />
                        </line>
                        <line x1='6.4791' y1="203" x2="6.4729" y2="253" stroke="#F6F2F2" stroke-width="0.945822">
                            <animate className='4' attributeName="x1" from="6.4791" begin='indefinite' to="47" dur="1s" fill="freeze" />
                            <animate className='4bis' attributeName="x1" from="47" begin='indefinite' to="6.4791" dur="1s" fill="freeze" />
                            <animate className='5' attributeName="x2" from="6.4791" begin='indefinite' to="47" dur="1s" fill="freeze" />
                            <animate className='5bis' attributeName="x2" from="47" begin='indefinite' to="6.4791" dur="1s" fill="freeze" />
                        </line>
                        <line x1='6.4791' y1="156" x2="6.4729" y2="206" stroke="#F6F2F2" stroke-width="0.945822">
                            <animate className='3' attributeName="x1" from="6.4791" begin='indefinite' to="47" dur="1s" fill="freeze" />
                            <animate className='3bis' attributeName="x1" from="47" begin='indefinite' to="6.4791" dur="1s" fill="freeze" />
                            <animate className='4' attributeName="x2" from="6.4791" begin='indefinite' to="47" dur="1s" fill="freeze" />
                            <animate className='4bis' attributeName="x2" from="47" begin='indefinite' to="6.4791" dur="1s" fill="freeze" />
                        </line>
                        <line x1='6.4791' y1="105" x2="6.4729" y2="155" stroke="#F6F2F2" stroke-width="0.945822">
                            <animate className='2' attributeName="x1" from="6.4791" begin='indefinite' to="47" dur="1s" fill="freeze" />
                            <animate className='2bis' attributeName="x1" from="47" begin='indefinite' to="6.4791" dur="1s" fill="freeze" />
                            <animate className='3' attributeName="x2" from="6.4791" begin='indefinite' to="47" dur="1s" fill="freeze" />
                            <animate className='3bis' attributeName="x2" from="47" begin='indefinite' to="6.4791" dur="1s" fill="freeze" />
                        </line>
                        <line x1='6.4791' y1="53" x2="6.4729" y2="103" stroke="#F6F2F2" stroke-width="0.945822">
                            <animate className='1' attributeName="x1" from="6.4791" begin='indefinite' to="47" dur="1s" fill="freeze" />
                            <animate className='1bis' attributeName="x1" from="47" begin='indefinite' to="6.4791" dur="1s" fill="freeze" />
                            <animate className='2' attributeName="x2" from="6.4791" begin='indefinite' to="47" dur="1s" fill="freeze" />
                            <animate className='2bis' attributeName="x2" from="47" begin='indefinite' to="6.4791" dur="1s" fill="freeze" />
                        </line>
                        <line x1='6.4791' y1="6" x2="6.4729" y2="56" stroke="#F6F2F2" stroke-width="0.945822">
                            <animate id='0' attributeName="x1" from="6.4791" begin='indefinite' to="47" dur="1s" fill="freeze" />
                            <animate id='0bis' attributeName="x1" from="47" begin='indefinite' to="6.4791" dur="1s" fill="freeze" />
                            <animate className='1' attributeName="x2" from="6.4791" begin='indefinite' to="47" dur="1s" fill="freeze" />
                            <animate className='1bis' attributeName="x2" from="47" begin='indefinite' to="6.4791" dur="1s" fill="freeze" />
                        </line>
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