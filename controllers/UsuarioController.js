'use strict'

const Mongoose =  require('mongoose')
const Usuario =  Mongoose.model('Usuario')

class UsuarioController{

    static async buscarTodos(req, res){
        try{
            res.json(await Usuario.find({}))
        }catch(error){
            res.status(500).send("Erro ao buscar usuarios!")
        }
    }

    static async autenticar(req, res){
        try{
            res.json(await Usuario.find(req.body))
        }catch(error){
            console.log(error)
            res.status(500).send("Erro na autenticação!")
        }
    }

    static async adicionar(req, res){
        try{
            console.log("USUARIO: " + JSON.stringify(req.body))
            let resultado = await Usuario.create(req.body)
            console.log("RESULTADO: " + resultado)
            res.status(200).json(resultado)
        } catch(error){
            console.log("Erro ao salvar usuário: " + error)
            res.status(500).send("Erro ao adicionar usuario!")
        }
    }

    static async deletar(req, res){
        try{
            let idDeletar = req.body._id
            let resultado = await Usuario.findByIdAndDelete(req.body)
            res.status(200).json(resultado)
        } catch(error){
            res.status(500).send("Erro ao deletar usuario!")
        }
    }

    static async editar(req, res){
        try{
            let resultado = await Usuario.findByIdAndUpdate(req.body._id, req.body)
            res.status(200).json(resultado)
        }catch(error){
            res.status(500).send("Erro ao editar usuario!")
        }
    }
}

module.exports = UsuarioController