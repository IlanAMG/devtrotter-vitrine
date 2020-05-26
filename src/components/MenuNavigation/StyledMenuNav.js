import styled from 'styled-components'

const StyledMenuNav = styled.section`
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 9;
    display: flex;
    

        img {
            width: 100%;
            position: absolute;
            opacity: 0.8;
            height: 100%;
        }
        .filtre {
            background: linear-gradient(180deg, rgba(27, 31, 54, 0.9) 27.78%, rgba(0, 0, 0, 0.9) 133.32%, rgba(34, 52, 77, 0.8) 133.33%);
            width: 100%;
            height: 100%;
            position: absolute;
            opacity: 0.9;
        }
`

export default StyledMenuNav