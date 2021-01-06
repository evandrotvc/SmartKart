import styled, {css} from 'styled-components';

interface ContainerProps {
    IsFocused : boolean,
    isFilled : boolean    
}
export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: white;
    margin: 15px 0;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }  
    ${(props) =>
        props.IsFocused &&
        css`
        color: #ff9000;
        border-color: #ff9000;
        `}

    ${(props) =>
        props.isFilled &&
        css`
        color: #ff9000;
        border-color: #ff9000;
        `}
    input {
        flex: 1;
        background: transparent;
        color: white;
        border: 0;
        &::placeholder {
        color: white;
        }
        & + input {
        margin-top: 8px;
        }
    }

    svg {
        margin-right: 15px;
    }

    
`; 