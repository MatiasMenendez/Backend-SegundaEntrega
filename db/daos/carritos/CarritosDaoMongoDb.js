import contenedorMongoDb from "../contenedores/contenedorMongoDb.js";
import { db, cartModel} from "../db.js";

class ProductsDAOMongoDb extends contenedorMongoDb {
    constructor() {
      super(db, cartModel)
    }

    async getCartProds(req, res) {
      return this.db
        .then(_ => this.model.findOne({_id: req.params.id}))
        .then(data => {
            console.log(data)
            return res.json({Productos: [data.products]})
        })
        .catch(err => {res.send(err); throw err})

    }

    async addToCart(req, res) {
      const productoNuevo = req.body;

      return this.db
        .then(_ => this.model.findOne({_id: req.params.id}))
        .then(data => {
            data.products.push(productoNuevo)
            data.save();
            console.log(data)
        })
        .then(_=> {
          res.json({Mensaje: "Product added"})
        })
        .catch(err => {res.send(err); throw err})
    }

    async deleteCartProd(req, res) {
      return this.db
        .then(_ => this.model.findOne({_id: req.params.id}))
        .then(cart=> {
           cart.products.id(req.params.id_prod).remove()
           cart.save();
        })
        .then(_ => res.json({Mensaje: "Product deleted"}))
        .catch(err => res.send("product not found"))
    }
  }

export default ProductsDAOMongoDb;