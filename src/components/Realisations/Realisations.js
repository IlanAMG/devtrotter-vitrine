import React, { useState, useContext } from 'react'
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "../../utils/VisibilitySensor";

import Context from '../../utils/context';
import StyledRealisations from './StyledRealisations';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../assets/carousel1.jpg'
import carousel2 from '../../assets/carousel2.jpg'
import carousel3 from '../../assets/carousel3.jpg'
import carousel4 from '../../assets/carousel4.jpg'
import carousel5 from '../../assets/carousel5.jpg'
import carousel6 from '../../assets/carousel6.jpg'
import real1 from '../../assets/real1.jpg'
import real2 from '../../assets/real2.jpg'
import real3 from '../../assets/real3.jpg'
import real4 from '../../assets/real4.jpg'
import real5 from '../../assets/real5.jpg'

export const Realisations = ({ isVisible }) => {
    const { realisations } = useContext(Context)
    const [hover, setHover] = useState([false, false, false, false, false])

    const handleHover = (e, i) => {
        let cloneHover = [...hover]
        cloneHover[i] = true
        setHover(cloneHover)
    }
    const handleLeave = (i) => {
        let cloneHover = [...hover]
        cloneHover[i] = false
        setHover(cloneHover)
    }

    return (
        <StyledRealisations ref={realisations} >
            <VisibilitySensor partialVisiblity offset={{ bottom: 400 }}>
                {({ isVisible }) => (
                    <Spring
                        to={{
                            opacity: isVisible ? 0 : 1,
                            transform: isVisible
                                ? "translateY(-100px)"
                                : "translateY(0)",
                        }}>
                        {(props) => (
                            <div style={{ ...props }} className='container-h1'>
                                <h1>RÉALISATIONS</h1>
                            </div>
                        )}
                    </Spring>
                )}
            </VisibilitySensor>
            <section className='caroussel'>
                {
                    isVisible &&
                    <Carousel stopOnHover={false} infiniteLoop={true} autoPlay={true} transitionTime={250} swipeScrollTolerance={50} swipeable={true} emulateTouch={true} >
                        <a rel="noopener noreferrer" href='https://www.alexiamzallag.com/' target='_blank' >
                            <div className='wrapper-img-caroussel'>
                                <img alt='carousel' src={carousel1} />
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href='https://www.fontvie.com/' target='_blank' >
                            <div className='wrapper-img-caroussel'>
                                <img alt='carousel' src={carousel2} />
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href='https://www.blog.devtrotter.com/' target='_blank' >
                            <div className='wrapper-img-caroussel'>
                                <img alt='carousel' src={carousel3} />
                            </div>
                        </a>
                        <div className='wrapper-img-caroussel'>
                            <img alt='carousel' src={carousel4} />
                        </div>
                        <a rel="noopener noreferrer" href='https://www.ilanamzallag.com/' target='_blank' >
                            <div className='wrapper-img-caroussel'>
                                <img alt='carousel' src={carousel5} />
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href='https://www.yamiquinton.com/' target='_blank' >
                            <div className='wrapper-img-caroussel'>
                                <img alt='carousel' src={carousel6} />
                            </div>
                        </a>
                    </Carousel>
                }
            </section>
            {window.innerWidth >= 750 && isVisible ?
                <section className='categories'>
                    <div className='img' onMouseOver={(e) => handleHover(e, 0)} onMouseLeave={() => handleLeave(0)}>
                        <img className={hover[0] ? 'scale' : null} alt='ecommerce' src={real1} />
                        <div className={!hover[0] ? 'filtre-hover' : 'filtre-hover on'} >
                            <p>E-COMMERCE</p>
                        </div>
                    </div>
                    <div className='img' onMouseOver={(e) => handleHover(e, 1)} onMouseLeave={() => handleLeave(1)}>
                        <img className={hover[1] ? 'scale' : null} alt='application' src={real2} />
                        <div className={!hover[1] ? 'filtre-hover' : 'filtre-hover on'}>
                            <p>APPLICATION</p>
                        </div>
                    </div>
                    <div className='img' onMouseOver={(e) => handleHover(e, 2)} onMouseLeave={() => handleLeave(2)}>
                        <img className={hover[2] ? 'scale' : null} alt='blog' src={real3} />
                        <div className={!hover[2] ? 'filtre-hover' : 'filtre-hover on'} >
                            <p>BLOG</p>
                        </div>
                    </div>
                    <div className='img' onMouseOver={(e) => handleHover(e, 3)} onMouseLeave={() => handleLeave(3)}>
                        <img className={hover[3] ? 'scale' : null} alt='sitevitrine' src={real4} />
                        <div className={!hover[3] ? 'filtre-hover' : 'filtre-hover on'}>
                            <p>SITE VITRINE</p>
                        </div>
                    </div>
                    <div className='img' onMouseOver={(e) => handleHover(e, 4)} onMouseLeave={() => handleLeave(4)}>
                        <img className={hover[4] ? 'scale' : null} alt='socialnetwork' src={real5} />
                        <div className={!hover[4] ? 'filtre-hover' : 'filtre-hover on'} >
                            <p>RESEAU SOCIAL</p>
                        </div>
                    </div>
                </section>
                :
                isVisible &&
                <Carousel stopOnHover={false} infiniteLoop={true} autoPlay={true} transitionTime={250} swipeScrollTolerance={50} swipeable={true} emulateTouch={true} >
                    <div className='wrapper-img' onMouseOver={(e) => handleHover(e, 0)} onMouseLeave={() => handleLeave(0)}>
                        <img className={hover[0] ? 'scale' : null} alt='sitevitrine' src={real1} />
                        <div className={!hover[0] ? 'filtre-hover' : 'filtre-hover on'} >
                            <p>E-COMMERCE</p>
                        </div>
                    </div>
                    <div className='wrapper-img' onMouseOver={(e) => handleHover(e, 1)} onMouseLeave={() => handleLeave(1)}>
                        <img className={hover[1] ? 'scale' : null} alt='sitevitrine' src={real2} />
                        <div className={!hover[1] ? 'filtre-hover' : 'filtre-hover on'} >
                            <p>APPLICATION</p>
                        </div>
                    </div>
                    <div className='wrapper-img' onMouseOver={(e) => handleHover(e, 2)} onMouseLeave={() => handleLeave(2)}>
                        <img className={hover[2] ? 'scale' : null} alt='sitevitrine' src={real3} />
                        <div className={!hover[2] ? 'filtre-hover' : 'filtre-hover on'} >
                            <p>BLOG</p>
                        </div>
                    </div>
                    <div className='wrapper-img' onMouseOver={(e) => handleHover(e, 3)} onMouseLeave={() => handleLeave(3)}>
                        <img className={hover[3] ? 'scale' : null} alt='sitevitrine' src={real4} />
                        <div className={!hover[3] ? 'filtre-hover' : 'filtre-hover on'}>
                            <p>SITE VITRINE</p>
                        </div>
                    </div>

                    <div className='wrapper-img' onMouseOver={(e) => handleHover(e, 4)} onMouseLeave={() => handleLeave(4)}>
                        <img className={hover[4] ? 'scale' : null} alt='sitevitrine' src={real5} />
                        <div className={!hover[4] ? 'filtre-hover' : 'filtre-hover on'} >
                            <p>RESEAU SOCIAL</p>
                        </div>
                    </div>
                </Carousel>
            }
        </StyledRealisations>
    )
}
