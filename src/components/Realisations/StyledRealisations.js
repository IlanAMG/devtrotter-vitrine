import styled from 'styled-components';

const StyledRealisations = styled.section`
    display: flex;
    align-items: center;
    width: 100vw;
    position: relative;
    flex-direction: column;
    z-index: 5;
    overflow: hidden;

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

        @media screen and (max-width: 650px) {
            .caroussel {
                max-height: calc(100vw * 0.5625) !important;
            }
            .wrapper-img-caroussel {
                max-height: calc(100vw * 0.5625) !important;
            }
            .wrapper-img-caroussel img {
                max-height: calc(100vw * 0.5625) !important;
            }
        }

        .caroussel {
            max-height: calc(95vw * 0.5628205128205128);

            overflow: hidden;
        }

        .control-arrow {
            display: none;
        }
        .carousel-status {
            display: none;
        }

        .dot {
            width: 16px !important;
            height: 16px !important;
            outline: none;
        }

        .wrapper-img-caroussel {
            max-height: calc(95vw * 0.5628205128205128);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .wrapper-img-caroussel img {
            height: 100%;
        }
        .wrapper-img {
            max-height: calc(95vw * 0.5628205128205128);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .wrapper-img img {
            height: 100%;
        }

        .thumbs-wrapper.axis-vertical {
            display: none;
        }

        .categories {
            width: 100%;
            height: 40%;
            display: flex;
        }
        .carousel button {
            display:none;
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
        .categories img {
            width: 21vw;
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
       
        .filtre-hover.on p {
            text-align: center;
        }

        .wrapper-img .filtre-hover.on p {
            font-size: 28px !important;
        }
        .wrapper-img .filtre-hover.on {
            transition: 0ms !important;
        }
        .wrapper-img .filtre-hover {
            transition: 0ms !important;
        }

        @media (max-width:1020px) {
            p {
                font-size: 15px;
            }
        }
`

export default StyledRealisations