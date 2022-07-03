import contenedorMongoDb from "../contenedores/contenedorMongoDb.js";
import { db, productsModel} from "../db.js";

class ProductsDAOMongoDb extends contenedorMongoDb {
    constructor() {
      super(db, productsModel)
    }
  }

export default ProductsDAOMongoDb