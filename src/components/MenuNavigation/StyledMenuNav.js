import styled from 'styled-components'

const StyledMenuNav = styled.section`
    position: fixed;
    width: 100vw;
    z-index: 9;
    display: flex;
    top: 0;
    transition: 1000ms;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 0px;
    visibility: hidden;
    opacity: 0;
    

        img {
            width: 100%;
            position: absolute;
            opacity: 0.9;
            height: 100%;
            transition: opacity 1s;
        }
        .filtre {
            background: linear-gradient(180deg, rgba(34, 52, 77, 0.96) 27.78%, rgba(0, 0, 0, 0.92) 133.32%, rgba(27, 31, 54, 0) 133.33%);
            width: 100%;
            height: 100%;
            position: absolute;
            opacity: 0.9;
            transition: 500ms;
        }
`

export default StyledMenuNav