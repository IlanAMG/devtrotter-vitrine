import React, { useContext, useEffect, useState } from 'react'

import Context from '../../utils/context';
import StyledMenuNav from './StyledMenuNav';

export const MenuNavigation = () => {
    const { openNav } = useContext(Context)
    const [styles, setStyles] = useState({})

    useEffect(() => {
        if (openNav) {
            setStyles({visibility: 'visible', height: '100vh', opacity: '0.9'})
        } else {
            setStyles({visibility: 'hidden', height: '0px', opacity: '0'})
        }
    }, [openNav])
    return (
        <StyledMenuNav style={styles} >
            <img className='bg' alt='background' src='https://i.goopics.net/d37V3.jpg' />
            <div className='filtre' />
        </StyledMenuNav>
    )
}