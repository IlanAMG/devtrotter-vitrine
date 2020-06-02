import styled from 'styled-components'

const StyledQuiSommes = styled.section`
    display: flex;
    position: relative;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;
    background-color: #121212;
    -webkit-box-shadow: 0px 3px 56px 4px rgba(0,0,0,0.85);
    z-index: 7;


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
            height: 100%;
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
`

export default StyledQuiSommes