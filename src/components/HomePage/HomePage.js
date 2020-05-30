//librairies externes
import React, { useContext } from 'react'
import ReactPlayer from 'react-player'

//utils
import Context from '../../utils/context';

//styles
import StyledHomePage from './StyledHomePage';
//components
import { BtnMenu } from '../BtnMenu/BtnMenu'
//images

export const HomePage = () => {
    const { accueil, quisommesnous, realisations, nosoffres, ecosysteme, notreequipe, nouscontacter, scrollToRef } = useContext(Context)

    return (
        <StyledHomePage ref={accueil} >
            <ReactPlayer className='bg' width='130%' height='115%' url="https://www.youtube.com/embed/WCedDOwe85E" playing={true} loop={true} controls={false} muted={true}
                config={{
                    youtube: {
                        playerVars: { showinfo: 1 }
                    },
                }}
            />
            <BtnMenu />
            <span>FR</span>
            <div className='container-constel'>
                <svg width="90" height="400" viewBox="0 0 13 309" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle onClick={() => scrollToRef(accueil)} cx="6.5" cy="6.5" r="50" fill="url(#paint0_radial)">
                        <animateMotion id='1anim1' dur="2s" begin='0s; 1anim2.end' path="M-15,0 20,0" fill="freeze" />
                        <animateMotion id='1anim2' dur="2.3s" begin='1anim1.end' path="M20,0 -15,0" fill="freeze" />
                    </circle>
                    <circle onClick={() => scrollToRef(quisommesnous)} cx="6.5" cy="53.5" r="6.5" fill="url(#paint1_radial)">
                        <animateMotion id='2anim1' dur="2.3s" begin='0.76s; 2anim2.end' path="M20,0 -20,0" fill="freeze" />
                        <animateMotion id='2anim2' dur="2s" begin='2anim1.end' path="M-20,0 20,0" fill="freeze" />
                    </circle>
                    <circle onClick={() => scrollToRef(realisations)} cx="6.5" cy="104.5" r="6.5" fill="url(#paint2_radial)">
                        <animateMotion id='3anim1' dur="2s" begin='0.98s; 3anim2.end' path="M-20,0 20,0" fill="freeze" />
                        <animateMotion id='3anim2' dur="2s" begin='3anim1.end' path="M20,0 -20,0" fill="freeze" />
                    </circle>
                    <circle onClick={() => scrollToRef(nosoffres)} cx="6.5" cy="155.5" r="6.5" fill="url(#paint3_radial)">
                        <animateMotion id='4anim1' dur="2.3s" begin='0.36s; 4anim2.end' path="M15,0 -20,0" fill="freeze" />
                        <animateMotion id='4anim2' dur="2s" begin='4anim1.end' path="M-20,0 15,0" fill="freeze" />
                    </circle>
                    <circle cx="6.5" cy="204.5" r="6.5" fill="url(#paint4_radial)">
                        <animateMotion id='5anim1' dur="2s" begin='0.24s; 5anim2.end' path="M-20,0 20,0" fill="freeze" />
                        <animateMotion id='5anim2' dur="2s" begin='5anim1.end' path="M20,0 -20,0" fill="freeze" />
                    </circle>
                    <circle cx="6.5" cy="253.5" r="6.5" fill="url(#paint5_radial)">
                        <animateMotion id='6anim1' dur="2s" begin='0.2s; 6anim2.end' path="M25,0 -20,0" fill="freeze" />
                        <animateMotion id='6anim2' dur="2.3s" begin='6anim1.end' path="M-20,0 25,0" fill="freeze" />
                    </circle>
                    <circle cx="6.5" cy="302.5" r="6.5" fill="url(#paint6_radial)">
                        <animateMotion id='7anim1' dur="2.3s" begin='0.3s; 7anim2.end' path="M-15,0 25,0" fill="freeze" />
                        <animateMotion id='7anim2' dur="2.3s" begin='7anim1.end' path="M25,0 -15,0" fill="freeze" />
                    </circle>
                    <line x1="6.47291" y1="253" x2="6.4729" y2="303" stroke="#F6F2F2" stroke-width="0.945822">
                        <animate id='6anim1b' attributeName='x1' dur="2s" begin='0.2s; 6anim2b.end' from='32' to='-14' fill="freeze" />
                        <animate id='6anim2b' attributeName='x1' dur="2.3s" begin='6anim1b.end' from='-14' to='32' fill="freeze" />
                        <animate id='6anim1bb' attributeName='x2' dur="2.3s" begin='0.3s; 6anim2bb.end' from='-7' to='32' fill="freeze" />
                        <animate id='6anim2bb' attributeName='x2' dur="2.3s" begin='6anim1bb.end' from='32' to='-7' fill="freeze" />
                    </line>
                    <line x1="6.47291" y1="203" x2="6.4729" y2="253" stroke="#F6F2F2" stroke-width="0.945822">
                        <animate id='5anim1b' attributeName='x1' dur="2s" begin='0.24s; 5anim2b.end' from='-14' to='27' fill="freeze" />
                        <animate id='5anim2b' attributeName='x1' dur="2s" begin='5anim1b.end' from='27' to='-14' fill="freeze" />
                        <animate id='5anim1bb' attributeName='x2' dur="2s" begin='0.2s; 5anim2bb.end' from='30' to='-14' fill="freeze" />
                        <animate id='5anim2bb' attributeName='x2' dur="2.3s" begin='5anim1bb.end' from='-14' to='30' fill="freeze" />
                    </line>
                    <line x1="6.47291" y1="156" x2="6.4729" y2="206" stroke="#F6F2F2" stroke-width="0.945822">
                        <animate id='4anim1b' attributeName='x1' dur="2.3s" begin='0.36s; 4anim2b.end' from='22' to='-13' fill="freeze" />
                        <animate id='4anim2b' attributeName='x1' dur="2s" begin='4anim1b.end' from='-13' to='22' fill="freeze" />
                        <animate id='4anim1bb' attributeName='x2' dur="2s" begin='0.24s; 4anim2bb.end' from='-14' to='27' fill="freeze" />
                        <animate id='4anim2bb' attributeName='x2' dur="2s" begin='4anim1bb.end' from='27' to='-14' fill="freeze" />
                    </line>
                    <line x1="6.47291" y1="105" x2="6.4729" y2="155" stroke="#F6F2F2" stroke-width="0.945822">
                        <animate id='3anim1b' attributeName='x1' dur="2s" begin='0.98s; 3anim2b.end' from='-13' to='27' fill="freeze" />
                        <animate id='3anim2b' attributeName='x1' dur="2s" begin='3anim1b.end' from='27' to='-13' fill="freeze" />
                        <animate id='3anim1bb' attributeName='x2' dur="2.3s" begin='0.36s; 3anim2bb.end' from='22' to='-13' fill="freeze" />
                        <animate id='3anim2bb' attributeName='x2' dur="2s" begin='3anim1bb.end' from='-13' to='22' fill="freeze" />
                    </line>
                    <line x1="6.47291" y1="53" x2="6.4729" y2="103" stroke="#F6F2F2" stroke-width="0.945822">
                        <animate id='2anim1b' attributeName='x1' dur="2.3s" begin='0.76s; 2anim2b.end' from='27' to='-14' fill="freeze" />
                        <animate id='2anim2b' attributeName='x1' dur="2s" begin='2anim1b.end' from='-14' to='27' fill="freeze" />
                        <animate id='2anim1bb' attributeName='x2' dur="2s" begin='0.98s; 2anim2bb.end' from='-13' to='27' fill="freeze" />
                        <animate id='2anim2bb' attributeName='x2' dur="2s" begin='2anim1bb.end' from='27' to='-13' fill="freeze" />
                    </line>
                    <line x1="6.47291" y1="6" x2="6.4729" y2="56" stroke="#F6F2F2" stroke-width="0.945822">
                        <animate id='1anim1b' attributeName='x1' dur="2s" begin='0s; 1anim2b.end' from='-7' to='26' fill="freeze" />
                        <animate id='1anim2b' attributeName='x1' dur="2.3s" begin='1anim1b.end' from='26' to='-7' fill="freeze" />
                        <animate id='1anim1bb' attributeName='x2' dur="2.3s" begin='0.76s; 1anim2bb.end' from='27' to='-14' fill="freeze" />
                        <animate id='1anim2bb' attributeName='x2' dur="2s" begin='1anim1bb.end' from='-14' to='27' fill="freeze" />
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
