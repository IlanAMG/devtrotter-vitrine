import React, { useContext } from 'react'

import Context from '../../utils/context';
import StyledMenuNav from './StyledMenuNav';

export const MenuNavigation = () => {
    const { openNav } = useContext(Context)

    return (
        <>
            {
                openNav &&
                    <StyledMenuNav>
                        <img className='bg' alt='background' src='https://i.goopics.net/n4PP1.jpg' />
                        <div className='filtre' />
                        
                    </StyledMenuNav>
            }
        </>
    )
}