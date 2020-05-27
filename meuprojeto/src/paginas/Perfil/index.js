import React from 'react'; //importar o componente
import './style.css'; //importando style
import pug from '../../imagens/pug.png'; //puxando img
import { useHistory } from 'react-router-dom';

function Perfil() { //cria funcao com o nome do componente 
    const history = useHistory();
    function clearCache() { //função pra deslogar o usuario 
        localStorage.clear();
        history.push('/');
    }
    return (
        <div className="perfil-container">
            <img src={pug}  alt="foto do pefil"/>
            <form className="form">
                <h1>Meu Perfil</h1>
                <h1>Olá, {localStorage.getItem('email')}</h1> {/*puxando o set lá da pagina de login pra mostrar o e-mail da pessoa */}
                <input
                    type="text"
                    placeholder="Nome" />
                <input
                    type="email"
                    placeholder="E-mail" />
                <input
                    type="number"
                    placeholder="Telefone" />
                <input
                    type="text"
                    placeholder="Cidade" />
                <input
                    type="text"
                    placeholder="Estado" />
                <input
                    type="password"
                    placeholder="Digite sua senha" />
            </form>
            <div className="buttons-perfil">
                <button type="submit">Salvar</button>
                <button type="submit">Excluir</button>
                <button onClick={clearCache}>Logout</button> {/**Utilizando onclick pra função lá de cima */}
            </div>

        </div>
    );
}

export default Perfil; //exporta o componente

