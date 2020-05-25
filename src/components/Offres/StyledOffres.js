import styled, {css} from 'styled-components';

const StyledOffres = styled.section`
    position: relative;
    height: 669px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        img {
            position: absolute;
        }
        .container-offres {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            z-index: 1
        }
        .btn-offres {
            width: 546px;
            height: 158px;
            background-color: rgba(0, 0, 0, 0.31);
            border-right: 5px solid rgba(104, 59, 205, 0.6);
            border-left: 5px solid rgba(40, 42, 125, 0.6);
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: 500ms;
            position: relative
        }
        .filtre-hover {
            background: linear-gradient(89.81deg, rgba(40, 42, 125, 0.6) 43.95%, rgba(104, 59, 205, 0.6) 99.95%);
            transition: 500ms;
            position: absolute;
            left: 0;
            height: 100%;
            width: 0%;
            z-index: 2
        }
        ${props => props.hover1 && css`
        .filtre-hover.one {
            width: 100%;
        }
    `}
        ${props => props.hover2 && css`
        .filtre-hover.two {
            width: 100%;
        }
    `}
        
        .btn-offres:nth-child(1) {
            margin-top: 120px;
        }
        .btn-offres:nth-child(2) {
            margin-bottom: 110px;
        }
        .btn-offres span {
            color: white;
            margin-left: 50px;
            font-size: 36px;
            line-height: 45px;
            z-index: 3;
        }
`

export default StyledOffres