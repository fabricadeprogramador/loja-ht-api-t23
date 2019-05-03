'use strict'

const Mongoose = require('mongoose')
const Cliente = Mongoose.model('Cliente')
const Usuario = Mongoose.model('Usuario')

class ClienteController{

    static async buscarTodos(req, res){
        try{
            res.json(await Cliente.find({})
            .populate('usuario', 'username')
            .exec())
        
        }
        
        catch(error){
            res.status(500).send("Erro ao buscar Clientes!")
        
        }

    }

    static async buscarPorUsuario(req, res){
        try{
            console.log(JSON.stringify(req.body))
            res.json(await Cliente.find({"usuario":req.body})
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

            if(req.body.usuario._id != undefined && req.body.usuario._id != "" && req.body.usuario._id != null){
                console.log("REQ.BODY.USUARIO._ID: " + JSON.stringify(eq.body.usuario._id))
                console.log("REQ.BODY.USUARIO: " + JSON.stringify(eq.body.usuario))
                let resultadoUsu = await Usuario.findByIdAndUpdate(req.body.usuario._id, req.body.usuario)
                console.log("AO SALVAR USUARIO DE CLIENTE: " + JSON.stringify(resultadoUsu))
            }

            let resultado = (await Cliente.findByIdAndUpdate(req.body._id, req.body))
            res.status(200).send(resultado)
        } catch(error){
            console.log("ERRO AO EDITAR CONVIDADO: " + error)
            res.status(500).send("Erro ao editar cliente")
        }
    }

}

module.exports = ClienteController