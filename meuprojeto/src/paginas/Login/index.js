import React, { useState } from 'react'; //importar o componente
import {Link, useHistory} from 'react-router-dom'; //serve pra encaminhar o usuario pra outra pagina no login caso ele logue com sucesso
import './style.css'; //importando style
import {FiLogIn} from "react-icons/fi";


function Login() { //cria funcao com o nome do componente

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const history = useHistory();

    function handleLogin(e) { //esse e é um evento
        e.preventDefault();

        console.log(email);
        console.log(password);

        localStorage.setItem('email', email); //salva na memoria do navegador e oget fica no perfil

        history.push('/perfil');
    }
    
    return (
        <div className="login-container">
            <form className="form" onSubmit={handleLogin}>
            <h1>Faça seu login</h1>
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder="Digite sua senha" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Entrar</button>
            </form>
            <Link to="/esquecisenha"><p>Esqueci minha senha</p></Link>
            <Link to="/cadastrar"><FiLogIn size={16}/><p>Não tenho cadastro</p></Link> 
        </div>
    );
}

export default Login; //exporta o componente

