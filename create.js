import { db } from "./db.js"
import { productsModel } from "./db.js"

const data = {
    title: 'Matu',
    price: 40,
    stock: 40,
    thumbnail: 'bla',
    code: 'bla',
    description: 'bla',
}

const user = new productsModel(data)

db
  .then(_ => user.save())
  .then(document => console.log('User saved', document))
  .catch(err => console.log(`Error: ${err.message}`))
  .finally(() => process.exit())