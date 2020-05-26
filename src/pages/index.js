import React, { useState } from 'react'

import { HomePage } from '../components/HomePage/HomePage'
import { Bienvenue } from '../components/Bienvenue/Bienvenue'
import { Realisations } from '../components/Realisations/Realisations'
import { Offres } from '../components/Offres/Offres'
import { MenuNavigation } from '../components/MenuNavigation/MenuNavigation';

export const index = () => {
    return (
        <div className='App'>
            <MenuNavigation />
            <HomePage />
            <Bienvenue />
            <Realisations />
            <Offres />
        </div>
    )
}
