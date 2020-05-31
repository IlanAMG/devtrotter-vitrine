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
            width: 100%;
            position: absolute;
            opacity: 0.99;
            height: 100%;
            transition: opacity 1s;
        }
        .filtre {
            background: linear-gradient(180deg, rgba(34, 52, 77, 0.96) 27.78%, rgba(0, 0, 0, 0.92) 133.32%, rgba(27, 31, 54, 0) 133.33%);
            width: 100%;
            height: 100%;
            position: absolute;
            opacity: 0.6;
            transition: 500ms;
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
        .container-constel {
            position: absolute;
            left: 0;
            height: 100%;
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
            background-color: rgba(255, 255, 255, 0.1);
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
        ul > li:hover {
            margin-left: 70px;
            transition: 500ms;
        }
        .container-constel svg {
            position: absolute;
            left: -60px;
            pointer-events: none;
        }
        circle {
            transition: 400ms;
        }
    `

export default StyledMenuNav