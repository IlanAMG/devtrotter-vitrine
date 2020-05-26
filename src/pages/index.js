import React from 'react'

import { HomePage } from '../components/HomePage/HomePage'
import { Bienvenue } from '../components/Bienvenue/Bienvenue'
import { Realisations } from '../components/Realisations/Realisations'
import { Offres } from '../components/Offres/Offres'

export const index = () => {

    return (
        <div className='App'>
            <HomePage />
            <Bienvenue />
            <Realisations />
            <Offres />
        </div>
    )
}
