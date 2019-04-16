"use strict";

const Mongoose = require("mongoose");

class Compras extends Mongoose.Schema {
  constructor() {
    super({
      produto: [
        {
          type: Mongoose.Schema.Types.ObjectId,
          ref: "Produto",
          required: true
        }
      ],
      valorTotal: {
        type: Number,
        required: true
      },
      data: {
        type: String,
        required: true
      },
      pagamento: {
        type: String,
        enum: ["CREDITO", "DEBITO", "DINHEIRO"]
      }
    });

    Mongoose.model("Compras", this);
  }
}

module.exports = Compras;
