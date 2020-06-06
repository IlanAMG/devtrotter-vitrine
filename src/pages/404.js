import React, { useContext, useEffect } from 'react'
import Particles from 'react-particles-js';
import { Link, useLocation } from 'react-router-dom'
import Context from '../utils/context';

export const NotFoundPage = () => {
    const { setLoading, setOpacityLoading, setLocation, setPrevLocation } = useContext(Context)
    const location = useLocation()

    useEffect(() => {
        setLoading(true)
        setOpacityLoading(true)
        setLocation(location.pathname)
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = () => {
        setPrevLocation(location.pathname)
    }

    return (
        <div className='pageError'>
            <Particles
                    height='100%'
                    width='100%'
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    params={{
                        particles: {
                            number: {
                                value: 100,
                                density: {
                                    enable: true,
                                    value_area: 1000
                                }
                            }
                        }
                    }}
                />
            <Link to='/'>
                <svg viewBox="0 0 74 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M55.5042 21.545L37 11.2835L55.5042 0V21.545Z" fill="#7EC4A4" />
                    <path d="M55.5042 43.0899L37 32.8284L55.5042 21.5449V43.0899Z" fill="#277E5E" />
                    <path d="M37 54.3653L18.5042 44.1038L37 32.8203V54.3653Z" fill="#09B5D6" />
                    <path d="M18.5042 65.6568L0 55.3953L18.5042 44.1118V65.6568Z" fill="#0D95B0" />
                    <path d="M55.5042 107.675L37 97.4217L55.5042 86.1299V107.675Z" fill="#753E90" />
                    <path d="M74 96.3912L55.5042 86.1297L74 74.8462V96.3912Z" fill="#484999" />
                    <path d="M37 119L18.5042 108.739L37 97.4468V119Z" fill="#492778" />
                    <path d="M18.5042 108.755L0 98.4939L18.5042 87.2104V108.755Z" fill="#3E3680" />
                    <path d="M18.5042 87.2101L0 76.9486L18.5042 65.6567V87.2101Z" fill="#56519E" />
                    <path d="M37 11.2749L55.5042 21.5364L37 32.8199V11.2749Z" fill="#48B48C" />
                    <path d="M37 32.8203L55.5042 43.0818L37 54.3653V32.8203Z" fill="#3EBEE4" />
                    <path d="M18.5042 44.1118L37 54.3733L18.5042 65.6568V44.1118Z" fill="#52C2EA" />
                    <path d="M0 76.9487L18.5042 87.2102L0 98.4937V76.9487Z" fill="#5E5CA6" />
                    <path d="M37 97.4468L55.5042 107.717L37 119V97.4468Z" fill="#875BA2" />
                    <path d="M18.5042 87.2104L37 97.472L18.5042 108.755V87.2104Z" fill="#6E56A0" />
                    <path d="M55.5042 86.1299L74 96.3914L55.5042 107.675V86.1299Z" fill="#6F6FB2" />
                    <path d="M55.5042 64.5845L74 74.846L55.5042 86.1294V64.5845Z" fill="#6E92C7" />
                    <path d="M0 55.4038L18.5042 65.6653L0 76.9488V55.4038Z" fill="#6F81BF" />
                </svg>
            </Link>
            <h1>404</h1>
            <Link onClick={handleClick} to='/'>RETOURNER SUR LA PAGE D'ACCUEIL</Link>
        </div>
    )
}
