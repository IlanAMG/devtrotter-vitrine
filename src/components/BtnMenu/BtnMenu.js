import React, { useRef, useEffect, useState } from 'react'

import logo from '../../assets/logo.png'
import StyledBtnMenu from './StyledBtnMenu'

export const BtnMenu = () => {

    const [rotate, setRotate] = useState(0)

    const useInterval = (callback, delay) => {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);
        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    const useRotate = () => {
        if (rotate === 0) {
            setRotate(rotate => rotate + 180)
        }
        if (rotate === 180) {
            setRotate(rotate => rotate - 180)
        }
    }

    const randomSpeed = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    useInterval(useRotate, randomSpeed(3000, 6000))

    return (
        <StyledBtnMenu
            rotate={rotate}
        >
                <div className='wrapper-logo'>
                    <img className='logo' alt='logo' src={logo} />
                </div>
                <div className='wrapper-menu'>
                    <div className='ligne' />
                </div>
        </StyledBtnMenu>
    )
}
