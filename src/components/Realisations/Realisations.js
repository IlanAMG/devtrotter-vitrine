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
                    <a rel="noopener noreferrer" href='https://www.devtrotter.com' target='_blank' >
                        <div className='wrapper-img'>    
                            <img src="https://i.goopics.net/JEoGO.png" />
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href='https://whatslike-app.herokuapp.com/' target='_blank' >
                        <div className='wrapper-img'>    
                            <img src="https://i.goopics.net/X4Oja.png" />
                        </div>
                    </a>
                    <a rel="noopener noreferrer" href='https://yamiquinton.com/' target='_blank' >
                        <div className='wrapper-img'>    
                            <img src='https://i.goopics.net/OnZyl.png' />
                        </div>
                    </a>
                    <div className='wrapper-img'>
                        <img src="https://i.goopics.net/0DR83.png" />
                    </div>
                    <a rel="noopener noreferrer" href='https://ilanamzallag.com/' target='_blank' >
                        <div className='wrapper-img'>    
                            <img src='https://i.goopics.net/yaEJQ.png' />
                        </div>
                    </a>
                </Carousel>
            </section>
            <section className='categories'>
                <div className='img'  onMouseOver={(e) => handleHover(e, 0)} onMouseLeave={() => handleLeave(0)}>
                    <img className={hover[0] && 'scale'} alt='ecommerce' src='https://i.goopics.net/Kkwm3.jpg'/>
                    <div className={!hover[0] ? 'filtre-hover' : 'filtre-hover on'} >
                         <p>E-COMMERCE</p>
                    </div>
                </div>
                <div className='img' onMouseOver={(e) => handleHover(e, 1)} onMouseLeave={() => handleLeave(1)}>
                    <img className={hover[1] && 'scale'} alt='application' src='https://i.goopics.net/0DaWq.jpg'/>
                    <div className={!hover[1] ? 'filtre-hover' : 'filtre-hover on'}>
                         <p>APPLICATION</p>
                    </div>
                </div>
                <div className='img' onMouseOver={(e) => handleHover(e, 2)}  onMouseLeave={() => handleLeave(2)}>
                    <img className={hover[2] && 'scale'} alt='blog' src='https://i.goopics.net/VNmDV.jpg' />
                    <div className={!hover[2] ? 'filtre-hover' : 'filtre-hover on'} >
                         <p>BLOG</p>
                    </div>
                </div>
                <div className='img' onMouseOver={(e) => handleHover(e, 3)} onMouseLeave={() => handleLeave(3)}>
                    <img className={hover[3] && 'scale'} alt='sitevitrine' src='https://i.goopics.net/kdVXy.jpg'/>
                    <div className={!hover[3] ? 'filtre-hover' : 'filtre-hover on'}>
                         <p>SITE VITRINE</p>
                    </div>
                </div>
                <div className='img' onMouseOver={(e) => handleHover(e, 4)} onMouseLeave={() => handleLeave(4)}>
                    <img className={hover[4] && 'scale'} alt='socialnetwork' src='https://i.goopics.net/351Lj.jpg' />
                    <div className={!hover[4] ? 'filtre-hover' : 'filtre-hover on'} >
                         <p>RESEAU SOCIAL</p>
                    </div>
                </div>
            </section>
        </StyledRealisations>
    )
}
