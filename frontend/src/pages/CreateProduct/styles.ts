import styled from 'styled-components';

export const Container = styled.div `
    display:flex;
    width: 100vw;
    height: 100vh;
    margin: auto auto;
    justify-content:center;
 
`;
export const Card = styled.div`    
    border: 2px solid #ADFF2F;
    border-radius:12px;
    padding: 10px 15px;
    width: 40%;
    height: 75%;
    margin: auto 0;
      
    img {
        width: 100%;
        height: 100%;
    }
    
    button {
        display:flex;
        margin: 30px auto 0 auto;
        padding: 7px 15px;
        border: 3px solid rgb(32, 32, 36);
        border-radius: 12px;
        background-color: #ff9000;
        &:hover {
            opacity:0.8;
        }
    }   
`;
