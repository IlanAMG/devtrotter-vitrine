import styled from 'styled-components'

const StyledItemPrestation = styled.div`
    height: 40px;
    margin: 12px 0px;
    display: flex;
    align-items: center;
    cursor: pointer;

        .checkbox {
            height: 40px;
            width: 40px;
            border: 0.05em solid rgba(255, 255, 255, 0.6);
            padding: 5px;
        }
        
        .checked {
            height: 100%;
            width: 100%;
            background: linear-gradient(89.81deg, rgba(40, 42, 125, 0.6) 43.95%, rgba(104, 59, 205, 0.6) 99.95%);
            -webkit-box-shadow: 0px 0px 53px -3px rgba(0,0,0,0.75);
        }

        p {
            color: white;
            padding-left: 12px;
            font-size: 18px;
        }
`

export default StyledItemPrestation