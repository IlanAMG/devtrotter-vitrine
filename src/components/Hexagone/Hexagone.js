import React from 'react'
import StyledHexagone from './StyledHexagone';

export const Hexagone = ({ url }) => {
    return (
        <StyledHexagone url={url} >
            <div className="hexTop"></div>
            <div className="hexBottom"></div>
        </StyledHexagone>
    )
}
