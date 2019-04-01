'use scrict'

const Carrinho = require('./../models/Carrinho')
const CarrinhoController =require('./../controllers/CarrinhoController')


class CarrinhoRoute{

    constructor(app){

        app.route('/carrinhos')
        .get(CarrinhoController.buscarTodos)
        .post(CarrinhoController.adicionar)
        .put(CarrinhoController.editar)
        .delete(CarrinhoController.deletar)


        
    }

    
}

module.exports= CarrinhoRoute