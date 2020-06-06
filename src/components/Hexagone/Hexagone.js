import React from 'react'
import StyledHexagone from './StyledHexagone';

export const Hexagone = ({ url, color, position, children, onMouseOver, onMouseOut, transform }) => {
    return (
        <div onMouseOver={onMouseOver} onMouseLeave={onMouseOut} className='wrapper-hexa' style={position && {position: position, transform: transform}}>
            <StyledHexagone url={url} color={color} position={position}>
                <div className="hexTop"></div>
                <div className="hexBottom"></div>
                {children &&
                    children
                }
            </StyledHexagone>
        </div>
    )
}
