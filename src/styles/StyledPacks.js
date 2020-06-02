import styled from 'styled-components'

const StyledPacks = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: #0a0a0a;
    z-index: 50;
    position: relative;
    max-height: 100vh;
    min-height: 920px;
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
    img {
        position: absolute;
        z-index: -1;
    }

    .section-videos {
        padding-top: 50px;
        width: 90%;
        display: flex;
        height: 100vh;
        position: absolute;
        align-items: center;
        justify-content: center;
    }

    .section-form {
        width: 25%;
        display: flex;
        position: absolute;
        display: none;
    }

    video {
        max-height: 66%;
        margin: 0 10px 0 10px;
        border: 4px solid white;
        border-radius: 10px;
        -webkit-box-shadow: 0px 18px 38px -5px rgba(0,0,0,0.75);
        cursor: pointer;
    }

    video.middle {
        max-height: 75%;
    }
`

export default StyledPacks