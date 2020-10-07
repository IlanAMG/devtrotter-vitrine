import React, { useContext, useState, useEffect } from 'react'
import Particles from 'react-particles-js';
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../../utils/VisibilitySensor";

import StyledBienvenue from './StyledBienvenue';
import Context from '../../utils/context';

export const Bienvenue = ({ isVisible }) => {
    const { quisommesnous } = useContext(Context)
    const [adjectifOpen, setAdjectifOpen] = useState([false, false, false, false])
    const [heightOnglet, setHeightOnglet] = useState('125px')
    const contextMenu = (e) => {
        e.preventDefault();
        return false
    }

    const openAdjectif = (i) => {
        const cloneAdjectifOpen = [...adjectifOpen]
        if (cloneAdjectifOpen[i]) {
            cloneAdjectifOpen[i] = false
        } else {
            cloneAdjectifOpen[i] = true
        }
        setAdjectifOpen(cloneAdjectifOpen)
    }

    useEffect(() => {
        if (window.innerWidth >= 750) {
            setHeightOnglet('125px')
        } else {
            setHeightOnglet('50px') 
        }
    }, [window.innerWidth])

    return (
        <StyledBienvenue ref={quisommesnous}>
            {isVisible &&
                <Particles
                    height={window.innerWidth >= 750 ? '100%' : '50%'}
                    width={window.innerWidth >= 750 ? '50%' : '100%'}
                    style={{ position: 'absolute', left: 0, bottom: 0 }}
                    params={{
                        particles: {
                            number: {
                                value: 100,
                                density: {
                                    enable: true,
                                    value_area: 1000
                                }
                            }
                        }
                    }}
                />
            }
            <VisibilitySensor partialVisiblity offset={{ top: -100 }} once>
                {({ isVisible }) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                                ? "translateY(0)"
                                : "translateY(100px)",
                        }}>
                        {(props) => (
                            <div className='container-h1'>
                                <h1 style={{ ...props }}>BIENVENUE CHEZ DEVTROTTER</h1>
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
            <div className='container-quisommesnous'>
                <VisibilitySensor partialVisiblity once offset={{ bottom: -150 }}>
                    {({ isVisible }) => (
                        <Spring
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? "translateX(0)"
                                    : "translateX(-60px)",
                            }}>
                            {(props) => (
                                <div className='quisommesnous-txt'>
                                    <h2 style={{ ...props }}>QUI SOMMES-NOUS ?</h2>
                                    <p style={{ ...props }}>Jeune équipe de développeurs passionnés des nouvelles technologies, du développement informatique et du design, nous mettons en œuvre notre savoir-faire en vous proposant tout types de prestation autour des sites internet et des applications mobile repoussant les limites de l’innovation. Tout en étant à votre écoute et disponible peu importe votre fuseau horaire.<br/><br/> Effectivement, notre organisation est basée sur le travail à distance. Nous voyageons à travers le monde tout en pratiquant notre activité professionnelle. Nous vous accompagnerons dans vos projets, en vous proposant des services de la simple modification jusqu'à la création de site personnalisé, en passant par de la création d’identité ou la gestion de bases de données.<br/><br/> Faites appel à nous dès aujourd'hui, nous mettons autant de passion dans nos projets que dans les vôtres !</p>
                                </div>
                            )}
                        </Spring>
                    )}
                </VisibilitySensor>
                <div className='wrapper-video'>
                    {isVisible &&
                        <video onSelectStart={contextMenu} onDragStart={contextMenu} onContextMenu={contextMenu} autoPlay loop muted playsinline>
                            <source data-src='/videos/earth.mp4' type='video/mp4' src='/videos/earth.mp4' />
                        </video>
                    }
                </div>
            </div>
            <VisibilitySensor partialVisiblity offset={{ bottom: -300 }} once>
                {({ isVisible }) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                                ? "translateY(0)"
                                : "translateY(100px)",
                        }}>
                        {(props) => (
                            <div style={{ ...props }} className='container-adjectif'>
                                <div className='adjectif' onClick={() => openAdjectif(0)}>
                                    <h3>FORCE DE PROPOSITION</h3>
                                    <p style={adjectifOpen[0] ? { transition: '300ms', height: heightOnglet} : null}>Comptez sur notre créativité pour vous proposer continuellement de nouvelles préconisations.</p>
                                    <hr />
                                    {!adjectifOpen[0] ?
                                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.171 1.00002L8.08944 9.24661L0.99996 1.0068" stroke="#F0F0F0" />
                                        </svg>
                                        :
                                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.00191 9.24662L8.08744 1.00342L15.173 9.24662" stroke="#F0F0F0" />
                                        </svg>
                                    }
                                </div>
                                <div className='adjectif' onClick={() => openAdjectif(1)}>
                                    <h3>FLEXIBILITÉ</h3>
                                    <p style={adjectifOpen[1] ? { transition: '300ms', height: heightOnglet } : null}>Chaque entreprise à son propre contexte, nous nous adaptons afin que la création de votre site web se passe pour le mieux.</p>
                                    <hr />
                                    {!adjectifOpen[1] ?
                                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.171 1.00002L8.08944 9.24661L0.99996 1.0068" stroke="#F0F0F0" />
                                        </svg>
                                        :
                                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.00191 9.24662L8.08744 1.00342L15.173 9.24662" stroke="#F0F0F0" />
                                        </svg>
                                    }
                                </div>
                                <div className='adjectif' onClick={() => openAdjectif(2)}>
                                    <h3>RIGUEUR</h3>
                                    <p style={adjectifOpen[2] ? { transition: '300ms', height: heightOnglet } : null}>Nous nous investissons dans votre projet afin de comprendre au mieux votre contexte et vous proposer la solution la plus pertinente pour vous.</p>
                                    <hr />
                                    {!adjectifOpen[2] ?
                                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.171 1.00002L8.08944 9.24661L0.99996 1.0068" stroke="#F0F0F0" />
                                        </svg>
                                        :
                                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.00191 9.24662L8.08744 1.00342L15.173 9.24662" stroke="#F0F0F0" />
                                        </svg>
                                    }
                                </div>
                                <div className='adjectif' onClick={() => openAdjectif(3)}>
                                    <h3>TRANSPARENCE</h3>
                                    <p style={adjectifOpen[3] ? { transition: '300ms', height: heightOnglet } : null}>Que ce soit dans nos préconisations ou dans nos devis, nous portons une grande importance à la transparence, source d'une collaboration réussie.</p>
                                    <hr />
                                    {!adjectifOpen[3] ?
                                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.171 1.00002L8.08944 9.24661L0.99996 1.0068" stroke="#F0F0F0" />
                                        </svg>
                                        :
                                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.00191 9.24662L8.08744 1.00342L15.173 9.24662" stroke="#F0F0F0" />
                                        </svg>
                                    }
                                </div>
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
        </StyledBienvenue>
    )
}
