import React from 'react'

import { HomePage } from '../components/HomePage/HomePage'
import { Bienvenue } from '../components/Bienvenue/Bienvenue'

export const index = () => {
    return (
        <div className='App'>
            <HomePage />
            <Bienvenue />
        </div>
    )
}
