import styled, { keyframes } from 'styled-components';
// const arrow = keyframes`
//     from,
//     to {
//         bottom: 15px;
//     }
//     50% {
//         bottom: 35px;
//     }
// `

const StyledHomePage = styled.section`

    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    position: relative;

        .bg {
            position: absolute;
            pointer-events: none;
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
            margin-left: 170px;
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
            ${'' /* animation: ${arrow} 3s infinite ease-out; */}
            cursor: pointer;
            transition: 500ms;
        }
        .scroll:hover {
            transform: scale(1.08);
            transition: 500ms;
        }

`

export default StyledHomePage