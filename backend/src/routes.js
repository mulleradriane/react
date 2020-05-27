const express = require('express');

const routes = express.Router();
const connection = require('./database/connection');
const { request, response } = require('express');
const crypto = require('crypto');

routes.post('/usuario/',async(request, response) => { //rota pra inserir dados
// receber os parametros da requisição
    const {nome, email, telefone, senha} = request.body;
// inserir os dados no banco de dados
    const id = crypto.randomBytes(4).toString('HEX'); //pegar o numero do id automatico "random"
    await connection('usuario').insert( //insere no bd
        {
            id,
            nome,
            email,
            telefone,
            senha
        }
    )
    return response.json({id}); //mensagem informado q o usuario foi adicionado + o id
    //return response.send('Usuário ' + id + ' foi inserido com sucesso total')
} );

routes.get('/usuario/',async (request, response) => { //rota pra mostrar o dados?
    const usuarios = await connection('usuario').select('*'); //conecta no bd, busca a tabela usuario e faz o select

    return response.json(usuarios);
});


routes.delete('/usuario/:id', async (request, response) => { //DELETA USUARIO PELA ID
    const {id} = request.params; 

    await connection('usuario').where('id', id).delete();
    return response.status(204).send();
});



routes.post('/carro/',async(request, response) => { 
        const {nomeCarro, peca, custoTotal, tempoProducao, chassi} = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //pegar o numero do id automatico "random"
        await connection('carro').insert( //insere no bd
            {
                id,
                nomeCarro,
                peca,
                custoTotal,
                tempoProducao,
                chassi
            }
        )
        return response.json({id}); //mensagem informado q o usuario foi adicionado + o id
        //return response.send('Usuário ' + id + ' foi inserido com sucesso total')
    } );

    routes.get('/carro/',async (request, response) => { 
        const carros = await connection('carro').select('*'); 
    
        return response.json(carros);
    });
    

    
routes.post('/funcionario/',async(request, response) => { //rota pra inserir dados
    // receber os parametros da requisição
        const {nome, email, telefone, senha, cpf} = request.body;
    // inserir os dados no banco de dados
        const id = crypto.randomBytes(4).toString('HEX'); //pegar o numero do id automatico "random"
        await connection('funcionario').insert( //insere no bd
            {
                id,
                nome,
                email,
                telefone,
                senha,
                cpf
            }
        )
        return response.json({id}); //mensagem informado q o usuario foi adicionado + o id
        //return response.send('Usuário ' + id + ' foi inserido com sucesso total')
    } );
    
    routes.get('/funcionario/',async (request, response) => { //rota pra mostrar o dados?
        const funcionarios = await connection('funcionario').select('*'); //conecta no bd, busca a tabela usuario e faz o select
    
        return response.json(funcionarios);
    });
    
    


module.exports = routes;