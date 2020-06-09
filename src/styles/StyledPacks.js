import styled from 'styled-components'

const StyledPacks = styled.section`
    width: 100vw;
    height: 100vh;
    z-index: 50;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media screen and (max-width: 1080px) {
        video {
            max-height: 50% !important;
            max-width: 600px !important;
            min-height: 255.52px !important;
            min-width: 170.72px !important;
            width: 20% !important;
            margin: 0 5px 0 5px !important;
        }

        video.middle {
            max-height: 85% !important;
            max-width: 600px !important;
            min-height: 515.19px !important;
            min-width: 341.44px !important;
            width: 40% !important;
        }
    }
    @media screen and (max-width: 890px) {
        .container-h1 {
            width: 80%;
            display: flex; 
            align-items: center;
            justify-content: center;
        }
        .section-form section .container-h1 h1 {
            width: 100%;
            white-space: normal !important;
        }

        .section-form section {
            padding: 15px !important;
        }
    }
    @media screen and (max-width: 710px) {
        video {
            display: none;
        }

        video.middle {
            display: flex;
            max-height: 85% !important;
            max-width: 600px !important;
            min-height: 515.19px !important;
            min-width: 341.44px !important;
            width: 40% !important;
        }
        .container-h1packs h1 {
            font-size: 28px !important;
        }
        .btn-packs {
            bottom: 0;
            right: calc(50vw - 25px) !important;
            top: auto !important;
        }
        .section-form {
            width: 100vw !important;
            bottom: 0 !important;
            right: auto !important;
            top: auto !important;
            height: 0px;
            min-height: 0% !important;
        }
        .section-form label {
            margin-top: 5px !important;
        }
        .section-form .container-input {
            padding-top: 5px !important;
        }
        a {
            padding-left: 15px !important;
            top: 15px !important;
            left: 15px !important;
            height: 40px !important;
            width: 60px !important;
        }
    }

        .container-h1packs {
                width: 100vw;
                margin: 30px 0 30px 0;
                position: absolute;
                z-index: 1;
            }
        .container-h1packs h1 {
            font-size: 4.6em;
            color: white;
            text-align: center;
            line-height: 75px;
        }
        .bg {
            position: absolute;
            z-index: -1;
            min-height: 100vh;
        }

        .section-videos {
            padding-top: 50px;
            width: 97%;
            display: flex;
            height: 100vh;
            position: relative;
            align-items: center;
            justify-content: center;
        }

        video {
            max-height: 66%;
            margin: 0 10px 0 10px;
            border: 4px solid rgba(255,255,255,0.45);
            border-radius: 10px;
            -webkit-box-shadow: 0px 18px 38px -5px rgba(0,0,0,0.75);
            cursor: pointer;
            transition: 300ms;
            max-width: 342px;
            width: 30%;
        }

        video.middle {
            max-height: 75%;
            transition: 300ms;
            max-width: 387px;
            width: 33%;
            max-width: 387px;
        }

        .bar-progress {
            position: absolute;
            bottom: 20px;
            width: 90%;
            height: 30px;
            border: 1px solid white;
            display: flex;
            align-items: center;
        }

        .progress {
            margin-left: 2px;
            width: 66%;
            height: 20px;
            background: linear-gradient(89.81deg, rgba(40, 42, 125, 0.8) 23.95%, rgba(104, 59, 205, 0.8) 90.95%);
            transition: 600ms;
        }
        a {
            z-index: 10;
            display: flex;
            align-items: center;
            padding-left: 20px;
            position: absolute;
            top: 20px;
            left: 20px;
            height: 50px;
            width: 90px;
            background: linear-gradient(89.81deg, rgba(40, 42, 125, 0.8) 23.95%, rgba(104, 59, 205, 0.8) 90.95%);
            transition: 500ms;
        }
        a:hover {
            padding-left: 10px;
            background: linear-gradient(89.81deg, rgba(40, 42, 125, 0.8) 1.95%, rgba(104, 59, 205, 0.8) 99.95%);
            transition: 500ms;
        }

        .section-form {
            width: 0px;
            display: flex;
            position: absolute;
            background: rgba(18,18,18,0.95);
            right: 0;
            min-height: 100%;
            z-index: 20;
            transition: 500ms;
        }

        .btn-packs {
            background-color: rgba(18,18,18,0.95);
            height: 50px;
            width: 50px;
            position: absolute;
            right: 0px;
            top: calc(50vh - 25px);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            outline: none;
            transition: 500ms;
            z-index: 10;
        }

        .container-h1 {
            width: 100%;
            display: flex; 
            align-items: center;
            justify-content: center;
        }
`

export default StyledPacks