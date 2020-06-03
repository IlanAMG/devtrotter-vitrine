import styled from 'styled-components'

const StyledPacks = styled.section`
    width: 100vw;
    height: 100vh;
    z-index: 50;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;

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
        position: absolute;
        z-index: -1;
        width: 100vw;
    }

    .section-videos {
        padding-top: 50px;
        width: 90%;
        display: flex;
        height: 100vh;
        position: relative;
        align-items: center;
        justify-content: center;
    }

    video {
        max-height: 66%;
        margin: 0 10px 0 10px;
        border: 4px solid rgba(255,255,255,0.45);
        border-radius: 10px;
        -webkit-box-shadow: 0px 18px 38px -5px rgba(0,0,0,0.75);
        cursor: pointer;
        transition: 300ms;
    }

    video.middle {
        max-height: 75%;
        transition: 300ms;
    }

    .bar-progress {
        position: absolute;
        bottom: 20px;
        width: 90%;
        height: 30px;
        border: 1px solid white;
        display: flex;
        align-items: center;
    }

    .progress {
        margin-left: 2px;
        width: 66%;
        height: 20px;
        background: linear-gradient(89.81deg, rgba(40, 42, 125, 0.8) 23.95%, rgba(104, 59, 205, 0.8) 90.95%);
        transition: 600ms;
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
        position: absolute;
        background: rgba(18,18,18,0.95);
        right: 0;
        height: 100%;
        z-index: 20;
        transition: 500ms;
    }

    button {
        background-color: rgba(18,18,18,0.95);
        height: 50px;
        width: 50px;
        position: absolute;
        right: 0px;
        top: calc(50vh - 25px);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        outline: none;
        transition: 500ms;
    }
`

export default StyledPacks