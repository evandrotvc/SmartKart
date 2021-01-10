import React , {useState} from 'react';
import {Container} from './styles';
import {FaCartPlus} from 'react-icons/fa';

interface PropsCard {
    name: string;
    image: string;
    price: number;
}

const Card: React.FC<PropsCard> = ({image, name, price}) => {
    const [IsClicked , setIsClicked ] = useState(false);
    return (
        <>
        <Container image = {image} isClicked= {IsClicked}>
            <div className= "card-info">
                <h1>{name}</h1>
                
                <strong>${price}</strong>

                
                <div className= "container-button">
                    <button onClick= {() => setIsClicked(true)}>{<FaCartPlus size= {15} color= {"white"}/>}</button>
                    <span>ADD TO CART</span>
                </div>
            </div>

            <div className = "image"></div>    
                  
        </Container>
       
        </>
    );
}

export default Card;