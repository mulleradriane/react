import React, { useState, useEffect } from 'react'; //importar o componente
import {} from "react-icons/fi";
import { FaPencilAlt, FaUser, FaTag, FaRegEnvelope } from "react-icons/fa";
import './style.css'
import api from '../services/api';

function Lista() { //cria funcao com o nome do componente  para listar
   
   const [usuarios, setUsuarios] = useState([]); //array


   async function handleDeleteUsuario(id) { //passa oq eu estou tentando deletar no caso o usuario pelo id
    try {
        await api.delete(`usuario/${id}`, {}); //SIM, SÃO CRASES E NÃO ASPAS
        setUsuarios(usuarios.filter(usuario => usuario.id !== id)); //faz filtrar e mostrar todos os usuarios menos o excluido (onde o id for diferente do id deletado)
    } catch (error) {
        alert('Erro ao deletar usuario');
    }
   }
   
   useEffect(() => {
       api.get('usuario',{}).then(response => { //chama o get do arquivo de rotas do backend
           setUsuarios(response.data); //recebe array de usuarios e atribui a constante ali de cima
       });
   }, []);
   
   
   
    return (
        <div className="lista-container">
            <form className="form">
                <li>
                    <ul><h3>Total de usuarios: {usuarios.length}</h3></ul>
                    <ul> 
                        { usuarios.map(usuario => ( //esse MAP é como se fosse um for
                            <li>
                                <p><FaUser size={16}/> Usuario: {usuario.id}</p>
                                <p><FaTag size={16}/> Nome: {usuario.nome}</p>
                                <p><FaRegEnvelope size={16}/> Email: {usuario.email}</p>

                                <button type="button" onClick={() => handleDeleteUsuario(usuario.id)}>  
                                    Excluir
                                </button> 
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
export default Lista; //exporta o componente



