'use scrict'

const Departamento = require('./../models/Departamento')
const DepartamentoController =require('./../controllers/DepartamentoController')


class DepartamentoRoute{


    constructor(app){
        
        app.route('/departamentos')
        .get(DepartamentoController.buscarTodos)
        .post(DepartamentoController.adicionar)
        .delete(DepartamentoController.deletar)
        .put(DepartamentoController.editar)

        app.route('/departamentos/busca/:nome')
        .get(DepartamentoController.buscarNome)

        app.route('/departamentosativos')
        .get(DepartamentoController.buscarAtivos)

        
    }
}


module.exports =DepartamentoRoute