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
            position: relative;
        }

        .container-icons {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        #svg {
            z-index: 11;
        }
        @media screen and (max-width: 900px) {
            .icon {
                width: 42px !important;
                height: 42px !important;
            }
            .forum-span {
                top: -30px !important;
                left: 9% !important;
            }
            .formation-span {
                top: 17% !important;
                right: -10% !important;
            }
            .blog-span {
                top: -30px !important;
                right: 9% !important;
            }
        }
        @media screen and (min-width: 901px) {
            .icon {
                width: 60px !important;
                height: 60px !important;
            }
            .forum-span {
                left: 13.36% !important;
                top: -5.88% !important;
            }
            .formation-span {
                right: -4.48% !important;
                top: 19.6% !important;
            }
            .blog-span {
                top: -30px !important;
                right: 13.36% !important;
            }
        }

        .icon {
            color: white;
            cursor: pointer;
            position: absolute;
            z-index: 12;
            transition: 800ms;
            opacity: 0.7
        }
        .twitter {
            left: 3.34%;
            top: 31.37%;
        }
        .ytb {
            left: 9.28%;
            top: 65.68%;
        }

        .bubble {
            left: 19.8%;
            top: 5.88%;
        }
        .forum-span {
            z-index: 13;
            background-color: rgba(255, 255, 255, 0.3);
            color: black;
            padding: 5px;
            font-size: 11px;
            position: absolute;
            opacity: 0;
            transition: opacity 500ms ease-out;
        }
        .formation-span {
            z-index: 13;
            background-color: rgba(255, 255, 255, 0.3);
            color: black;
            padding: 5px;
            font-size: 11px;
            position: absolute;
            opacity: 0;
            transition: opacity 500ms ease-out;
        }
        .blog-span {
            z-index: 13;
            background-color: rgba(255, 255, 255, 0.3);
            color: black;
            padding: 5px;
            font-size: 11px;
            position: absolute;
            opacity: 0;
            transition: opacity 500ms ease-out;
        }

        .blog {
            right: 19.8%;
            top: 5.88%;
        }

        .formation {
            right: 3.34%;
            top: 31.37%;
        }

        .insta {
            right: 9.28%;
            top: 65.68%;
        }

        .icon:hover {
            transform: scale(1.1);
            transition: 800ms;
            opacity: 1;
        }
        .logo {
            position: absolute;
            width: 22%;
            top: 27.45%;
            z-index: 10;
        }

        @media screen and (max-width: 670px) {
            .wrapper-icon-min {
                width: 34% !important;
                height: calc(90vw * 0.34);
                cursor: pointer;
                z-index: 12;
                transition: 800ms;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid rgba(255,255,255, 0.6);
                position: relative;
                border-radius: 50%;
                margin-bottom: 20px;
            }

            .icon-min {
                width: 60%;
                height: 60%;
                color: white;
                position: absolute;
            }
            .wrapper-icon-min:hover {
                transform: scale(1.1);
                transition: 800ms;
                opacity: 1;
            }
            
            .container-icons-min {
                position: absolute;
                display: flex;
                width: 82vw !important;
                height: 90% !important;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-around;
            }
            .forum-span.min {
                top: -40px !important;
                width: 110% !important;
                left: -5% !important;
                right: 0 !important;
                text-align: center;
            }
            .formation-span.min {
                top: -40px !important;
                width: 110% !important;
                left: -5% !important;
                right: 0 !important;
                text-align: center;
            }
            .blog-span.min {
                top: -40px !important;
                width: 110% !important;
                left: -5% !important;
                right: 0 !important;
                text-align: center;
            }
        }

`

export default StyledEcosysteme