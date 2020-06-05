import React, { useContext } from 'react'
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../../utils/VisibilitySensor";

import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaRegNewspaper } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

import bgFooter from '../../assets/bgFooter.jpg';
import StyledFooter from './StyledFooter';
import Context from '../../utils/context';
import { FormContact } from '../FormContact/FormContact'

export const Footer = () => {
    const { nouscontacter } = useContext(Context)

    return (
        <StyledFooter ref={nouscontacter}>
            <img alt='background' className='bg' src={bgFooter} />
            <section className='container left'>
                <VisibilitySensor partialVisiblity offset={{ bottom: -30 }} once>
                    {({ isVisible }) => (
                        <Spring
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? "translateY(0)"
                                    : "translateY(-100px)",
                            }}>
                            {(props) => (
                                <div style={{ ...props }} className='container-h1'>
                                    <h1>DESIGNED IN THE USA<br />CRAFTED IN FRANCE<br />SHOWCASED TO THE WORLD</h1>
                                </div>
                            )}
                        </Spring>
                    )}
                </VisibilitySensor>
                <div className='wrapper social'>
                    <a rel="noopener noreferrer" href='https://www.devtrotter.com/' target='_blank' ><FaRegNewspaper className='icon blog' /></a>
                    <a rel="noopener noreferrer" href='https://twitter.com/DevTrotter_Pro' target='_blank' ><AiOutlineTwitter className='icon' /></a>
                    <a rel="noopener noreferrer" href='https://www.youtube.com/channel/UCHuGcYX0jsbCA0lzFj1DmbA' target='_blank' ><AiFillYoutube className='icon' /></a>
                    <a rel="noopener noreferrer" href='https://www.instagram.com/dev.trotter/' target='_blank' ><AiFillInstagram className='icon' /></a>
                    <a href='mailto:devtrotter.info@gmail.com'><IoIosMail className='icon' /></a>
                </div>
                <VisibilitySensor partialVisiblity offset={{ bottom: -400 }} once>
                    {({ isVisible }) => (
                        <Spring
                            to={{
                                opacity: isVisible ? 1 : 0
                            }}>
                            {({ opacity }) => (
                                <div style={{ opacity }} className='wrapper signature'>
                                    <small>Developed and Designed<br />By Dev'Trotter<br />© Copyright All right reserved 2020</small>
                                </div>
                            )}
                        </Spring>
                    )}
                </VisibilitySensor>
            </section>
            <div className='separator' />
            <VisibilitySensor partialVisiblity offset={{ bottom: -400 }} once>
                {({ isVisible }) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 1 : 0,
                        }}>
                        {({opacity}) => (
                            <section style={{ opacity }} className='container right'>
                                <FormContact title={'NOUS CONTACTER'} />
                            </section>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
        </StyledFooter>
    )
}
