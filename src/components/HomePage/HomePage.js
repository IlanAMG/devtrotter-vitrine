//librairies externes
import React from 'react'

//styles
import StyledHomePage from './StyledHomePage';
//components
import { BtnMenu } from '../BtnMenu/BtnMenu'
//images

export const HomePage = () => {
    return (
        <StyledHomePage>
            <img className='bg' alt='background' src='https://i.goopics.net/n4PP1.jpg' />
            <BtnMenu />
            <span>FR</span>
            <div className='container-constel'>
                    <svg width="90" height="400" viewBox="0 0 13 309" fill="none" xmlns="http://www.w3.org/2000/svg">
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
