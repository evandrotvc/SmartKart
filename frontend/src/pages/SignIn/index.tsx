import React , {useEffect} from 'react';
import $ from 'jquery';
const SignIn : React.FC = () => {

    useEffect(() => {
        $("#username").on("click" , event => {
            console.log("CLIQUEI")
        })    
    }, [])
      
    return (
        <>
        <h1>SignIn</h1>

        <label>Usuario</label>
        <input type = "text" id = "username"  placeholder="Digite usuário" />

        <label>Senha</label>
        <input type = "password" id = "password" placeholder="Digite sua Senha" />

        <button  id = "Login" type="submit">Logar</button>
        </>
    );
}

export default SignIn;