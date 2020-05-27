import React, { useState, useEffect } from 'react'; //importar o componente
import {} from "react-icons/fi";
import { FaCar, FaCheck, FaMoneyBillAlt, FaScrewdriver, FaWrench } from "react-icons/fa";
import './style.css'
import api from '../services/api';

function ListaCarros() { //cria funcao com o nome do componente  para listar
   
   const [carros, setCarros] = useState([]); //array
   
   useEffect(() => {
       api.get('carro',{}).then(response => {
           setCarros(response.data); //recebe array de usuarios e atribui a constante ali de cima
       });
   }, []);
   
   
   
    return (
        <div className="lista-container">
            <form className="form">
                <li>
                    <ul><h3>Total de cadastros: {carros.length}</h3></ul>
                    <ul> 
                        { carros.map(carro => ( //esse MAP é como se fosse um for
                            <li>
                                <p><FaCar size={16}/> Carro: {carro.nomeCarro}</p>
                                <p><FaScrewdriver size={16}/> Peça Instalada: {carro.peca}</p>
                                <p><FaMoneyBillAlt size={16}/> Custo Total: {carro.custoTotal}</p>
                                <p><FaCheck size={16}/> Tempo Produção: {carro.tempoProducao}</p>
                                <p><FaWrench size={16}/> Chassi: {carro.chassi}</p>

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
export default ListaCarros; //exporta o componente



