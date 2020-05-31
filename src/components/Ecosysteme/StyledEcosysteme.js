import styled from 'styled-components'

const StyledEcosysteme = styled.section`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    min-height: 100vh;

        .bg {
            position: absolute;
            z-index: -1;
            min-width: 100%;
            min-height: 100vh;
            opacity: 0.5;
        }
        .container-h1 {
            width: 60%;
            margin-top: 30px;
        }
        h1 {
            font-size: 4.6em;
            color: white;
            text-align: center;
            line-height: 75px;
        }
        .container-svg {
            height: 100%;
            width: 150%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
        }

        .container-icons {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        svg {
            z-index: 11;
        }

        .icon {
            width: 60px;
            height: 60px;
            color: white;
            cursor: pointer;
            position: absolute;
            left: 27px;
            top: 160px;
            z-index: 12;
            transition: 800ms;
            opacity: 0.7
        }
        .icon:hover {
            transform: scale(1.1);
            transition: 800ms;
            opacity: 1;
        }
        .logo {
            position: absolute;
            width: 22%;
            top: 140px;
            z-index: 10;
        }

`

export default StyledEcosysteme