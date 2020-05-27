import React, { useState } from 'react'; //importar o componente
import {Link, useHistory} from 'react-router-dom';
import './style.css'
import api from '../services/api'; //importando a API 


function Carros() { //cria funcao com o nome do componente

    const [nomeCarro, setNomeCarro] = useState(''); //CRIAÇÃO DE VARIAVEIS CONSTANTES
    const [peca, setPeca] = useState('');
    const [custoTotal, setCustoTotal] = useState('');
    const [tempoProducao, setTempoProducao] = useState('');
    const [chassi, setChassi] = useState('');

    const history = useHistory();

    async function handleCadastro(e) { 
        e.preventDefault(); //faz com q sempre incialize os valores em 0, se não por da alguns bugs

        const data = { //array
            nomeCarro,
            peca,
            custoTotal,
            tempoProducao,
            chassi
        };

        try {
            const response = await api.post('carro', data); //post pra utilizar pra gravar, se fosse buscar seria api.get
            const id = response.data.id;
            alert("Seu id de acesso: " + id);
        } catch (error) {
            alert("Erro no cadastro");
        }
    }

    return (
        <div className="cadastro-container">
            <form onSubmit={handleCadastro}>
                <h1>Meu Cadastro</h1>
                <input
                    type="text"
                    placeholder="Nome Carro" 
                    value={nomeCarro}
                    onChange={e => setNomeCarro(e.target.value)}/> <br></br>
                <input
                    type="text"
                    placeholder="Peça" 
                    value={peca}
                    onChange={e => setPeca(e.target.value)}/> <br></br>
                <input
                    type="number"
                    placeholder="Custo Total" 
                    value={custoTotal}
                    onChange={e => setCustoTotal(e.target.value)}/><br></br>
                 <input
                    type="time"
                    placeholder="Tempo Produção" 
                    value={tempoProducao}
                    onChange={e => setTempoProducao(e.target.value)}/> <br></br>
                <input
                    type="text"
                    placeholder="Chassi" 
                    value={chassi}
                    onChange={e => setChassi(e.target.value)}/> <br></br>
                         <div className="buttons-cadastro">
                <button type="submit">Salvar</button>
                <button type="submit">Excluir</button>
            </div> 
            </form>
       

        </div>
    );
}

export default Carros; //exporta o componente da function - obrigatorio
