import React, { useState } from 'react'
import StyledOffres from './StyledOffres';

export const Offres = ({ bgOffres }) => {

    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)

    return (
        <StyledOffres hover1={hover1} hover2={hover2}>
            <div className='container-h1'>
                <h1>NOS OFFRES</h1>
            </div>
            <div className='container-offres'>
                <div 
                    onMouseLeave={() => setHover1(false)} 
                    onMouseEnter={() => setHover1(true)} 
                    className='btn-offres'>
                    <div className='filtre-hover one'/>
                    <span>LES PACKS</span>
                </div>
                <div 
                    onMouseLeave={() => setHover2(false)}
                    onMouseEnter={() => setHover2(true)} 
                    className='btn-offres'>
                    <div className='filtre-hover two'/>
                    <span>LES OPTIONS</span>
                </div>
            </div>
            <img style={{transform: `translateX(${bgOffres}px)`}} alt='background' src='https://i.goopics.net/xV8VW.jpg' />
        </StyledOffres>
    )
}
