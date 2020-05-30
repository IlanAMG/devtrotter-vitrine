import React, { useState, useContext } from 'react'
import Context from '../../utils/context';
import StyledRealisations from './StyledRealisations';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const Realisations = () => {
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
            <div className='container-h1'>
                <h1>RÉALISATIONS</h1>
            </div>
            <section className='caroussel'>
                <Carousel stopOnHover={false} infiniteLoop={true} autoPlay={true} transitionTime={250} swipeScrollTolerance={50} swipeable={true} emulateTouch={true} >
                    <div className='wrapper-img'>
                        <img src="https://i.goopics.net/JEoGO.png" />
                    </div>
                    <div className='wrapper-img'>
                        <img src="https://i.goopics.net/yaEJQ.png" />
                    </div>
                    <div className='wrapper-img'>
                        <img src="https://i.goopics.net/OnZyl.png" />
                    </div>
                    <div className='wrapper-img'>
                        <img src="https://i.goopics.net/0DR83.png" />
                    </div>
                </Carousel>
            </section>
            <section className='categories'>
                <div className='img'  onMouseOver={(e) => handleHover(e, 0)}>
                    <img className={hover[0] && 'scale'} alt='ecommerce' src='https://i.goopics.net/Kkwm3.jpg'/>
                    <div className={!hover[0] ? 'filtre-hover' : 'filtre-hover on'}  onMouseOut={() => handleLeave(0)}>
                         <p>E-COMMERCE</p>
                    </div>
                </div>
                <div className='img' onMouseOver={(e) => handleHover(e, 1)}>
                    <img className={hover[1] && 'scale'} alt='application' src='https://i.goopics.net/0DaWq.jpg'/>
                    <div className={!hover[1] ? 'filtre-hover' : 'filtre-hover on'}  onMouseLeave={() => handleLeave(1)}>
                         <p>APPLICATION</p>
                    </div>
                </div>
                <div className='img' onMouseOver={(e) => handleHover(e, 2)}>
                    <img className={hover[2] && 'scale'} alt='blog' src='https://i.goopics.net/VNmDV.jpg' />
                    <div className={!hover[2] ? 'filtre-hover' : 'filtre-hover on'}  onMouseLeave={() => handleLeave(2)}>
                         <p>BLOG</p>
                    </div>
                </div>
                <div className='img' onMouseOver={(e) => handleHover(e, 3)} >
                    <img className={hover[3] && 'scale'} alt='sitevitrine' src='https://i.goopics.net/kdVXy.jpg'/>
                    <div className={!hover[3] ? 'filtre-hover' : 'filtre-hover on'} onMouseLeave={() => handleLeave(3)}>
                         <p>SITE VITRINE</p>
                    </div>
                </div>
                <div className='img' onMouseOver={(e) => handleHover(e, 4)}>
                    <img className={hover[4] && 'scale'} alt='socialnetwork' src='https://i.goopics.net/351Lj.jpg' />
                    <div className={!hover[4] ? 'filtre-hover' : 'filtre-hover on'}  onMouseLeave={() => handleLeave(4)}>
                         <p>RESEAU SOCIAL</p>
                    </div>
                </div>
            </section>
        </StyledRealisations>
    )
}
