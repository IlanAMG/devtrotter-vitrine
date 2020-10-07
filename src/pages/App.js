import React, { useContext, useEffect } from 'react'
import TrackVisibility from 'react-on-screen';

import Context from '../utils/context';

import { HomePage } from '../components/HomePage/HomePage'
import { Bienvenue } from '../components/Bienvenue/Bienvenue'
import { Realisations } from '../components/Realisations/Realisations'
import { Offres } from '../components/Offres/Offres'
import { MenuNavigation } from '../components/MenuNavigation/MenuNavigation';
import { Loading } from './Loading';
import { Ecosysteme } from '../components/Ecosysteme/Ecosysteme';
import { QuiSommes } from '../components/QuiSommes/QuiSommes';
import { Banderolle } from '../components/Banderolle/Banderolle'
import { Footer } from '../components/Footer/Footer';
import FlecheGoTop from '../components/FlecheGoTop';
import { useLocation } from 'react-router-dom';

export const App = () => {
    const { setLocation, loading, opacityLoading } = useContext(Context)
    const location = useLocation()
    
    useEffect(() => {
        setLocation(location.pathname)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        return () => {
            setLocation(null)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='App'>
            {
                !loading &&
                <Loading opacityLoading={opacityLoading} />
            }
            <MenuNavigation />
            <TrackVisibility partialVisibility offset = { 600 } >
                <HomePage />
            </TrackVisibility>
            <TrackVisibility partialVisibility offset = { 600 } >
            <Bienvenue />
            </TrackVisibility>
            <TrackVisibility partialVisibility offset = { 600 } >
                <Realisations />
            </TrackVisibility>
            <Offres />
            <Ecosysteme />
            <QuiSommes />
            <TrackVisibility partialVisibility offset = { 600 } >
                {({isVisible}) => isVisible && <Banderolle />}
            </TrackVisibility>
            <Footer />
            <FlecheGoTop />
        </div>
    )
}
