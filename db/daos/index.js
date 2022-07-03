import ProductsDAOMongoDb from "./productsDAOMongoDb.js";
import CartDAOMongoDb from "./cartDAOMongoDb.js";


const getStorage = () => {
    const storage = process.env.STORAGE || 'mongodb'
    switch (storage) {
      case 'mongodb':
        return {
          products: new ProductsDAOMongoDb(),
          cart: new CartDAOMongoDb()
        }
        break
    }
  }

  export default getStorage;