import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import Context from '../utils/context';

export const Options = () => {
    const { setLocation } = useContext(Context)
    const location = useLocation()
    
    useEffect(() => {
        console.log('options', location.pathname)
        setLocation(location.pathname)
    }, [])

    return (
        <div>
            <h1>OPTIONS</h1>
        </div>
    )
}
