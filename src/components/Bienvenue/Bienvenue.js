import React, { useState, useEffect, useRef } from 'react'
import StyledBienvenue from './StyledBienvenue';
import { useScrollDirection } from '../../utils/useScrollDirection';

export const Bienvenue = () => {
    
    const [bgBienvenue, setBgBienvenue] = useState(0)
    const [scroll, setScroll] = useState(0)
    let direction = useRef('')
    const directionScroll = useScrollDirection()

    const scrollBg = () => {
        setScroll(window.pageYOffset)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollBg, {passive: true})
    }, [])

    useEffect(() => {
        return () => window.removeEventListener('scroll', scrollBg)
    }, [])

    useEffect(() => {
        direction.current = directionScroll
    }, [directionScroll])
    useEffect(() => {
        if (direction.current === 'down') {
            setBgBienvenue(bienvenue => bienvenue + 6)
        } else if (direction.current === 'up') {
            setBgBienvenue(bienvenue => bienvenue - 6)
        }
        if (bgBienvenue >= 600 || bgBienvenue <= -600) {
            setBgBienvenue(0)
        }
    }, [scroll])
    return (
        <StyledBienvenue>
            <img style={{transform: `translateX(-${bgBienvenue}px)`}} alt='background' src='https://i.goopics.net/o2p2n.jpg' />
            <div className='container-h1'>
                <h1>BIENVENUE CHEZ DEVTROTTER</h1>
            </div>
            <div className='container-quisommesnous'>
                <div className='quisommesnous-txt'>
                    <h2>QUI SOMMES-NOUS ?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, similique officiis ex hic a sint consequuntur, eaque, minima animi odit ea. Aspernatur minus eius a laboriosam cum ratione excepturi consequuntur maiores ad voluptatibus, aperiam itaque quibusdam pariatur in eos, aut, dicta minima modi architecto. Veniam magni dolore, necessitatibus iure, inventore deserunt saepe odit fuga quos pariatur laudantium consequatur error vitae eaque voluptates, ea delectus eligendi debitis reprehenderit doloremque maxime quas autem architecto nobis? Amet inventore officia odio sint rerum quas, numquam asperiores quae fugiat aperiam tempora, quibusdam beatae natus officiis deserunt minima! Suscipit optio possimus, ipsam iusto dolorem autem quod deserunt obcaecati, enim laborum eaque fuga! Est quia maxime deleniti, animi facere eum fugit dicta modi debitis eligendi. Laboriosam esse placeat quidem minima? Exercitationem corporis tempora blanditiis adipisci iure corrupti ipsam dolore libero nulla, numquam saepe asperiores amet sed minima doloribus. Vel repellat ipsum eum temporibus quasi.</p>
                </div>
                <div className='placeholder'></div>
            </div>
            <div className='container-adjectif'>
                <div className='adjectif'>
                    <h3>FORCE DE PROPOSITION</h3>
                    <hr/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque et laborum ea ad id quod eaque sapiente molestias sed omnis accusantium modi dolor iure, cum suscipit dolorum optio distinctio a?</p>
                </div>
                <div className='adjectif'>
                    <h3>FLEXIBILITÉ</h3>
                    <hr/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque et laborum ea ad id quod eaque sapiente molestias sed omnis accusantium modi dolor iure, cum suscipit dolorum optio distinctio a?</p>
                </div>
                <div className='adjectif'>
                    <h3>RIGUEUR</h3>
                    <hr/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque et laborum ea ad id quod eaque sapiente molestias sed omnis accusantium modi dolor iure, cum suscipit dolorum optio distinctio a?</p>
                </div>
                <div className='adjectif'>
                    <h3>TRANSPARENCE</h3>
                    <hr/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque et laborum ea ad id quod eaque sapiente molestias sed omnis accusantium modi dolor iure, cum suscipit dolorum optio distinctio a?</p>
                </div>
            </div>

        </StyledBienvenue>
    )
}
