import styled, { css, keyframes } from 'styled-components'

const fade = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`

const StyledHexagone = styled.div`
        position: relative;
        width: 250px; 
        height: 144.34px;
        margin: 72.17px 2px;
        background-size: auto 288.6751px;
        background-position: center;
        box-shadow: 0 0 20px rgba(0,0,0,0.75);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        ${props => props.url && css`
            background-image: ${({url}) => `url(${url})`};
        `}

        ${props => props.color === 'black' && css`
            background-color: ${({color}) => `${color}`};
            opacity: 0.8;
        `}
        ${props => props.color !== 'black' && css`
            background-color: ${({color}) => `${color}`};
        `}

        ${props => props.color === '#F0F0F0' && css`
            animation: ${fade} 1.5s ease-out forwards;
        `}

        &:after {
            content: "";
            position: absolute;
            top: 0.0000px;
            left: 0;
            width: 250.0000px;
            height: 144.3376px;
            z-index: 2;
            background: inherit;
        }

            .hexTop,
            .hexBottom {
                position: absolute;
                z-index: 1;
                width: 176.78px;
                height: 176.78px;
                overflow: hidden;
                -webkit-transform: scaleY(0.5774) rotate(-45deg);
                -ms-transform: scaleY(0.5774) rotate(-45deg);
                transform: scaleY(0.5774) rotate(-45deg);
                background: inherit;
                left: 36.61px;
                box-shadow: 0 0 20px rgba(0,0,0,0.75);
            }

            /*counter transform the bg image on the caps*/
            .hexTop:after,
            .hexBottom:after {
                content: "";
                position: absolute;
                width: 250.0000px;
                height: 144.33756729740645px;
                -webkit-transform:  rotate(45deg) scaleY(1.7321) translateY(-72.1688px);
                -ms-transform:      rotate(45deg) scaleY(1.7321) translateY(-72.1688px);
                transform:          rotate(45deg) scaleY(1.7321) translateY(-72.1688px);
                -webkit-transform-origin: 0 0;
                -ms-transform-origin: 0 0;
                transform-origin: 0 0;
                background: inherit;
            }

            .hexTop {
                top: -88.3883px;
            }

            .hexTop:after {
                background-position: center top;
            }

            .hexBottom {
                bottom: -88.3883px;
            }

            .hexBottom:after {
                background-position: center bottom;
            }

            span {
                z-index: 5;
                color: white;
                padding: 5px;
                position: absolute;
                text-align: center;
                line-height: 22px;
            }

            a {
                color: white;
                z-index: 6;
                padding: 8px 15px 8px 15px; 
                text-align: center;
                line-height: 22px;
                font-size: 20px;
                text-decoration: none;
                border-radius: 5px;
                margin: 10px;
                background: linear-gradient(89.81deg, rgba(40, 42, 125, 0.8) 43.95%, rgba(104, 59, 205, 0.8) 99.95%);
                transition: 500ms;
                -webkit-box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.58);
            }
            a:hover {
                transform: scale(1.1);
                background: linear-gradient(89.81deg, rgba(40, 42, 125, 1) 100%, rgba(104, 59, 205, 1) 99.95%);
                transition: 500ms;
            }

`

export default StyledHexagone