import React, { useContext } from 'react'

import { HomePage } from '../components/HomePage/HomePage'
import { Bienvenue } from '../components/Bienvenue/Bienvenue'
import { Realisations } from '../components/Realisations/Realisations'
import { Offres } from '../components/Offres/Offres'
import { MenuNavigation } from '../components/MenuNavigation/MenuNavigation';
import { Loading } from './Loading';
import Context from '../utils/context';

export const App = () => {
    const { loading, opacityLoading } = useContext(Context)
    return (
        <div className='App'>
            {
                !loading &&
                <Loading opacityLoading={opacityLoading} />
            }
            <MenuNavigation />
            <HomePage />
            <Bienvenue />
            <Realisations />
            <Offres />
        </div>
    )
}
