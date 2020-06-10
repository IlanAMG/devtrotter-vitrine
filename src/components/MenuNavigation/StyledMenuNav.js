import styled from 'styled-components'

const StyledMenuNav = styled.section`
    position: fixed;
    width: 100vw;
    z-index: 20;
    display: flex;
    top: 0;
    transition: 1000ms;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0px;
    visibility: hidden;
    opacity: 0;
    

        .bg {
            position: absolute;
            opacity: 0.99;
            min-height: 100%;
            transition: opacity 1s;
        }
        .filtre {
            background: black;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            opacity: 0.45;
            transition: 20ms;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            z-index: 11;
            flex-wrap: wrap;
        }
        h1 {
            font-size: 130px;
            line-height: 120px;
            color: white;
            width: 100%;
            padding: 30px;
        }
        .devtrotter {
            width: 32%;
            z-index:15;
        }
        .nav {
            width: 46%;
            height: 600px;
            position: relative
        }
        .container-constelnav {
            position: absolute;
            left: 0;
            height: 100%;
        }
        @media screen and (max-width: 970px) {
            .nav .container-constelnav svg {
                display: none;
            }
            .nav {
                width: 80%;
            }
            .nav li {
                font-size: 35px !important;
            }
        }
        @media screen and (max-width: 560px) {
            .nav li {
                font-size: 25px !important;
            }
        }
        @media screen and (max-width: 430px) {
            .nav li {
                font-size: 19px !important;
            }
        }


        .wrapper-logo {
            width: 32%;
            height: 480px;
            display: flex;
            flex-direction: column;
            justif-content: center;
            position: relative;
        }
        .logo {
            width: 50%;
            max-width: 220px;
            cursor: pointer;
        }
        .separator {
            height: 480px;
            width: 0.05em;
            background-color: rgba(255, 255, 255, 0.6);
            z-index: 11;
        }
        .container-social {
            width: 100%;
            display: flex;
            position: absolute;
            bottom: 0;
            align-items: center;
            justify-content: space-around;
            height: 31px;
            color: white;
        }
        .icon {
            width: 31px;
            height: 31px;
            color: white;
            cursor: pointer;
        }
        .icon:hover {
            transform: scale(1.1)
        }
        ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }
        ul > li {
            color: white;
            font-size: 28px;
            width: 130%;
            text-align: center;
            padding: 20px 0px 20px 0px;
            transition: 500ms;
            cursor: pointer;
        }

        @media screen and (max-width: 1300px) {
            ul > li {
                font-size: 21px !important;
            }
            .container-constelnav svg {
                left: -80px !important;
            }
        }
        @media screen and (max-width: 1150px) {
            ul > li {
                font-size: 21px !important;
            }
            .container-constelnav svg {
                left: -80px !important;
            }
            .devtrotter h1 {
                font-size: 110px !important;
                line-height: 90px !important;
            }
        }
        @media screen and (max-width: 1030px) {
            .devtrotter h1 {
                font-size: 90px !important;
                line-height: 75px !important;
            }
        }
        @media screen and (max-width: 930px) {
            ul > li {
                font-size: 19px !important;
            }
            .container-constelnav svg {
                left: -85px !important;
            }
        }
        @media screen and (max-width: 970px) {
            .wrapper-logo {
                display: none;
            }
            .devtrotter {
                display: none;
            }
        }

        ul > li:hover {
            margin-left: 70px;
            transition: 500ms;
        }
        .container-constelnav svg {
            position: absolute;
            left: -60px;
            pointer-events: none;
        }
        circle {
            transition: 400ms;
        }
    `

export default StyledMenuNav