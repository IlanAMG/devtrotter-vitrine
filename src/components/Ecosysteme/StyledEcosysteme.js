import styled from 'styled-components'

const StyledEcosysteme = styled.section`
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;

        .bg {
            position: absolute;
            z-index: -1;
            width: 100%;
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

`

export default StyledEcosysteme