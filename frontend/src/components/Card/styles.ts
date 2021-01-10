import styled, { css } from 'styled-components';
 
interface  ContainerProps {
    image : string;
    isClicked: boolean;
}

export const Container = styled.div<ContainerProps>`
    display:flex;   
    
    max-width: 45vw;
    max-height: 50vh;
    padding: 15px;
    border: 3px solid #3f3e4d;
    border-radius: 6px;
    justify-content: space-between;
    /* margin: auto auto; */
    margin-bottom: 9px;
        
    div {
        align-items:center;
        text-align:center;
        margin: 15px 0 0 10px;

        span{
            font-size: 10px;
        }
        strong {
            margin-top: 10px;
            /* color : #7579ea; */
            color : greenyellow;
            font-size: 18px;
            display: block;
        }
        h1{
            margin-top: 30px;
        }

        .container-button{
            display:flex;
            align-items:center;

            button {
                border: 1px solid #7579ea;
                border-radius:50%;                
                padding: 7px;
                transition: 0.4s;
                background:transparent;

                /* ${(props) => !props.isClicked ? css`background:transparent` : css`background:greenyellow`} */

                &:hover{
                    background:#7579ea;
                }
                &:active{
                    background:greenyellow;
                }
         }
         span{
             margin-left: 5px;
            font-family:"Anton";
            font-size: 12px;
         }
        }
        
    }
    /* Configuração da imagem como background */
    .image {
    height: 200px;
	width: 200px;
    
    ${(props) => (css`
        background-image: url(${props.image});
        background-size: cover;
        background-position-x:center;
        background-position-y:center;
        
    `)}
    }   
    
`;



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

    /* img {
        display:flex;
        width: 50%;
        height: 50%;
        background-color: transparent;
        position:relative;
        right: 0;        
    } */