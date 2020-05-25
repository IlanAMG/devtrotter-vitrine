import styled from 'styled-components';

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
        }

        img {
            max-height: 120%;
        }

        .img:hover {
            background-color: rgba(0,0,0,0.2);
            z-index: 3;
        }
`

export default StyledRealisations