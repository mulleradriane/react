import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Perfil from './paginas/Perfil';
import Teste from './paginas/Teste'
import Lista from './paginas/Usuarios';
import Carros from './paginas/Carros';
import Funcionario from './paginas/Funcionario';
import ListaCarros from './paginas/ListaCarros';
import ListaFuncionarios from './paginas/ListaFuncionarios';


function Routes() {
   return(

<BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/cadastrar" exact={true} component={Cadastro} /> 
            <Route path="/perfil" exact={true} component={Perfil}/> 
            <Route path="/teste" exact={true} component={Teste}/> 
            <Route path="/lista" exact={true} component={Lista}/> 
            <Route path="/carro" exact={true} component={Carros}/>
            <Route path="/funcionario" exact={true} component={Funcionario}/>
            <Route path="/listacarro" exact={true} component={ListaCarros}/>
            <Route path="/listafuncionario" exact={true} component={ListaFuncionarios}/>
            


        </Switch>
    </BrowserRouter>
    );
}

export default Routes;