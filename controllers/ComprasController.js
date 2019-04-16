"use strict";

const Mongoose = require("mongoose");
const Compras = Mongoose.model("Compras");

class ComprasController {
  static async buscarTodos(req, res) {
    try {
      res.json(await Compras.find({}));
    } catch (error) {
      res.status(500).send("Erro ao buscar Lista de produtos");
    }
  }
  static async adicionar(req, res) {
    try {
      let resultado = await Compras.create(req.body);
      res.status(200).json(resultado);
    } catch (error) {
      res.status(500).send("Erro ao adicionar Produto");
    }
  }
  static async deletar(req, res) {
    try {
      let deletarid = req.body._id;
      let resultado = await Compras.findByIdAndDelete(req.body);
      res.status(200).json(resultado);
      res.status(200).json(deletarid);
    } catch (error) {
      res.status(500).send("Erro ao deletar Produto");
    }
  }

  static async buscarPorProduto(req, res) {
    try {
      let idProduto1 = req.params.idProduto;

      res.json(
        await Compras.find({ produto: idProduto1 })
          .populate("produto", "id")
          .exec()
      );
    } catch (error) {
      res.status(500).send("Erro ao buscar compras por produtos");
    }
  }

  static async buscarPorDepartamento(req, res) {
    try {
      let idDepartamento1 = req.params.idDepartamento;
      res.json(
        await Compras.find({ departamento: idDepartamento1 })
          .populate("departamento", "id")
          .exec()
      );
    } catch (error) {
      res.status(500).send("Erro ao buscar departamentos por produtos");
    }
  }

  static async buscarPorCliente(req, res) {
    try {
      let idCliente1 = req.params.idCliente;
      res.json(
        await Compras.find({ cliente: idCliente1 })
          .populate("cliente", "id")
          .exec()
      );
    } catch (error) {
      res.status(500).send("Erro ao buscar clientes por produtos");
    }
  }
}
module.exports = ComprasController;
