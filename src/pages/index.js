import React, { useState, useRef, useEffect } from 'react'

import { HomePage } from '../components/HomePage/HomePage'
import { Bienvenue } from '../components/Bienvenue/Bienvenue'
import { Realisations } from '../components/Realisations/Realisations'
import { Offres } from '../components/Offres/Offres'
import { useScrollDirection } from '../utils/useScrollDirection';


const Index = () => {

    const [bgBienvenue, setBgBienvenue] = useState(0)
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
            setBgBienvenue(bienvenue => bienvenue + 6)
            setBgOffres(offres => offres - 6)
        } else if (direction.current === 'up') {
            setBgBienvenue(bienvenue => bienvenue - 6)
            setBgOffres(offres => offres + 6)
        }
        if (bgBienvenue >= 600 || bgBienvenue <= -600 || bgOffres <= -800 || bgOffres >= 800) {
            setBgBienvenue(0)
            setBgOffres(0)
        }
    }, [scroll])

    return (
        <div className='App'>
            <HomePage />
            <Bienvenue bgBienvenue={bgBienvenue} />
            <Realisations />
            <Offres bgOffres={bgOffres} />
        </div>
    )
}

export default Index
