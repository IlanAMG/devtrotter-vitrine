import styled, { keyframes, css } from 'styled-components';

const fade = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(1.25);
    opacity: 0;
  }
`;


const StyledLoading = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #0a0a0a;
    z-index: 50;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 500ms;
    flex-direction: column;

      p {
        color: white;
        font-size: 19px;
        padding: 50px;
        font-style: italic;
        text-align: center;
        opacity: 0.5;
      }

    ${props => props.finish && css`
        animation: ${fade} 500ms linear forwards;
    `}
        
`

export default StyledLoading