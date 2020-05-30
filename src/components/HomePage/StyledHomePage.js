import styled from 'styled-components';

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
            z-index: 8;
        }

        .container-titres {
            width: 930px;
            height: 180px;
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.041053921568627416) 30%, rgba(255,255,255,0.04) 70%, rgba(255,255,255,0) 100%);
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

`

export default StyledHomePage