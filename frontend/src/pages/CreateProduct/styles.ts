import styled from 'styled-components';

export const Container = styled.div `
 width: 100vw;
 height: 100vh;
 
`;
export const Card = styled.form`
    border: 3px solid violet;
    border-radius:12px;
    padding: 10px 15px;
    width: 40vw;
    height: 50vh;
    margin: auto auto;

    > label{
        display: block;
    }

    > input , textarea{
        padding: 5px 10px;
        display: block;
        margin-bottom: 10px;
        box-sizing: border-box;
        width: 100%;
    }
`;
