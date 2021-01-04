import React , {useState , useCallback} from 'react';

import {Container,Card} from './styles'
import {FaDolly, FaDollarSign , FaLink} from 'react-icons/fa'
import Input from '../../components/Inputs';

const CreateProduct:React.FC = () => {
    const [name , setName] = useState('');
    const [Price , setPrice] = useState('');
    const [Link , setLink] = useState('');

    const HandleSumit = useCallback(() => {
         console.log(name)
        },
        [name])
    
    // const HandleChangeinput = useCallback(() => {
    //     console.log(name)
    //     },
    //     [name])
    return (
        <Container>
            <Card>
                <h2>Cadastro de Produtos</h2>

                <Input ContentState= {[name,setName]} name = "Nome do Produto" icon = {FaDolly} ></Input>
                <Input ContentState= {[Price,setPrice]} name = "Valor do Produto" icon = {FaDollarSign} ></Input>
                <Input ContentState= {[Link,setLink]} name = "Link da imagem do Produto" icon = {FaLink} ></Input>

                {/* <Input name = "Valor do Produto" icon = {FaDollarSign} ></Input> */}

                {/* <label>Link da Imagem</label> */}
                {/* <textarea  rows = {5}></textarea> */}
                {/* <Input name = "Valor do Produto" type = "textarea" icon = {FaLink} ></Input> */}

                <button onClick = {HandleSumit} type = "button">Registrar</button>
            </Card>
        </Container>
    );
}

export default CreateProduct;