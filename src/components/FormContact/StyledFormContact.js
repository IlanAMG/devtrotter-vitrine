import styled from 'styled-components'

const StyledFormContact = styled.section`
    width: 100%;
    height: 100%;
    padding: 30px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

        .container-h1 {
            width: 80%;
            height: 50px;
            margin-top: 30px;
        }
        h1 {
            font-size: 2.6em;
            color: white;
            text-align: center;
            white-space: nowrap;
        }

        form {
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: column;
            justify-content: space-around;
        }
        .container-input {
            display: flex;
            width: 100%;
            height: 50%;
            flex-direction: column;
            justify-content: space-around;
            padding-top: 50px;
        }
        input {
            border: none;
            background: transparent;
            height: 40px;
            border-bottom: 0.05em solid rgba(255, 255, 255, 0.6);
            outline: none;
            color: rgba(255, 255, 255, 0.7);
        }

        textarea {
            height: 32%;
            border: none;
            background: transparent;
            border-bottom: 0.05em solid rgba(255, 255, 255, 0.6);
            resize: none;
            outline: none;
            color: rgba(255, 255, 255, 0.7);
            margin-top: 10px;
        }

        input:focus {
            border-bottom: 0.05em solid rgba(104, 59, 205, 0.5);
        }
        textarea:focus {
            border-bottom: 0.05em solid rgba(104, 59, 205, 0.5);
        }

        label {
            color: white;
            font-size: 18px;
            margin-top: 25px;
        }

        .wrapper-btn-form {
            width: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
            height: 18%;
            padding-bottom: 20px;
        }

        .btn {
            color: white;
            font-size: 24px;
            padding: 8px;
            border-bottom: 0.09em solid white;
            transition: 300ms;
            background-color: transparent;
            outline: none;
            cursor: pointer;
        }

        .btn:hover {
            transition: 300ms;
            border-bottom: 0.09em solid rgba(104, 59, 205, 0.5);
        }

`

export default StyledFormContact