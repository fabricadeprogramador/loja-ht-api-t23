'use strict'

const Mongoose = require('mongoose')
const Compras = Mongoose.model('Compras')

class ComprasController{

    static async buscarTodos(req, res){
        try{
            res.json(await Compras.find({}))
        }catch(error){
            res.status(500).send("Erro ao buscar Lista de produtos")
        }
    }
    static async adicionar(req, res){
        try{
            let resultado = await Compras.create(req.body)
            res.status(200).json(resultado)
        }catch(error){
            res.status(500).send("Erro ao adicionar Produto")
        }
    }
    static async deletar(req, res){
        try{
            let deletarid = req.body._id
            let resultado = await Compras.findByIdAndDelete(req.body)
            res.status(200).json(resultado)
            res.status(200).json(deletarid)
        }catch(error){
            res.status(500).send("Erro ao deletar Produto")
        }
    }

}
module.exports = ComprasController