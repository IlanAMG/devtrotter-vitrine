import React, { useContext, useState } from 'react'
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../../utils/VisibilitySensor";

import StyledQuiSommes from './StyledQuiSommes'
import Context from '../../utils/context';
import { Hexagone } from '../Hexagone/Hexagone';
import bgEquipe from '../../assets/bgEquipe.jpg'

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
            <img className='bg' alt='background' src={bgEquipe} />
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
                            <div className="container-h1">
                                <h1 style={{ ...props }}>NOTRE ÉQUIPE</h1>
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
            <section className='container-equipe'>
                <Hexagone onMouseOver={() => handleHover(0)} onMouseOut={() => handleLeave(0)} url={'https://i.imgur.com/OIosvUk.jpg'}>
                    {hover[0] && <Hexagone color={'black'} position={'absolute'}><span>Sébastien CHAPUY<br />Développeur FullStack</span></Hexagone>}
                    {hover[0] && window.innerWidth >= 510 &&
                        <Hexagone color={'#F0F0F0'} position={'absolute'} transform={'translate(-128px, 220px)'}>
                            <a rel="noopener noreferrer" target='_blank' href='https://github.com/DevTrotter'>GITHUB</a>
                            <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/s%C3%A9bastien-chapuy-a6324bb5/'>LINKEDIN</a>
                        </Hexagone>}
                    {hover[0] && window.innerWidth >= 510 &&
                        <Hexagone color={'#F0F0F0'} position={'absolute'} transform={'translate(127px, 220px)'}>
                            <span className='ici'>-  Spécialités : PHP | SQL | Config serveur<br/><br/><small>Un bon site web est toujours en construction.</small></span>
                        </Hexagone>}
                </Hexagone>
                <Hexagone onMouseOver={() => handleHover(1)} onMouseOut={() => handleLeave(1)} url={'https://i.imgur.com/A2TZCVg.jpg'}>
                    {hover[1] &&<Hexagone color={'black'} position={'absolute'}><span>Ilan AMZALLAG<br />Développeur FullStack</span></Hexagone>}
                    {hover[1] && window.innerWidth >= 510 &&    
                        <Hexagone color={'#F0F0F0'} position={'absolute'} transform={'translate(-128px, 220px)'}>
                            <a rel="noopener noreferrer" target='_blank' href='https://ilanamzallag.com'>PORTFOLIO</a>
                            <a rel="noopener noreferrer" target='_blank' href='https://github.com/IlanAMG'>GITHUB</a>
                            <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/ilan-amzallag-b4a259101/'>LINKEDIN</a>
                        </Hexagone>}
                    {hover[1] && window.innerWidth >= 510 &&
                        <Hexagone color={'#F0F0F0'} position={'absolute'} transform={'translate(127px, 220px)'}>
                            <span className='ici'>-  Spécialités : React.js | Node.js | noSQL<br/><br/><small>Ton meilleur professeur, c’est ta dernière erreur.</small></span>
                        </Hexagone>}
                </Hexagone>
                <Hexagone onMouseOver={() => handleHover(2)} onMouseOut={() => handleLeave(2)} url={'https://i.imgur.com/nn1taq6.jpg'}>
                    {hover[2] && <Hexagone color={'black'} position={'absolute'}><span>Rémi NERET<br />UX/UI Designer</span></Hexagone>}
                    {hover[2] && window.innerWidth >= 510 &&
                        <Hexagone color={'#F0F0F0'} position={'absolute'} transform={'translate(-128px, 220px)'}>
                            <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/remineret/'>GITHUB</a>
                        </Hexagone>}
                    {hover[2] && window.innerWidth >= 510 &&
                        <Hexagone color={'#F0F0F0'} position={'absolute'} transform={'translate(127px, 220px)'}>
                            <span className='ici'>-  Spécialités : Création d'identité | Suite Adobe | Figma<br/><br/><small>La meilleure des publicités est un client satisfait.</small></span>
                        </Hexagone>}
                </Hexagone>
            </section>
        </StyledQuiSommes>
    )
}
