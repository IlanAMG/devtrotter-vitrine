import React from 'react'
import StyledItemPrestation from './StyledItemPrestation'

export const ItemPrestation = ({id, checked, name, handleChecked, type}) => {

    return (
        <StyledItemPrestation onClick={() => handleChecked(id, type)}>
            <div className='checkbox'>
                {checked && <div className='checked'/>}
            </div>
            <p>{name}</p>
        </StyledItemPrestation>
    )
}
