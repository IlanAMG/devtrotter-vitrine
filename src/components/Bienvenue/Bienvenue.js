import React, { useContext } from 'react'
import StyledBienvenue from './StyledBienvenue';

import Context from '../../utils/context';

export const Bienvenue = () => {
    const { quisommesnous } = useContext(Context)
    
    return (
        <StyledBienvenue ref={quisommesnous}>
            <div className='container-h1'>
                <h1>BIENVENUE CHEZ DEVTROTTER</h1>
            </div>
            <div className='container-quisommesnous'>
                <div className='quisommesnous-txt'>
                    <h2>QUI SOMMES-NOUS ?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, similique officiis ex hic a sint consequuntur, eaque, minima animi odit ea. Aspernatur minus eius a laboriosam cum ratione excepturi consequuntur maiores ad voluptatibus, aperiam itaque quibusdam pariatur in eos, aut, dicta minima modi architecto. Veniam magni dolore, necessitatibus iure, inventore deserunt saepe odit fuga quos pariatur laudantium consequatur error vitae eaque voluptates, ea delectus eligendi debitis reprehenderit doloremque maxime quas autem architecto nobis? Amet inventore officia odio sint rerum quas, numquam asperiores quae fugiat aperiam tempora, quibusdam beatae natus officiis deserunt minima! Suscipit optio possimus, ipsam iusto dolorem autem quod deserunt obcaecati.</p>
                </div>
                <div className='wrapper-video'>
                    <video autoPlay loop muted playsinline>
                        <source data-src='/videos/earth.mp4' type='video/mp4' src='/videos/earth.mp4' />
                    </video>
                </div>
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
