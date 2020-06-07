import styled from 'styled-components'

const StyledQuiSommes = styled.section`
    display: flex;
    position: relative;
    justify-content: center;
    min-height: 800px !important;
    max-height: 1080px !important;
    width: 100vw;
    height: 100vh;
    background-color: #121212;
    -webkit-box-shadow: 0px 3px 56px 4px rgba(0,0,0,0.85);
    z-index: 7;
    overflow: hidden;

    @media screen and (max-width: 1000px) {
        height: 990px;
            .container-equipe {
                margin-bottom: 230px;
            }
            .container-equipe .wrapper-hexa:nth-child(1) {
                transform: translateX(50%) !important;
                z-index: 1;
            }
            .container-equipe .wrapper-hexa:nth-child(2) {
                transform: translateX(50%) !important;
                z-index: 1;
            }
            .container-equipe .wrapper-hexa:nth-child(3) {
                transform: translate(-100%, 76.3%) !important;
            }
    }

        .container-h1 {
            width: 100vw;
            margin: 30px 0 30px 0;
            position: absolute;
            z-index: 1;
        }
        h1 {
            font-size: 4.6em;
            color: white;
            text-align: center;
            line-height: 75px;
        }
        .bg {
            width: 100%;
            position: absolute;
            z-index: -1;
        }

        .container-equipe {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: center;
            position: relative;
        }

        .ici {
            color: black;
        }
`

export default StyledQuiSommes