import styled, {css} from 'styled-components';

const StyledRealisations = styled.section`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;
    flex-direction: column;

        .container-h1 {
            width: 60%;
            margin: 30px 0 30px 0;
            position: absolute;
        }

        h1 {
            font-size: 4.6em;
            color: white;
            text-align: center;
            line-height: 75px;
        }

        .caroussel {
            width: 100%;
            height: 50%;
            background-color: #B3B2EB;
        }
        .categories {
            width: 100%;
            height: 50%;
            display: flex;
        }

        .img {
            height: 100%;
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            transition: 500ms;
        }

        img {
            max-height: 120%;
            z-index: 2;
            transition: 500ms;
        }
        .scale {
            transform: scale(1.1);
            transition: 500ms;
        }

        .filtre-hover {
            z-index: 3;
            width: 100%;
            height: 0%;
            position: absolute;
            opacity: 0;
            visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 28px;
        }

        .filtre-hover.on {
            background-color: rgba(0,0,0,0.6);
            opacity: 1;
            visibility: visible;
            height: 100%;
            z-index: 3;
            transition: 500ms;
        }
`

export default StyledRealisations