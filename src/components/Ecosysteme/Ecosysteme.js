import React, { useContext } from 'react'
import StyledEcosysteme from './StyledEcosysteme'
import Context from '../../utils/context';

export const Ecosysteme = () => {
    const { ecosysteme } = useContext(Context)

    return (
        <StyledEcosysteme ref={ecosysteme} >
             <img className='bg' alt='background' src='https://i.goopics.net/X4109.jpg' />
             <div className='container-h1'>
                <h1>NOTRE ECOSYSTÈME</h1>
            </div>

        </StyledEcosysteme>
    )
}
