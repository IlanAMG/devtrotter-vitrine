import styled from 'styled-components'

const StyledPrestations = styled.section`
    width: 100vw;
    min-height: 100vh;
    z-index: 50;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    overflow: hidden;
        @media screen and (max-width: 890px) {
            .container-h1 {
                width: 80%;
                display: flex; 
                align-items: center;
                justify-content: center;
            }
            .section-form section .container-h1 h1 {
                width: 100%;
                white-space: normal !important;
            }

            .section-form section {
                padding: 15px !important;
            }
        }
        @media screen and (max-width: 910px) {
            .wrapper-sections {
                position: relative !important;
                margin-top: 150px;
                width: 100%;
                display: flex;
                -webkit-box-pack: space-around;
                -webkit-justify-content: space-around;
                -ms-flex-pack: space-around;
                flex-direction: column;
                padding: 0 1vw !important;
                z-index: 10;
            }
            .wrapper-sections h2 {
                margin-left: 15px !important;
            }
            .wrapper-sections .container-web {
                padding-right: 0 !important;
                height: 600px;
                width: 100%;
                border-left: none;
                border-bottom: 0.05em solid rgba(255, 255, 255, 0.6);
                margin-bottom: 20px;
            }
            .wrapper-sections .container-design {
                padding-right: 0 !important;
                height: 300px;
                width: 100%;
                margin-bottom: 150px;
                border-left: none;
            }
        }

        @media screen and (max-width: 710px) {
            .container-h1prest h1 {
                font-size: 28px !important;
            }
            .btn-prest {
                bottom: 0;
                right: calc(50vw - 25px) !important;
                top: auto !important;
                z-index: 16 !important;
            }
            .section-form {
                width: 100vw !important;
                bottom: 0 !important;
                right: auto !important;
                top: auto !important;
                height: 0px;
                min-height: 0% !important;
            }
            .section-form label {
                margin-top: 5px !important;
            }
            .section-form .container-input {
                padding-top: 5px !important;
            }
            a {
                padding-left: 15px !important;
                top: 15px !important;
                left: 15px !important;
                height: 40px !important;
                width: 60px !important;
            }
        }
        @media screen and (max-width: 570px) {
            .wrapper-sections .container-web {
                height: 1200px;
            }
            .wrapper-sections .container-design {
                height: 600px;
            }
            .bg {
                height: 100%;
                left: 0 !important;
                position: absolute;
            }
            .container-items p {
                font-size: 18px !important;
            }
        }

    .container-h1prest {
            width: 100vw;
            margin: 30px 0 30px 0;
            position: absolute;
            z-index: 1;
        }
    .container-h1prest h1 {
        font-size: 4.6em;
        color: white;
        text-align: center;
        line-height: 75px;
    }
    .bg {
        position: absolute;
        z-index: -1;
        min-height: 100vh;
    }

    a {
        z-index: 10;
        display: flex;
        align-items: center;
        padding-left: 20px;
        position: absolute;
        top: 20px;
        left: 20px;
        height: 50px;
        width: 90px;
        background: linear-gradient(89.81deg, rgba(40, 42, 125, 0.8) 23.95%, rgba(104, 59, 205, 0.8) 90.95%);
        transition: 500ms;
    }
    a:hover {
        padding-left: 10px;
        background: linear-gradient(89.81deg, rgba(40, 42, 125, 0.8) 1.95%, rgba(104, 59, 205, 0.8) 99.95%);
        transition: 500ms;
    }
    
    .section-form {
        width: 0px;
        display: flex;
        position: fixed;
        background: rgba(18,18,18,0.95);
        right: 0;
        min-height: 100vh;
        z-index: 20;
        transition: 500ms;
    }

    .btn-prest {
        background-color: rgba(18,18,18,0.95);
        height: 50px;
        width: 50px;
        position: fixed;
        right: 0px;
        top: calc(50vh - 25px);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        outline: none;
        transition: 500ms;
        z-index: 10;
    }

    .wrapper-sections {
        position: absolute;
        bottom: 12%;
        height: calc(100% - 240px);
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 0 3vw;
        z-index: 10;
    }

    .container-web {
        height: 100%;
        border-left: 0.05em solid rgba(255, 255, 255, 0.6);
        width: 66%;
        padding: 0 2vw;
        display: flex;
        flex-direction: column;
    }
    .container-design {
        height: 100%;
        border-left: 0.05em solid rgba(255, 255, 255, 0.6);
        width: 33%;
        padding: 0 2vw;
        display: flex;
        flex-direction: column;
    }
    .container-h2 {
        margin-bottom: 20px;
        width: 100%;
    }

    .container-h2 h2 {
        color: white;
        font-size: 36px;
    }
    .container-items {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 90%;
    }

    .wrapper-btn {
        position: absolute;
        bottom: 0;
        height: 12%;
        width: 100%;
        z-index: 15;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .wrapper-btn button {
        color: #ffffff !important;
        text-transform: uppercase;
        text-decoration: none;
        background: #494949;
        padding: 10px;
        border: 1px solid #ffffff !important;
        display: inline-block;
        transition: all 0.4s ease 0s;
        cursor: pointer;
    }
    .wrapper-btn button:hover {
        color: rgb(228, 249, 255) !important;
        background: rgba(40, 42, 125, 0.7);
        transition: all 0.4s ease 0s;
        border-color: rgba(40, 42, 125, 0.3) !important;
    }
    .wrapper-btn button:focus {
        outline: 0 !important;
    }
    .container-h1 {
        width: 100%;
        display: flex; 
        align-items: center;
        justify-content: center;
    }
    
`

export default StyledPrestations