import React, { useState, useEffect } from 'react'; //importar o componente
import {} from "react-icons/fi";
import { FaPencilAlt, FaUser, FaTag, FaRegEnvelope } from "react-icons/fa";
import './style.css'
import api from '../services/api';

function ListaFuncionarios() { //cria funcao com o nome do componente  para listar
   
   const [funcionarios, setFuncionarios] = useState([]); //array
   
   useEffect(() => {
       api.get('funcionario',{}).then(response => {
           setFuncionarios(response.data); //recebe array de usuarios e atribui a constante ali de cima
       });
   }, []);
   
   
   
    return (
        <div className="lista-container">
            <form className="form">
                <li>
                    <ul><h3>Total de cadastros: {funcionarios.length}</h3></ul>
                    <ul> 
                        { funcionarios.map(funcionario => ( //esse MAP é como se fosse um for
                            <li>
                             <p><FaUser size={16}/> Id: {funcionario.id}</p>
                                <p><FaTag size={16}/> Nome: {funcionario.nome}</p>
                                <p><FaRegEnvelope size={16}/> Email: {funcionario.email}</p>
                                <p>---------------------------------------</p>
                            </li>
                        ))
                        }
                    </ul> 
                </li>
            </form>
        </div>
    );
}
export default ListaFuncionarios; //exporta o componente



