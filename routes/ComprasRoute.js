const ComprasController = require("./../controllers/ComprasController");

class ComprasRoute {
  constructor(app) {
    app
      .route("/compras")
      .get(ComprasController.buscarTodos)
      .post(ComprasController.adicionar)
      .delete(ComprasController.deletar);

    app
      .route("/compras/produto/:idProduto")
      .get(ComprasController.buscarPorProduto);

    app
      .route("/compras/produto/:idDepartamento")
      .get(ComprasController.buscarPorDepartamento);

    app
      .route("/compras/produto/:idCliente")
      .get(ComprasController.buscarPorCliente);
  }
}

module.exports = ComprasRoute;
