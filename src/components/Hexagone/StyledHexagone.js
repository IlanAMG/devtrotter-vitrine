import styled, { css } from 'styled-components'

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

        ${props => props.url && css`
            background-image: ${({url}) => `url(${url})`};
        `}

        ${props => props.color && css`
            background-color: ${({color}) => `${color}`};
            opacity: 0.6;
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

`

export default StyledHexagone