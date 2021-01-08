import React from 'react';
import {Container} from './styles';
import image from '../../assets/mouseDark.png'
const Card: React.FC = () => {
    return (
        <>
        <Container image = {image}>
            <div>
                <span>Starting from</span>
                <strong>$50</strong>

                <h2>Mouse</h2>
            </div>

            {/* <img src= {image} alt = "img"></img> */}
            <div className = "teste"></div>            
        </Container>

        <Container image = {"https://img.terabyteshop.com.br/produto/g/headset-gamer-marvo-scorpion-hg8928-pretovermelho_84626.png"}>
        <div>
            <span>Starting from</span>
            <strong>$50</strong>

            <h2>Mouse</h2>
        </div>

        {/* <img src= {image} alt = "img"></img> */}
        <div className = "image"></div>            
        </Container>
        </>
    );
}

export default Card;