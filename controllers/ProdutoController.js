'use strict'

const Mongoose = require('mongoose')
const Produto = Mongoose.model('Produto')

class ProdutoController{
    static async buscarTodos(req,res){
        try {
            res.json(await Produto.find({})
                .populate('departamento','nome')
                .exec())
        } catch (error) {
            res.status(400).send("Erro ao buscar o Departamento!")
        }
    }

    static async buscarPorNome(req,res){
        try {
            let produtoBuscar = req.params.nomeProduto
            res.json(await Produto.find({ descricao : produtoBuscar})
                .populate('departamento', 'nome')
                .exec())
        } catch (error) {
            res.status(400).send("Erro ao buscar o Produto!")
        }
    }

    static async adicionar(req,res){
        try {
            console.log("Produto: " + JSON.stringify(req.body))
            let resultado = await Produto.create(req.body)
            console.log("Resultado: " + resultado)
            res.status(200).json(resultado)
        } catch (error) {
            res.status(400).send("Erro ao adicionar o Produto!")
        }
    }

    static async deletar(req,res){
        try {
            let resultado = await Produto.findByIdAndDelete(req.body)
            res.status(200).json(resultado)
        } catch (error) {
            res.status(400).send("Erro ao deletar o Produto!")
        }
    }

    static async editar(req,res){
        try {
            let resultado = await Produto.findByIdAndUpdate(req.body._id, req.body)
            res.status(200).json(resultado)
        } catch (error) {
            res.status(400).send("Erro ao editar o Produto!")
        }
    }
}
module.exports = ProdutoController