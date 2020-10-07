import styled, {keyframes} from 'styled-components'

const marquee = keyframes`
    0% { left: 0; }
    100% { left: -177.5%; }
`

const StyledBanderolle = styled.section`
    height: 130px;
    width: 100vw;
    background-color: transparent;
    overflow: hidden;
    position: relative;
    z-index: 2;

        .marquee-inner {
            width: 200%;
            position: absolute;
            animation: ${marquee} 10s linear infinite;
            display: flex;
            align-items: center;
            height: 100%;
        }

        h1 {
            font-style: italic;
            font-size: 60px;
            color: white;
            white-space:nowrap;
            position: absolute;
            float: left;
            width: 50%;
        }
`

export default StyledBanderolle