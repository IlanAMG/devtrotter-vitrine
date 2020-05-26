import React, { useState, useEffect, useRef } from 'react'
import StyledOffres from './StyledOffres';
import { useScrollDirection } from '../../utils/useScrollDirection';

export const Offres = () => {
        
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [bgOffres, setBgOffres] = useState(0)
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
            setBgOffres(offres => offres + 6)
        } else if (direction.current === 'up') {
            setBgOffres(offres => offres - 6)
        }
        if (bgOffres <= -800 || bgOffres >= 800) {
            setBgOffres(0)
        }
    }, [scroll])

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
