import styled, { keyframes } from 'styled-components';
const arrow = keyframes`
    from,
    to {
        bottom: 15px;
    }
    50% {
        bottom: 35px;
    }
`

const StyledHomePage = styled.section`

    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');

    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    max-height: 100vh;
    position: relative;
    ${'' /* overflow: hidden; */}

        @media (min-width:970px) {
            height: calc(100vw * 0.5628205128205128);
            iframe {
                height: calc(130vw * 0.5628205128205128);
            }
        }

        @media screen and (max-width: 970px) {
            height: 100vh !important;
            width: 100vw;  
        }
        @media screen and (max-width: 830px) {
            .container-titres {
                width: 90% !important;
            }
            .container-titres h1 {
                font-size: 3.4em !important;
            }
            .container-titres h3 {
                font-size: 16px !important;
            }
            .wrapper-h3 {
                margin-left: 15% !important;
            }
        }
        @media screen and (max-width: 630px) {
            .container-titres {
                width: 90% !important;
            }
            .container-titres h1 {
                font-size: 2.6em !important;
            }
            .container-titres h3 {
                font-size: 12px !important;
            }
            .container-titres h2 {
                font-size: 12px !important;
            }
            .wrapper-h3 {
                margin-left: 14% !important;
            }
        }

        @media screen and (max-width: 560px) {
            .wrapper-h3 {
                margin-left: 12% !important;
            }
        }
        @media screen and (max-width: 480px) {
            .wrapper-h3 {
                align-self: center !important;
                margin-left: 0px !important;
            }
        }

        iframe {
            position: fixed;
            z-index: -1;
        }

        .bg {
            position: absolute;
            pointer-events: none;
            top: calc(-15vw * 0.5628205128205128);
            left: 0;
        }

        .bgPic {
            align-self: center;
            position: fixed;
            width: 100vw;
            min-height: 100vh;
            z-index: 1;
            top: 0;
        }
        
        .bgPic2 {
            align-self: center;
            position: fixed;
            min-height: 100vh;
            z-index: 1;
            top: 0;
            max-height: calc(110vw * 0.5625) !important;
            width: auto !important;
            bottom: 0;
            right: 0;
            left: -30vw;
        }

        .container-constel {
            position: fixed;
            right: 10px;
            z-index: 9;
            height: 435px;
            display: flex;
            align-items: center;
        }

        .btn {
            position: absolute;
            width: 100%;
            height: 50px;
            z-index: 7;
            cursor: pointer;
        }
        .btn1 {
            top: 0;
        }
        .btn2 {
            top: 62px;
        }
        .btn3 {
            top: 125px;
        }
        .btn4 {
            top: 188px;
        }
        .btn5 {
            top: 251px;
        }
        .btn6 {
            top: 316px;
        }
        .btn7 {
            top: 379px;
        }

        .container-titres {
            width: 930px;
            height: 180px;
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.2) 70%, rgba(255,255,255,0) 100%);
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .container-titres h1 {
            color: #FFFFFF;
            font-size: 4.4em;
            text-align: center;
        }
        .container-titres h2, h3 {
            color: #FFFFFF;
            font-size: 18px;
            font-family: 'Source sans pro', sans-serif;
            font-weight: 200;
        }
        .wrapper-h3 {
            display: flex;
            flex-direction: column;
            align-self: start;
            margin-left: 20%;
        }
        .separator-h3 {
            margin-top: 5px;
            height: 2px;
            background: radial-gradient(50% 50% at 50% 50%, rgba(194, 141, 245, 0.81) 0%, rgba(125, 104, 182, 0) 100%);
        }

        span {
            position: absolute;
            right: 20px;
            top: 20px;
            color: white;
            font-family: 'Source sans pro', sans-serif;
            font-weight: 100;
            font-size: 24px;
            cursor: pointer;
            z-index: 10;
        }
        span:hover {
            color: rgba(194, 141, 245, 0.81);
        }

        circle {
            cursor: pointer;
        }

        .scroll {
            display: flex;
            position: absolute;
            bottom: 20px;
            animation: ${arrow} 3s infinite ease-out;
            cursor: pointer;
            transition: 500ms;
        }
        .scroll:hover {
            transform: scale(1.08);
            transition: 500ms;
        }

`

export default StyledHomePage