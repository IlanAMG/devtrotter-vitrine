import React, { useState, useEffect } from 'react'

import StyledRealisations from './StyledRealisations';

export const Realisations = () => {

    const [hover, setHover] = useState([false, false, false, false, false])

    const handleHover = (e, i) => {
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
        <StyledRealisations>
            <div className='container-h1'>
                <h1>RÉALISATIONS</h1>
            </div>
            <section className='caroussel'>
                
            </section>
            <section className='categories'>
                <div className='img'  onMouseOver={(e) => handleHover(e, 0)}>
                    <img className={hover[0] && 'scale'} alt='ecommerce' src='https://i.goopics.net/Kkwm3.jpg'/>
                    <div className={!hover[0] ? 'filtre-hover' : 'filtre-hover on'}  onMouseOut={() => handleLeave(0)}>
                         <p>E-COMMERCE</p>
                    </div>
                </div>
                <div className='img' onMouseOver={(e) => handleHover(e, 1)}>
                    <img className={hover[1] && 'scale'} alt='application' src='https://i.goopics.net/0DaWq.jpg'/>
                    <div className={!hover[1] ? 'filtre-hover' : 'filtre-hover on'}  onMouseLeave={() => handleLeave(1)}>
                         <p>APPLICATION</p>
                    </div>
                </div>
                <div className='img' onMouseOver={(e) => handleHover(e, 2)}>
                    <img className={hover[2] && 'scale'} alt='blog' src='https://i.goopics.net/VNmDV.jpg' />
                    <div className={!hover[2] ? 'filtre-hover' : 'filtre-hover on'}  onMouseLeave={() => handleLeave(2)}>
                         <p>BLOG</p>
                    </div>
                </div>
                <div className='img' onMouseOver={(e) => handleHover(e, 3)} >
                    <img className={hover[3] && 'scale'} alt='sitevitrine' src='https://i.goopics.net/akjKZ.jpg'/>
                    <div className={!hover[3] ? 'filtre-hover' : 'filtre-hover on'} onMouseLeave={() => handleLeave(3)}>
                         <p>SITE VITRINE</p>
                    </div>
                </div>
                <div className='img' onMouseOver={(e) => handleHover(e, 4)}>
                    <img className={hover[4] && 'scale'} alt='socialnetwork' src='https://i.goopics.net/351Qj.jpg' />
                    <div className={!hover[4] ? 'filtre-hover' : 'filtre-hover on'}  onMouseLeave={() => handleLeave(4)}>
                         <p>RESEAU SOCIAL</p>
                    </div>
                </div>
            </section>
        </StyledRealisations>
    )
}
