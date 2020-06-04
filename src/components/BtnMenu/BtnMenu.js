import React, { useRef, useEffect, useState, useContext } from 'react'

import logo from '../../assets/logo.png'
import StyledBtnMenu from './StyledBtnMenu'
import Context from '../../utils/context';

export const BtnMenu = () => {
    const { openNav, setOpenNav } = useContext(Context)
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
        if (!openNav) {
            if (rotate === 0) {
                setRotate(rotate => rotate + 180)
            }
            if (rotate === 180) {
                setRotate(rotate => rotate - 180)
            }
        }
    }

    useInterval(useRotate, 4000)

    const handleOpenNav = () => {
        if (rotate === 0 || rotate === 360) {
            setRotate(180)
            return setTimeout(() => {
                setOpenNav(openNav => !openNav)
            }, 800)
        } else {
            setOpenNav(openNav => !openNav)
        }
    }
    
    return (
            <StyledBtnMenu
                rotate={rotate}
                onClick={() => handleOpenNav()}
            >
                    <div className='wrapper-logo'>
                        <img className='logo' alt='logo' src={logo} />
                    </div>
                    <div className={openNav ? 'wrapper-menu wrapper-croix' : 'wrapper-menu'}>
                        <div className='ligne' />
                    </div>
            </StyledBtnMenu>
    )
}
