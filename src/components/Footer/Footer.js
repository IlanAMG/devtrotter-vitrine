import React, { useContext } from 'react'
import StyledFooter from './StyledFooter';
import Context from '../../utils/context';

export const Footer = () => {
    const { nouscontacter } = useContext(Context)

    return (
        <StyledFooter ref={nouscontacter}>
            <img alt='background' className='bg' src='https://i.goopics.net/7KJOG.jpg' />
        </StyledFooter>
    )
}
