import React, { useContext, useState } from 'react'
import Particles from 'react-particles-js';

import StyledBienvenue from './StyledBienvenue';
import Context from '../../utils/context';

export const Bienvenue = ({ isVisible }) => {
    const { quisommesnous } = useContext(Context)
    const [adjectifOpen, setAdjectifOpen] = useState([false, false, false, false])
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

    return (
        <StyledBienvenue ref={quisommesnous}>
        {isVisible &&
            <Particles
                height='100%'
                width='50%'
                style={{ position: 'absolute', left: 0 }}
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
            <div className='container-h1'>
                <h1>BIENVENUE CHEZ DEVTROTTER</h1>
            </div>
                <div className='container-quisommesnous'>
                    <div className='quisommesnous-txt'>
                        <h2>QUI SOMMES-NOUS ?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, similique officiis ex hic a sint consequuntur, eaque, minima animi odit ea. Aspernatur minus eius a laboriosam cum ratione excepturi consequuntur maiores ad voluptatibus, aperiam itaque quibusdam pariatur in eos, aut, dicta minima modi architecto. Veniam magni dolore, necessitatibus iure, inventore deserunt saepe odit fuga quos pariatur laudantium consequatur error vitae eaque voluptates, ea delectus eligendi debitis reprehenderit doloremque maxime quas autem architecto nobis? Amet inventore officia odio sint rerum quas, numquam asperiores quae fugiat aperiam tempora, quibusdam beatae natus officiis deserunt minima! Suscipit optio possimus, ipsam iusto dolorem autem quod deserunt obcaecati.</p>
                    </div>
                    <div className='wrapper-video'>
                        {isVisible &&
                            <video onSelectStart={contextMenu} onDragStart={contextMenu} onContextMenu={contextMenu} autoPlay loop muted playsinline>
                                <source data-src='/videos/earth.mp4' type='video/mp4' src='/videos/earth.mp4' />
                            </video>
                        }
                    </div>
                </div>
            <div className='container-adjectif'>
                <div className='adjectif' onClick={() => openAdjectif(0)}>
                    <h3>FORCE DE PROPOSITION</h3>
                    <p style={adjectifOpen[0] ? { transition: '300ms', height: '125px' } : null}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque et laborum ea ad id quod eaque sapiente molestias sed omnis accusantium modi dolor iur.</p>
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
                    <p style={adjectifOpen[1] ? { transition: '300ms', height: '125px' } : null}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque et laborum ea ad id quod eaque sapiente molestias sed omnis accusantium modi dolor iur.</p>
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
                    <p style={adjectifOpen[2] ? { transition: '300ms', height: '125px' } : null}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque et laborum ea ad id quod eaque sapiente molestias sed omnis accusantium modi dolor iur.</p>
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
                    <p style={adjectifOpen[3] ? { transition: '300ms', height: '125px' } : null}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque et laborum ea ad id quod eaque sapiente molestias sed omnis accusantium modi dolor iur.</p>
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

        </StyledBienvenue>
    )
}
