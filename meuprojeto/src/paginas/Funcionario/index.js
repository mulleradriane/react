import React, { useState } from 'react'; //importar o componente
import {Link, useHistory} from 'react-router-dom';
import './style.css'
import api from '../services/api'; //importando a API 
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function Funcionario() { //cria funcao com o nome do componente

    const [nome, setNome] = useState(''); //CRIAÇÃO DE VARIAVEIS CONSTANTES
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');

    const history = useHistory();

    
    async function handleCadastro(e) { 
        e.preventDefault(); //faz com q sempre incialize os valores em 0, se não por da alguns bugs

        const data = { //array
            nome,
            email,
            telefone,
            senha,
            cpf
        };

        try {
            const response = await api.post('funcionario', data); //post pra utilizar pra gravar, se fosse buscar seria api.get
            const id = response.data.id;
            alert("Seu id de acesso: " + id);
        } catch (error) {
            alert("Erro no cadastro");
        }
    }

    return (
        <div className="funcionario-container">
            <form onSubmit={handleCadastro}>
                <h1>Cadastro de Funcionario</h1>
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
                <input
                    type="text"
                    placeholder="CPF" 
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}/> <br></br>
                         <div className="buttons-cadastro">
                <button type="submit"><FaPencilAlt size={16}/> Salvar</button>
                <button type="submit">Excluir</button>
            </div> 
            </form>
       

        </div>
    );
}

export default Funcionario; //exporta o componente da function - obrigatorio
