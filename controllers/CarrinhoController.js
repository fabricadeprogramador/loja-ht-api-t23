'use strict'

const Mongoose = require('mongoose')
const Carrinho = Mongoose.model('Carrinho')


class CarrinhoController{

    static async buscarTodos(req,res){

        try {

            res.json(await Carrinho.find({}))
            
        } catch (error) {

                res.status(500).send('Erro ao buscar Carrinho')
            
        }
    }

    static async adicionar(req,res){
        try {

            let adicionarCarrinho = await Carrinho.create(req.body)
            
            res.status(200).send("Carrinho"+ adicionarCarrinho+ "adicionado com sucesso")



            
        } catch (error) {
            
            res.status(500).send('Erro ao adicionar carrinho')
        }
    }


    static async deletar(req,res){

        try {

            let idDeletar = req.body._id
            let resultado = await Carrinho.findByIdAndDelete(req.body)
            console.log(resultado)
            res.status(200).json(resultado)
            
        } catch (error) {

            res.status(500).send('Impossivel deletar!!')
            
        }
    }

    static async editar(req,res){

        try {

            let resultado = await Carrinho.findByIdUpdate(req.body._id, req.body)
            console.log(resultado)
            res.status(200).json(resultado)

            
        } catch (error) {

            res.status(500).send('Impossivel editar o carrinho!')
            
        }
    }
}

module.exports = CarrinhoController