import React, { useState, useEffect, useContext } from 'react'
import StyledOffres from './StyledOffres';
import Context from '../../utils/context';
import { Link } from 'react-router-dom';
import bgScroll from '../../assets/bgScroll.jpg'

export const Offres = () => {
    const { nosoffres } = useContext(Context)
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    // const [scroll, setScroll] = useState(0)

    // const scrollBg = () => {
    //     setScroll((window.pageYOffset / 12))
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', scrollBg, {passive: true})
    // }, [])

    // useEffect(() => {
    //     return () => window.removeEventListener('scroll', scrollBg)
    // }, [])

    return (
        <StyledOffres ref={nosoffres} hover1={hover1} hover2={hover2}>
            <div className='container-h1'>
                <h1>NOS OFFRES</h1>
            </div>
            <div className='container-offres'>
                <Link
                    to='/packs'
                    onMouseLeave={() => setHover1(false)} 
                    onMouseEnter={() => setHover1(true)} 
                    className='btn-offres'>
                    <div className='filtre-hover one'/>
                    <span>NOS PACKS</span>
                </Link>
                <Link 
                    to='/prestations'
                    onMouseLeave={() => setHover2(false)}
                    onMouseEnter={() => setHover2(true)} 
                    className='btn-offres'>
                    <div className='filtre-hover two'/>
                    <span>NOS PRESTATIONS</span>
                </Link>
            </div>
            <img alt='background' src={bgScroll} />
        </StyledOffres>
    )
}
