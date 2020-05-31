import styled from 'styled-components';

const StyledRealisations = styled.section`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    flex-direction: column;
    z-index: 5;

        .container-h1 {
            width: 60%;
            margin: 30px 0 30px 0;
            position: absolute;
            z-index: 5;
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.2) 70%, rgba(255,255,255,0) 100%);
        }

        h1 {
            font-size: 4.6em;
            color: white;
            text-align: center;
            line-height: 75px;
        }

        .caroussel {
            width: 100%;
            height: 60%;
            position: relative;
            background-color: #B3B2EB;
        }

        .slider-wrapper {
            height: 100%;
        }

        .wrapper-img {
            jusitfy-content: center;
            display: flex;
            align-items: center;
            position: relative;
            height: 60vh;
        }
        img {
            position: absolute;
        }

        .carousel-root {
            height: 100%;
        }
        .carousel.carousel-slider {
            height: 100%;
        }
        .carousel.carousel-slider .control-arrow{
            padding: 0 30px 0 30px !important ;
            z-index: 20 !important;
            background-color: rgba(0,0,0,0.3)
        }

        .dot {
            width: 14px !important;
            height: 14px !important;
        }
        .thumbs-wrapper.axis-vertical {
            display: none;
        }

        .categories {
            width: 100%;
            height: 40%;
            display: flex;
        }

        .img {
            height: 100%;
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            transition: 500ms;
            z-index: 5;
        }
        .img img, .scale {
            pointer-events: none;
        }

        img {
            width: 21vw;
            min-height: 51vh;
            z-index: 2;
            transition: 500ms;
        }
        .scale {
            transform: scale(1.1);
            transition: 500ms;
        }

        .filtre-hover {
            width: 100%;
            height: 0%;
            position: absolute;
            opacity: 0;
            visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 28px;
            transition: 500ms;
        }

        .filtre-hover.on {
            background-color: rgba(0,0,0,0.6);
            opacity: 1;
            visibility: visible;
            height: 100%;
            z-index: 6;
            transition: 500ms;
        }

`

export default StyledRealisations