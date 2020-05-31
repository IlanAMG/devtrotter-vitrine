import styled from 'styled-components';

const StyledBtnMenu = styled.div`
    position: fixed;
    z-index: 20;
    width: 35px;
    height: 62px;
    top: 10px;
    left: 30px;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    align-self: flex-start;
    justify-self: flex-start;
    cursor: pointer;
    transform: ${({rotate}) => `rotateY(${rotate}deg)` };

        .logo, .wrapper-menu {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    }

        .logo {
            position: fixed;
            width: 35px;
            height: 62px;
            z-index: 1;
            background-image: radial-gradient(rgba(0,0,0,0.01), rgba(0,0,0,0), rgba(0,0,0,0));
            -webkit-transition: transition 1s;
        }

        .wrapper-menu {
            display: flex;
            justify-content: center;
            transition: 500ms;
            z-index: 10;
            position: fixed;
            top: 17px;
            height: 35px;
            width: 35px;
            transform: rotateY(180deg);
        }

        .ligne {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 29px;
            height: 0.21em;
            transition: all 0ms 300ms;
            background: linear-gradient(90deg, #F8F8F8 50%, rgba(248, 248, 248, 0) 100%);
        }
        .ligne::before {
            content: '';
            background: linear-gradient(90deg, #F8F8F8 50%, rgba(248, 248, 248, 0) 100%);
            position: absolute;
            bottom: 8px;
            width: 35px;
            height: 0.21em;
            transition: bottom 300ms 300ms ease, transform 300ms ease;
        }
        .ligne::after {
            content: '';
            background: linear-gradient(90deg, #F8F8F8 50%, rgba(248, 248, 248, 0) 100%);
            position: absolute;
            top: 8px;
            width: 20px;
            height: 0.21em;
            transition: top 300ms 300ms ease, transform 300ms ease;
        }

        .wrapper-menu.wrapper-croix .ligne::before{
            bottom: 0;
            transform: rotate(-45deg);
            background: linear-gradient(89.84deg, rgba(248, 248, 248, 0.15) 0.29%, #F8F8F8 23.58%, #F8F8F8 52.7%, rgba(255, 255, 255, 0.85) 78.1%, rgba(248, 248, 248, 0) 101.92%);
            transition: bottom 300ms ease, transform 300ms 300ms ease;
        }

        .wrapper-menu.wrapper-croix .ligne {
            background: transparent;
            transition: 10ms;
            left: 14px;
        }

        .wrapper-menu.wrapper-croix .ligne::after{
            top: 0;
            width: 35px;
            transform: rotate(45deg);
            background: linear-gradient(89.84deg, rgba(248, 248, 248, 0.15) 0.29%, #F8F8F8 23.58%, #F8F8F8 52.7%, rgba(255, 255, 255, 0.85) 78.1%, rgba(248, 248, 248, 0) 101.92%);
            transition: top 300ms ease, transform 300ms 300ms ease;
        }
`

export default StyledBtnMenu