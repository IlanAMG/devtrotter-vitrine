//librairies externes
import React, { useContext, useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

//utils
import Context from '../../utils/context';

//styles
import StyledHomePage from './StyledHomePage';
//components
import { BtnMenu } from '../BtnMenu/BtnMenu'
//images
import bgEco from '../../assets/bgEco.jpg'

export const HomePage = ({ isVisible }) => {
    const { pageActuel, accueil, quisommesnous, realisations, nosoffres, ecosysteme, notreequipe, nouscontacter, scrollToRef } = useContext(Context)
    const [hoverElement, setHoverElement] = useState([false, false, false, false, false, false, false])
    const [videoRdy, setVideoRdy] = useState(false)
    const [blink, setBlink] = useState([true, false, false])
    const [delay, setDelay] = useState(null)

    const handleHover = (i) => {
        let copyHoverElement = [...hoverElement]
        copyHoverElement[i] = true
        setHoverElement(copyHoverElement)
    }

    const handleOut = (i) => {
        let copyHoverElement = [...hoverElement]
        copyHoverElement[i] = false
        setHoverElement(copyHoverElement)
    }

    const useInterval = (callback, delay) => {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);
        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    const onBlink = () => {
        let cloneBlink = [...blink]
        if (cloneBlink[0]) {
            cloneBlink[0] = false
            cloneBlink[1] = true
            return setBlink(cloneBlink)
        }
        if (cloneBlink[1]) {
            cloneBlink[1] = false
            cloneBlink[2] = true
            return setBlink(cloneBlink)
        }
        if (cloneBlink[2]) {
            cloneBlink[2] = false
            cloneBlink[0] = true
            return setBlink(cloneBlink)
        }
    }
    
    useInterval(onBlink, delay)
    
    useEffect(() => {
        if (isVisible) {
            setDelay(400)
        } else {
            setDelay(null)
        }
    }, [isVisible])

    return (
        <StyledHomePage
            ref={accueil}
            circle0={hoverElement[0]}
            circle1={hoverElement[1]}
            circle2={hoverElement[2]}
            circle3={hoverElement[3]}
            circle4={hoverElement[4]}
            circle5={hoverElement[5]}
            circle6={hoverElement[6]}
        >       
            {window.innerWidth >= 970 ?
                <ReactPlayer width='100%' height= '110%' className='bg' url="https://www.youtube.com/embed/WCedDOwe85E" playing={isVisible ? videoRdy : false} onReady={() => setVideoRdy(true)} loop={true} controls={false} muted={true}
                    config={{
                        youtube: {
                            playerVars: { showInfo: 1 },
                        },
                    }}
                />
                : 
                <img className={window.innerWidth >= window.innerHeight && window.innerWidth >= 970 ? 'bgPic' : 'bgPic2'} alt='bg' src={bgEco} />
            }
            {!isVisible && window.innerWidth >= window.innerHeight && <img className='bgPic' alt='bg' src={bgEco} />}
            <BtnMenu />
            <span>FR</span>
            {window.innerWidth >= 970 &&
            <div className='container-constel'>
                <div onClick={() => scrollToRef(accueil)} className='btn btn1' onMouseOver={() => handleHover(0)} onMouseOut={() => handleOut(0)} />
                <div onClick={() => scrollToRef(quisommesnous)} className='btn btn2' onMouseOver={() => handleHover(1)} onMouseOut={() => handleOut(1)} />
                <div onClick={() => scrollToRef(realisations)} className='btn btn3' onMouseOver={() => handleHover(2)} onMouseOut={() => handleOut(2)} />
                <div onClick={() => scrollToRef(nosoffres)} className='btn btn4' onMouseOver={() => handleHover(3)} onMouseOut={() => handleOut(3)} />
                <div onClick={() => scrollToRef(ecosysteme)} className='btn btn5' onMouseOver={() => handleHover(4)} onMouseOut={() => handleOut(4)} />
                <div onClick={() => scrollToRef(notreequipe)} className='btn btn6' onMouseOver={() => handleHover(5)} onMouseOut={() => handleOut(5)} />
                <div onClick={() => scrollToRef(nouscontacter)} className='btn btn7' onMouseOver={() => handleHover(6)} onMouseOut={() => handleOut(6)} />
                <svg id='svg' width="90" height="400" viewBox="0 0 13 309" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle stroke="white" strokeWidth={hoverElement[0] || pageActuel[0] ? '1' : '0'} cx="6.5" cy="6.5" r="5.8" fill="url(#paint0_radial)">
                        <animateMotion id='1anim1' dur="2s" begin='0s; 1anim2.end' path={hoverElement[0] || pageActuel[0] ? 'M0,0 0,0' : "M-15,0 20,0"} fill='freeze' />
                        <animateMotion id='1anim2' dur="2.3s" begin='1anim1.end' path={hoverElement[0] || pageActuel[0] ? 'M0,0 0,0' : "M20,0 -15,0"} fill='freeze' />
                    </circle>
                    <circle stroke='white' strokeWidth={hoverElement[1] || pageActuel[1] ? '1' : '0'} cx="6.5" cy="53.5" r="5.8" fill="url(#paint1_radial)">
                        <animateMotion id='2anim1' dur="2.3s" begin='0.76s; 2anim2.end' path={hoverElement[1] || pageActuel[1] ? 'M0,0 0,0' : "M20,0 -20,0"} fill="freeze" />
                        <animateMotion id='2anim2' dur="2s" begin='2anim1.end' path={hoverElement[1] || pageActuel[1] ? 'M0,0 0,0' : "M-20,0 20,0"} fill="freeze" />
                    </circle>
                    <circle stroke='white' strokeWidth={hoverElement[2] || pageActuel[2] ? '1' : '0'} cx="6.5" cy="104.5" r="5.8" fill="url(#paint2_radial)">
                        <animateMotion id='3anim1' dur="2s" begin='0.98s; 3anim2.end' path={hoverElement[2] || pageActuel[2] ? 'M0,0 0,0' : "M-20,0 20,0"} fill="freeze" />
                        <animateMotion id='3anim2' dur="2s" begin='3anim1.end' path={hoverElement[2] || pageActuel[2] ? 'M0,0 0,0' : "M20,0 -20,0"} fill="freeze" />
                    </circle>
                    <circle stroke='white' strokeWidth={hoverElement[3] || pageActuel[3] ? '1' : '0'} cx="6.5" cy="155.5" r="5.8" fill="url(#paint3_radial)">
                        <animateMotion id='4anim1' dur="2.3s" begin='0.36s; 4anim2.end' path={hoverElement[3] || pageActuel[3] ? 'M0,0 0,0' : "M15,0 -20,0"} fill="freeze" />
                        <animateMotion id='4anim2' dur="2s" begin='4anim1.end' path={hoverElement[3] || pageActuel[3] ? 'M0,0 0,0' : "M-20,0 15,0"} fill="freeze" />
                    </circle>
                    <circle stroke='white' strokeWidth={hoverElement[4] || pageActuel[4] ? '1' : '0'} cx="6.5" cy="204.5" r="5.8" fill="url(#paint4_radial)">
                        <animateMotion id='5anim1' dur="2s" begin='0.24s; 5anim2.end' path={hoverElement[4] || pageActuel[4] ? 'M0,0 0,0' : "M-20,0 20,0"} fill="freeze" />
                        <animateMotion id='5anim2' dur="2s" begin='5anim1.end' path={hoverElement[4] || pageActuel[4] ? 'M0,0 0,0' : "M20,0 -20,0"} fill="freeze" />
                    </circle>
                    <circle stroke='white' strokeWidth={hoverElement[5] || pageActuel[5] ? '1' : '0'} cx="6.5" cy="253.5" r="5.8" fill="url(#paint5_radial)">
                        <animateMotion id='6anim1' dur="2s" begin='0.2s; 6anim2.end' path={hoverElement[5] || pageActuel[5] ? 'M0,0 0,0' : "M25,0 -20,0"} fill="freeze" />
                        <animateMotion id='6anim2' dur="2.3s" begin='6anim1.end' path={hoverElement[5] || pageActuel[5] ? 'M0,0 0,0' : "M-20,0 25,0"} fill="freeze" />
                    </circle>
                    <circle stroke='white' strokeWidth={hoverElement[6] || pageActuel[6] ? '1' : '0'} cx="6.5" cy="302.5" r="5.8" fill="url(#paint6_radial)">
                        <animateMotion id='7anim1' dur="2.3s" begin='0.3s; 7anim2.end' path={hoverElement[6] || pageActuel[6] ? 'M0,0 0,0' : "M-15,0 25,0"} fill="freeze" />
                        <animateMotion id='7anim2' dur="2.3s" begin='7anim1.end' path={hoverElement[6] || pageActuel[6] ? 'M0,0 0,0' : "M25,0 -15,0"} fill="freeze" />
                    </circle>
                    <line x1="6.47291" y1="253" x2="6.4729" y2="303" stroke="#F6F2F2" strokeWidth="0.945822">
                        <animate id='6anim1b' attributeName='x1' dur="2s" begin='0.2s; 6anim2b.end' from={hoverElement[5] || pageActuel[5] ? '6.47291' : '32'} to={hoverElement[5] || pageActuel[5] ? '6.47291' : '-14'} fill="freeze" />
                        <animate id='6anim2b' attributeName='x1' dur="2.3s" begin='6anim1b.end' from={hoverElement[5] || pageActuel[5] ? '6.47291' : '-14'} to={hoverElement[5] || pageActuel[5] ? '6.47291' : '32'} fill="freeze" />
                        <animate id='6anim1bb' attributeName='x2' dur="2.3s" begin='0.3s; 6anim2bb.end' from={hoverElement[6] || pageActuel[6] ? '6.47291' : '-7'} to={hoverElement[6] || pageActuel[6] ? '6.47291' : '32'} fill="freeze" />
                        <animate id='6anim2bb' attributeName='x2' dur="2.3s" begin='6anim1bb.end' from={hoverElement[6] || pageActuel[6] ? '6.47291' : '32'} to={hoverElement[6] || pageActuel[6] ? '6.47291' : '-7'} fill="freeze" />
                    </line>
                    <line x1="6.47291" y1="203" x2="6.4729" y2="253" stroke="#F6F2F2" strokeWidth="0.945822">
                        <animate id='5anim1b' attributeName='x1' dur="2s" begin='0.24s; 5anim2b.end' from={hoverElement[4] || pageActuel[4] ? '6.47291' : '-14'} to={hoverElement[4] || pageActuel[4] ? '6.47291' : '27'} fill="freeze" />
                        <animate id='5anim2b' attributeName='x1' dur="2s" begin='5anim1b.end' from={hoverElement[4] || pageActuel[4] ? '6.47291' : '27'} to={hoverElement[4] || pageActuel[4] ? '6.47291' : '-14'} fill="freeze" />
                        <animate id='5anim1bb' attributeName='x2' dur="2s" begin='0.2s; 5anim2bb.end' from={hoverElement[5] || pageActuel[5] ? '6.47291' : '30'} to={hoverElement[5] || pageActuel[5] ? '6.47291' : '-14'} fill="freeze" />
                        <animate id='5anim2bb' attributeName='x2' dur="2.3s" begin='5anim1bb.end' from={hoverElement[5] || pageActuel[5] ? '6.47291' : '-14'} to={hoverElement[5] || pageActuel[5] ? '6.47291' : '30'} fill="freeze" />
                    </line>
                    <line x1="6.47291" y1="156" x2="6.4729" y2="206" stroke="#F6F2F2" strokeWidth="0.945822">
                        <animate id='4anim1b' attributeName='x1' dur="2.3s" begin='0.36s; 4anim2b.end' from={hoverElement[3] || pageActuel[3] ? '6.47291' : '22'} to={hoverElement[3] || pageActuel[3] ? '6.47291' : '-13'} fill="freeze" />
                        <animate id='4anim2b' attributeName='x1' dur="2s" begin='4anim1b.end' from={hoverElement[3] || pageActuel[3] ? '6.47291' : '-13'} to={hoverElement[3] || pageActuel[3] ? '6.47291' : '22'} fill="freeze" />
                        <animate id='4anim1bb' attributeName='x2' dur="2s" begin='0.24s; 4anim2bb.end' from={hoverElement[4] || pageActuel[4] ? '6.47291' : '-14'} to={hoverElement[4] || pageActuel[4] ? '6.47291' : '27'} fill="freeze" />
                        <animate id='4anim2bb' attributeName='x2' dur="2s" begin='4anim1bb.end' from={hoverElement[4] || pageActuel[4] ? '6.47291' : '27'} to={hoverElement[4] || pageActuel[4] ? '6.47291' : '-14'} fill="freeze" />
                    </line>
                    <line x1="6.47291" y1="105" x2="6.4729" y2="155" stroke="#F6F2F2" strokeWidth="0.945822">
                        <animate id='3anim1b' attributeName='x1' dur="2s" begin='0.98s; 3anim2b.end' from={hoverElement[2] || pageActuel[2] ? '6.47291' : '-13'} to={hoverElement[2] || pageActuel[2] ? '6.47291' : '27'} fill="freeze" />
                        <animate id='3anim2b' attributeName='x1' dur="2s" begin='3anim1b.end' from={hoverElement[2] || pageActuel[2] ? '6.47291' : '27'} to={hoverElement[2] || pageActuel[2] ? '6.47291' : '-13'} fill="freeze" />
                        <animate id='3anim1bb' attributeName='x2' dur="2.3s" begin='0.36s; 3anim2bb.end' from={hoverElement[3] || pageActuel[3] ? '6.47291' : '22'} to={hoverElement[3] || pageActuel[3] ? '6.47291' : '-13'} fill="freeze" />
                        <animate id='3anim2bb' attributeName='x2' dur="2s" begin='3anim1bb.end' from={hoverElement[3] || pageActuel[3] ? '6.47291' : '-13'} to={hoverElement[3] || pageActuel[3] ? '6.47291' : '22'} fill="freeze" />
                    </line>
                    <line x1="6.47291" y1="53" x2="6.4729" y2="103" stroke="#F6F2F2" strokeWidth="0.945822">
                        <animate id='2anim1b' attributeName='x1' dur="2.3s" begin='0.76s; 2anim2b.end' from={hoverElement[1] || pageActuel[1] ? '6.47291' : '27'} to={hoverElement[1] || pageActuel[1] ? '6.47291' : '-14'} fill="freeze" />
                        <animate id='2anim2b' attributeName='x1' dur="2s" begin='2anim1b.end' from={hoverElement[1] || pageActuel[1] ? '6.47291' : '-14'} to={hoverElement[1] || pageActuel[1] ? '6.47291' : '27'} fill="freeze" />
                        <animate id='2anim1bb' attributeName='x2' dur="2s" begin='0.98s; 2anim2bb.end' from={hoverElement[2] || pageActuel[2] ? '6.47291' : '-13'} to={hoverElement[2] || pageActuel[2] ? '6.47291' : '27'} fill="freeze" />
                        <animate id='2anim2bb' attributeName='x2' dur="2s" begin='2anim1bb.end' from={hoverElement[2] || pageActuel[2] ? '6.47291' : '27'} to={hoverElement[2] || pageActuel[2] ? '6.47291' : '-13'} fill="freeze" />
                    </line>
                    <line x1="6.47291" y1="6" x2="6.4729" y2="56" stroke="#F6F2F2" strokeWidth="0.945822">
                        <animate id='1anim1b' attributeName='x1' dur="2s" begin='0s; 1anim2b.end' from={hoverElement[0] || pageActuel[0] ? '6.47291' : '-7'} to={hoverElement[0] || pageActuel[0] ? '6.47291' : '26'} fill="freeze" />
                        <animate id='1anim2b' attributeName='x1' dur="2.3s" begin='1anim1b.end' from={hoverElement[0] || pageActuel[0] ? '6.47291' : '26'} to={hoverElement[0] || pageActuel[0] ? '6.47291' : '-7'} fill="freeze" />
                        <animate id='1anim1bb' attributeName='x2' dur="2.3s" begin='0.76s; 1anim2bb.end' from={hoverElement[1] || pageActuel[1] ? '6.47291' : '27'} to={hoverElement[1] || pageActuel[1] ? '6.47291' : '-14'} fill="freeze" />
                        <animate id='1anim2bb' attributeName='x2' dur="2s" begin='1anim1bb.end' from={hoverElement[1] || pageActuel[1] ? '6.47291' : '-14'} to={hoverElement[1] || pageActuel[1] ? '6.47291' : '27'} fill="freeze" />
                    </line>
                    <defs>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 6.5) rotate(90) scale(6.5)">
                            <stop offset="0.427083" stopColor="white" />
                            <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 53.5) rotate(90) scale(6.5)">
                            <stop offset="0.427083" stopColor="white" />
                            <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 104.5) rotate(90) scale(6.5)">
                            <stop offset="0.427083" stopColor="white" />
                            <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 155.5) rotate(90) scale(6.5)">
                            <stop offset="0.427083" stopColor="white" />
                            <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint4_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 204.5) rotate(90) scale(6.5)">
                            <stop offset="0.427083" stopColor="white" />
                            <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint5_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 253.5) rotate(90) scale(6.5)">
                            <stop offset="0.427083" stopColor="white" />
                            <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint6_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.5 302.5) rotate(90) scale(6.5)">
                            <stop offset="0.427083" stopColor="white" />
                            <stop offset="1" stopColor="#F6F2F2" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            }
            <section className='container-titres'>
                <div className='wrapper-h3'>
                    <h3>VOTRE VISION ÉVEILLE NOTRE SAVOIR-FAIRE</h3>
                    <div className='separator-h3' />
                </div>
                <h1>DEVTROTTER STUDIO</h1>
                <h2>DÉVELOPPEMENT WEB & MOBILE | UX / UI DESIGN</h2>
            </section>

            <svg onClick={() => scrollToRef(quisommesnous)} className='scroll' width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                {blink[2] && <path d="M1.28719 41L15.1436 59L29 41" stroke="#F0F0F0" />}
                {blink[1] && <path d="M1.00008 21L14.8565 39L28.7129 21" stroke="#F0F0F0" />}
                {blink[0] && <path d="M1.00008 0.999998L14.8565 19L28.7129 1" stroke="#F0F0F0" />}
            </svg>

        </StyledHomePage>
    )
}
