import styled from 'styled-components';

const StyledFooter = styled.footer`
    position: relative;
    height: 669px;
    width: 100vw;
    display: flex;
    -webkit-box-shadow: 0px 3px 56px 4px rgba(0,0,0,0.85);
    z-index: 6;
    justify-content: center;
    align-items: center;
    overflow: hidden;

        img {
            position: absolute;
            z-index: -1;
        }

        .container {
            height: 100%;
            width: 50%;
        }

        .separator {
            height: 85%;
            width: 0.05em;
            background-color: rgba(255, 255, 255, 0.6)
        }

        .container.left {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .container-h1 {
            width: 100%;
            height: 70%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        h1 {
            position: absolute;
            color: white;
            text-align: center;
            font-size: 46px;
            line-height: 52px;
        }

        .container.left .wrapper {
            width: 100%;
            height: 15%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container.left .wrapper small{
           text-align: center;
           color: rgba(255, 255, 255, 0.6);
           line-height: 22px;
           font-size: 18px;
        }
        .icon {
            margin: 0 20px 0 20px;
            width: 56px;
            height: 56px;
            color: white;
            cursor: pointer;
            transition: 600ms;
            opacity: 0.7
        }
        .icon:hover {
            opacity: 1;
            transform: scale(1.1);
            transition: 600ms;
        }
        .container.right {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media screen and (max-width: 1250px) {
            .container.right section {
                padding: 18px !important;
            }
        }
        @media screen and (max-width: 970px) {
            .icon {
                width: 36px;
                height: 36px;
            }
        }
        @media screen and (max-width: 780px) {
            flex-direction: column-reverse;
            height: auto;
            .container {
                height: auto;
                width: 100%;
            }
            img {
                height: 100%;
            }
            .container.left {
                height: 350px;
                width: 100%;
                padding: 15px;
                align-items: center;
            }
            .separator {
                width: 85%;
                height: 0.05em;
            }
            .wrapper.social {
                padding-bottom: 15px;
            }
            small {
                margin-bottom: 15px;
            }
            .icon {
                margin: 0 12px 0 12px !important;
            }
        }

`

export default StyledFooter
