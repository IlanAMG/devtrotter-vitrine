import styled from 'styled-components';

const StyledBienvenue = styled.section`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: #010006;
        overflow: hidden;
        width: 100vw;
        min-height: 100vh;
        position: relative;
        flex-direction: column;
        -webkit-box-shadow: 0px 3px 56px 4px rgba(0,0,0,0.85);
        z-index: 6;

        img {
            position: absolute;
            z-index: -1;
            height: 120%;
            right: 0;
        }

        .container-h1 {
            width: 60%;
            margin: 30px 0 30px 0;
        }
        h1 {
            font-size: 4.6em;
            color: white;
            text-align: center;
            line-height: 75px;
        }

        .container-quisommesnous {
            width: 70%;
            align-self: center;
            align-items: center;
            min-height: 500px;
            display: flex;
            justify-content: space-around;
        }

        .quisommesnous-txt {
            width: 50%;
            height: 100%;
            color: white;
            text-align: justify;
        }
        .wrapper-video {
            margin: 10px;
            height: 500px;
            width: 500px;
            position: relative;
        }

        video {
            position: absolute;
        }
        
        h2 {
            font-size: 36px;
            padding-bottom: 20px;
        }
        .container-adjectif {
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0 30px 0;
        }
        .adjectif {
            height: 100%;
            width: 20%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
        }
        p {
            font-weight: 200;
        }
        hr {
            height: 0.005em;
            width: 100%;
            background-color: white;
            margin: 5px;
        }
        h3 {
            font-size: 20px;
        }
`

export default StyledBienvenue