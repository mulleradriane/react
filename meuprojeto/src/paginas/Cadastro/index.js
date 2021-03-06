import React, { useState } from 'react'; //importar o componente
import {Link, useHistory} from 'react-router-dom';
import './style.css'
import api from '../services/api'; //importando a API 
import { FaUser, FaTag, FaRegEnvelope, FaPencilAlt, FaTrashAlt  } from "react-icons/fa";

function Cadastro() { //cria funcao com o nome do componente

    const [nome, setNome] = useState(''); //CRIAÇÃO DE VARIAVEIS CONSTANTES
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleCadastro(e) { 
        e.preventDefault(); //faz com q sempre incialize os valores em 0, se não por da alguns bugs

        const data = { //array
            nome,
            email,
            telefone,
            senha
        };
        

        try {
            const response = await api.post('usuario', data); //post pra utilizar pra gravar, se fosse buscar seria api.get
            const id = response.data.id;
            alert("Seu id de acesso: " + id);
        } catch (error) {
            alert("Erro no cadastro");
        }
    }

    return (
        <div className="cadastro-container">
            <form onSubmit={handleCadastro}>
                <h1>Cadastro de Cliente</h1>
                <input 
                
                    type="text"
                    placeholder="Nome" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}/> <br></br>
                <input
                    type="email"
                    placeholder="E-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}/> <br></br>
                <input
                    type="number"
                    placeholder="Telefone" 
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}/><br></br>
                 <input
                    type="password"
                    placeholder="Senha" 
                    value={senha}
                    onChange={e => setSenha(e.target.value)}/> <br></br>
                         <div className="buttons-cadastro">
                <button type="submit"><FaPencilAlt size={16}/> Salvar</button>
                <button type="submit">Excluir</button>
            </div> 
            </form>
       

        </div>
    );
}

export default Cadastro; //exporta o componente da function - obrigatorio
