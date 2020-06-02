import React, { useContext, useState } from 'react'
import StyledQuiSommes from './StyledQuiSommes'
import Context from '../../utils/context';
import { Hexagone } from '../Hexagone/Hexagone';

export const QuiSommes = () => {
    const { notreequipe } = useContext(Context)
    const [hover, setHover] = useState([false, false, false])

    const handleHover = (i) => {
        let cloneHover = [...hover]
        cloneHover[i] = true
        setHover(cloneHover)
    }
    const handleLeave = (i) => {
        let cloneHover = [...hover]
        cloneHover[i] = false
        setHover(cloneHover)
    }

    return (
        <StyledQuiSommes ref={notreequipe} >
            <img className='bg' alt='background' src='https://i.goopics.net/5bJdd.png' />
            <div className="container-h1">
                <h1>NOTRE ÉQUIPE</h1>
            </div>
            <section className='container-equipe'>
                <Hexagone onMouseOver={() => handleHover(0)} onMouseOut={() => handleLeave(0)} url={'https://i.goopics.net/N3vlg.jpg'}>
                    {hover[0] && <Hexagone color={'black'} position={'absolute'}><span>Sébastien CHAPUY<br/>Développeur FullStack</span></Hexagone>}
                </Hexagone>
                <Hexagone onMouseOver={() => handleHover(1)} onMouseOut={() => handleLeave(1)} url={'https://i.goopics.net/bVold.jpg'}>
                    {hover[1] && <Hexagone color={'black'} position={'absolute'}><span>Ilan AMZALLAG<br/>Développeur FullStack</span></Hexagone>}
                </Hexagone>
                <Hexagone onMouseOver={() => handleHover(2)} onMouseOut={() => handleLeave(2)} url={'https://i.goopics.net/d3Rxw.jpg'}>
                    {hover[2] && <Hexagone color={'black'} position={'absolute'}><span>Rémi NERET<br/>UX/UI Designer</span></Hexagone>}
                </Hexagone>
            </section>
        </StyledQuiSommes>
    )
}
