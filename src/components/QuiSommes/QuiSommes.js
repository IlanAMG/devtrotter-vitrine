import React, { useContext } from 'react'
import StyledQuiSommes from './StyledQuiSommes'
import Context from '../../utils/context';
import { Hexagone } from '../Hexagone/Hexagone';

export const QuiSommes = () => {
    const { notreequipe } = useContext(Context)

    return (
        <StyledQuiSommes ref={notreequipe} >
            <img className='bg' alt='background' src='https://i.goopics.net/5bJdd.png' />
            <div className="container-h1">
                <h1>NOTRE ÉQUIPE</h1>
            </div>
            <section className='container-equipe'>
                <Hexagone url={'https://i.goopics.net/N3vlg.jpg'} />
                <Hexagone url={'https://i.goopics.net/bVold.jpg'} />
                <Hexagone url={'https://i.goopics.net/d3Rxw.jpg'} />
            </section>
        </StyledQuiSommes>
    )
}
