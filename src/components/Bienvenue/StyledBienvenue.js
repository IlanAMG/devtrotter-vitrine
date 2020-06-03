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
            margin-top: 30px;
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
            user-select: none;
        }
        
        h2 {
            font-size: 36px;
            padding-bottom: 20px;
        }
        .container-adjectif {
            width: 90%;
            display: flex;
            height: 150px;
            justify-content: space-between;
            margin-bottom: 30px;
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