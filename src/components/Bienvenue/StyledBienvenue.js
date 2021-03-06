import styled from 'styled-components';

const StyledBienvenue = styled.section`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: #010006;
        overflow: hidden;
        width: 100vw;
        min-width: 100vw;
        position: relative;
        flex-direction: column;
        -webkit-box-shadow: 0px 3px 56px 4px rgba(0,0,0,0.85);
        z-index: 6;

        @media screen and (max-width:1100px) {
            
            .wrapper-video, video {
                width: 400px !important;
                height: 400px !important;
            }
            .container-quisommesnous {
                min-height: 400px !important;
            }
        }
        @media screen and (max-width:900px) {
            
            .container-h1 h1 {
                font-size: 3.2em !important;
            }
            .wrapper-video, video {
                width: 350px !important;
                height: 350px !important;
            }
            .container-quisommesnous {
                min-height: 350px !important;
            }
        }
        @media screen and (max-width:830px) {
            .adjectif {
                width: 23% !important;
            }
        }
        @media screen and (max-width:750px) {
            .container-quisommesnous {
                flex-direction: column-reverse;
            }
            .quisommesnous-txt {
                width: 80% !important;
                padding: 0 0 30px 0 !important;
            }
            .container-h1 {
                width: 80% !important;
            }
            .container-adjectif {
                flex-direction: column;
                width: 80% !important;
                height: auto !important;
            }
            .container-adjectif .adjectif {
                width: 100% !important;
                padding: 10px 0;
            }
        }
        @media screen and (max-width:450px) {
            .quisommesnous-txt {
                width: 90% !important;
            }
            .container-h1 {
                width: 90% !important;
            }
            .container-adjectif {
                width: 90% !important;
            }
            .container-h1 h1 {
                font-size: 2.7em !important;
            }
            h2 {
                font-size: 28px !important;
            }
        }

            .container-h1 {
                width: 60%;
                margin-top: 30px;
                z-index: 6;
            }
            h1 {
                font-size: 4.6em;
                color: white;
                text-align: center;
                line-height: 75px;
            }

            .container-quisommesnous {
                width: 100%;
                padding: 0 5%;
                align-self: center;
                align-items: center;
                min-height: 500px;
                display: flex;
                justify-content: space-around;
            }

            .quisommesnous-txt {
                width: 50%;
                padding: 30px 0;
                color: white;
            }

            .quisommesnous-txt p {
                text-align: justify;
            }
            .wrapper-video {
                margin: 10px;
                height: 500px;
                width: 500px;
                position: relative;
                z-index: 5;
            }

            video {
                position: absolute;
                user-select: none;
            }
            
            h2 {
                font-size: 36px;
                padding-bottom: 20px;
            }
            .container-adjectif {
                width: 90%;
                display: flex;
                height: 220px;
                justify-content: space-between;
                margin: 30px 0 10px 0;
            }
            @media (max-width:1150px) {
                .container-adjectif {
                    width: 98%;
                }
                p {
                    font-size: 14px;
                }
                h1 {
                    font-size: 3.9em;
                    line-height: 58px;
                }
                h3 {
                    font-size: 14px;
                    text-align: center;
                }
                .adjectif p {
                    margin: 10px;
                }
            }
            @media screen and (max-width:880px) {
                .adjectif p {
                    margin: 10px;
                    font-size: 12px;
                }
            }

            .adjectif {
                z-index: 7;
                cursor: pointer;
                height: auto;
                width: 20%;
                display: flex;
                flex-direction: column;
                align-items: center;
                color: white;
                transition: 500ms;
            }
            .adjectif:hover {
                transform: scale(1.06);
                transition: 500ms;
            }

            p {
                font-weight: 200;
            }
            .adjectif p {
                text-align: center;
                transition: 300ms;
                height: 0px;
                overflow: hidden;
            }

            hr {
                height: 0.08em;
                width: 100%;
                background: linear-gradient(89.81deg, rgba(40, 42, 125, 0.6) 43.95%, rgba(104, 59, 205, 0.6) 99.95%);
                margin: 8px;
            }
            h3 {
                font-size: 20px;
            }
`

export default StyledBienvenue