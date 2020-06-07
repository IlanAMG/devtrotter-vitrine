import React, { useState, useContext } from 'react'
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../../utils/VisibilitySensor";

import StyledOffres from './StyledOffres';
import Context from '../../utils/context';
import { Link } from 'react-router-dom';
import bgScroll from '../../assets/bgScroll.jpg'

export const Offres = () => {
    const { nosoffres } = useContext(Context)
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)

    return (
        <StyledOffres ref={nosoffres} hover1={hover1} hover2={hover2}>
            <VisibilitySensor partialVisiblity offset={{ top: -100 }} once>
                {({ isVisible }) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                                ? "translateY(0)"
                                : "translateY(100px)",
                        }}>
                        {(props) => (
                            <div className='container-h1'>
                                <h1 style={{ ...props }}>NOS OFFRES</h1>
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
            <div className='container-offres'>
                <VisibilitySensor partialVisiblity offset={{ top: -100 }} once>
                    {({ isVisible }) => (
                        <Spring
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? "translateX(0)"
                                    : "translateX(-50px)",
                            }}>
                            {(props) => (
                                <Link
                                    style={{ ...props }}
                                    to='/packs'
                                    onMouseLeave={() => setHover1(false)}
                                    onMouseEnter={() => setHover1(true)}
                                    className='btn-offres'>
                                    <div className='filtre-hover one' />
                                    <span>NOS PACKS</span>
                                </Link>
                            )}
                        </Spring>
                    )}
                </VisibilitySensor>
                <VisibilitySensor partialVisiblity offset={{ top: -100 }} once>
                    {({ isVisible }) => (
                        <Spring
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? "translateX(0)"
                                    : "translateX(-50px)",
                            }}>
                            {(props) => (
                                <Link
                                    style={{ ...props }}
                                    to='/prestations'
                                    onMouseLeave={() => setHover2(false)}
                                    onMouseEnter={() => setHover2(true)}
                                    className='btn-offres'>
                                    <div className='filtre-hover two' />
                                    <span>NOS PRESTATIONS</span>
                                </Link>
                            )}
                        </Spring>
                    )}
                </VisibilitySensor>
            </div>
            <img alt='background' src={bgScroll} />
        </StyledOffres>
    )
}
