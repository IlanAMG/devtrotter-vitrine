import styled, {keyframes} from 'styled-components'

const defilement = keyframes`
    from,
    to {
        left: -150vw;
    }
    50% {
        left: 3vw;
    }
`

const StyledBanderolle = styled.section`
    height: 150px;
    width: 3000px;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    position: relative;

        h1 {
            font-style: italic;
            font-size: 80px;
            color: #545454;
            white-space:nowrap;
            position: absolute;
            animation: ${defilement} 20s infinite linear;
            left: 0;
        }
`

export default StyledBanderolle