import styled from 'styled-components'

const StyledEcosysteme = styled.section`
    height: 100vh;
    min-height: 800px !important;
    width: 100vw;
    max-height: 1080px !important;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    min-height: 100vh;

        .container-h1 {
            width: 60%;
            margin-top: 30px;
            z-index: 2;
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

        #svg {
            z-index: 11;
        }

        .icon {
            width: 60px;
            height: 60px;
            color: white;
            cursor: pointer;
            position: absolute;
            z-index: 12;
            transition: 800ms;
            opacity: 0.7
        }
        .twitter {
            left: 27px;
            top: 160px;
        }
        .ytb {
            left: 75px;
            top: 335px;
        }

        .bubble {
            left: 160px;
            top: 30px;
        }
        .forum-span {
            left: 108px;
            z-index: 13;
            top: -30px;
            background-color: rgba(255, 255, 255, 0.3);
            color: black;
            padding: 5px;
            font-size: 11px;
            position: absolute;
            opacity: 0;
            transition: opacity 500ms ease-out;
        }
        .formation-span {
            right: -50px;
            z-index: 13;
            top: 100px;
            background-color: rgba(255, 255, 255, 0.3);
            color: black;
            padding: 5px;
            font-size: 11px;
            position: absolute;
            opacity: 0;
            transition: opacity 500ms ease-out;
        }
        .blog-span {
            top: -30px;
            z-index: 13;
            right: 108px;
            background-color: rgba(255, 255, 255, 0.3);
            color: black;
            padding: 5px;
            font-size: 11px;
            position: absolute;
            opacity: 0;
            transition: opacity 500ms ease-out;
        }

        .blog {
            right: 160px;
            top: 30px;
        }

        .formation {
            right: 27px;
            top: 160px;
        }

        .insta {
            right: 75px;
            top: 335px;
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