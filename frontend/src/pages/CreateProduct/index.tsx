import React , {useState , useCallback} from 'react';
import api from '../../service/api';

import {Container,Card} from './styles'
import {FaDolly, FaDollarSign , FaLink , FaNodeJs} from 'react-icons/fa'
import Input from '../../components/Inputs';


const CreateProduct:React.FC = () => {
    const [name , setName] = useState('');
    const [Price , setPrice] = useState('');
    const [Link , setLink] = useState('');

    const HandleSumit = useCallback( async() => {
         console.log(name, Price , Link)

         if(!name || !Price || !Link){
             alert("Preencha Todos os campos")
             return;
         }

         if(!Number(Price)){
            alert("Erro no Preço! Digite um número.")
            return;
         }
         const obj = {
             name : name,
             price : Number(Price),
             Link : Link
         }
         const response = await api.post('/products/create',{
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            data: obj
         })                 
        },[name,Price,Link])
       
    return (
        <Container>
            <Card>
                <img 
                src = {"https://media.kasperskydaily.com/wp-content/uploads/sites/94/2020/06/19104309/kaspersky-settings-for-steam-featured.jpg"} alt = "img"></img>
            </Card>
            <Card>
                <h2>Cadastro de Produtos</h2>

                <Input ContentState= {[name,setName]} name = "Nome do Produto" icon = {FaDolly} ></Input>
                <Input ContentState= {[Price,setPrice]} name = "Valor do Produto" icon = {FaDollarSign} ></Input>
                <Input ContentState= {[Link,setLink]} name = "Link da imagem do Produto" icon = {FaLink} ></Input>               
            
                <button onClick = {HandleSumit} type = "button">Registrar</button>

            </Card>
        </Container>
    );
}

export default CreateProduct;