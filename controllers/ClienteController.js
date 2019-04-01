'use strict'

const Mongoose = require('mongoose')
const Cliente = Mongoose.model('Cliente')

class ClienteController{

    static async buscarTodos(req, res){
        try{
            res.json(await Cliente.find({})
            .populate('usuario', 'username senha')
            .exec())
        
        }
        
        catch(error){
            res.status(500).send("Erro ao buscar Clientes!")
        
        }

    }

    static async adicionar(req, res){
        
        try{
            let adicionarCliente = await Cliente.create(req.body)
            res.status(200).send(adicionarCliente)
        
        }
        
        catch(error){
            console.log(error)
            res.status(500).send("Erro interno, não foi possível adicionar o cliente, tente novamente ou contate o administrador do site")
        
        }
    
    }
    
    static async deletar(req, res){
        try{
            let idDeletar = req.body._id
            let resultado = await Cliente.findByIdAndDelete(req.body)
            res.status(200).json(resultado)
        } catch(error){
            res.status(500).send("Erro ao deletar convidado!")
        }
    }

    static async editar(req, res){
        try{
            let resultado = (await Cliente.findByIdAndUpdate(req.body._id, req.body))
            res.status(200).send(resultado)
        } catch(error){
            res.status(500).send("Erro ao editar convidado")
        }
    }

}

module.exports = ClienteController