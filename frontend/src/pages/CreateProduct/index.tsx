import React from 'react';

import {Container,Card} from './styles'
const CreateProduct:React.FC = () => {
    
    return (
        <Container>
            <Card>
                <h2>Cadastro de Produtos</h2>
                <label>Nome do Produto</label>
                <input type = "text"></input>

                <label>Preço</label>
                <input type = "text"></input>

                <label>Link da Imagem</label>
                <textarea  rows = {5}></textarea>
            </Card>
        </Container>
    );
}

export default CreateProduct;