import styled from 'styled-components';

const StyledBienvenue = styled.section`
        display: flex;
        align-items: center;
        justify-content: start;
        overflow: hidden;
        width: 100vw;
        position: relative;
        flex-direction: column;
        -webkit-box-shadow: 0px 3px 56px 4px rgba(0,0,0,0.85);
        z-index: 3;

        img {
            position: absolute;
            z-index: -1;
            height: 120%;
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
            display: flex;
            justify-content: space-between;
        }

        .quisommesnous-txt {
            width: 50%;
            height: 100%;
            color: white;
            text-align: justify;
        }
        .placeholder {
            background-color: grey;
            margin: 10px;
            height: 385px;
            width: 50%;
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