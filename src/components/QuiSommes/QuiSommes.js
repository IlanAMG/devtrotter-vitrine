import React, { useContext } from 'react'
import StyledQuiSommes from './StyledQuiSommes'
import Context from '../../utils/context';

export const QuiSommes = () => {
    const { notreequipe } = useContext(Context)

    return (
        <StyledQuiSommes ref={notreequipe} >
            <img className='bg' alt='background' src='https://i.goopics.net/5bJdd.png' />
            <div className="container-h1">
                <h1>NOTRE ÉQUIPE</h1>
            </div>
        </StyledQuiSommes>
    )
}
