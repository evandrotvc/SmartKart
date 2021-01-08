import styled, { css } from 'styled-components';
 
interface  ContainerProps {
    image : string;
}

export const Container = styled.div<ContainerProps>`
    display:flex;
    /* max-width: 600px; */
    width: 30vw;
    padding: 15px;
    height: 40vh;
    border: 3px solid #3f3e4d;
    border-radius: 6px;
    justify-content: space-between;
    margin: auto auto;

    ${(props) => css`
        background-image: url(${props.image});
        background-size: cover;
        background-position-x:center;
        background-position-y:center
        background-repeat: no-repeat;
    `
    }
    /* Configuração da imagem como background */
    /* background-image: url("https://www.infostore.com.br/media/catalog/product/cache/6f4a9cade1b519a8ba034325b5d7a7de/m/o/mouse-gamer-sem-fio-g502-lightspeed-preto-logitech-g-1.jpg"); */
    /*background-size: cover;
    background-position-x:150px;
    /* background-position-y: -40px; */
    /* background-position: right; */
    /*background-repeat: no-repeat;*/
    /* background-size: 400px 400px; */
    /* object-fit:cover;
    object-position:50% 50%; */

    img {
        display:flex;
        width: 50%;
        height: 50%;
        background-color: transparent;
        position:relative;
        right: 0;        
    }
    div {
        align-items:center;
        text-align:center;
        margin: 15px 0 0 10px;

        span{
            font-size: 10px;
        }
        strong {
            margin-top: 10px;
            color : #7579ea;
            font-size: 25px;
            display: block;
        }
        h2{
            margin-top: 30px;
        }
    }
    .teste {
        max-height: 100%;
	max-width: 100%;
	width:150px;
	height:150px;
	background-size: cover;
	background-image: url("ddas");
	float: left;

    mix-blend-mode: multiply;

    }   
    
`;