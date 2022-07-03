import query from '../../firebase.js'
//import queryCart from '../../firebase.js';

 class Productos {
     constructor(base) {
         this.base = base;
     }

     async readProducts(req, res) {
         try{
             const docs = await query.get()
             const products = docs.docs.map(doc => {
               return {
                   id: doc.id,
                   ...doc.data()
               }
             })
             res.json({base: products})
          } catch (e) {
              console.log(`Error: ${e.message}`)
          }}


          async readProduct(req, res) {

            const id = 'zymFOF3wYsxXNbw9ylbX'
            const doc = query.doc(id)

            try{
                const response = await doc.get()
                const product = {
                    id: response.id,
                    ...response.data()
                }
                res.json({base: product})
             } catch (e) {
                 console.log(`Error: ${e.message}`)
             }}



            async createProduct(req, res) {
                const productNew = req.body
                try{
                    query.add(productNew)
                    res.send("Product added")
                  } catch (e) {
                      console.log(`Error: ${e.message}`)
                  }
            }


           async updateProduct(req, res) {
                const prodMod = req.body;
                const id = 'zymFOF3wYsxXNbw9ylbX';
                const doc = query.doc(id);
                try{
                    const product = await doc.update(prodMod)
                    console.log(product)
                    res.send("Product modified")
                  } catch (e) {
                      console.log(`Error: ${e.message}`)
                  }
            }


           async deleteProduct(req, res) {
            const id = 'VBOi8ZIwmW6FLT1Y8SDC'
            const doc = query.doc(id)

            try{
                const product = await doc.delete()
                console.log(product)
                res.send("Product deleted")
                } catch (e) {
                console.log(`Error: ${e.message}`)
                }
            }


            // carts

            async readCarts(req, res) {
                try{
                    const docs = await queryCart.get()
                    const carts = docs.docs.map(doc => {
                      return {
                          id: doc.id,
                          ...doc.data()
                      }
                    })
                    res.json({base: carts})
                 } catch (e) {
                     console.log(`Error: ${e.message}`)
                 }}
       
       
                 async readCart(req, res) {
       
                   const id = 'zymFOF3wYsxXNbw9ylbX'
                   const doc = queryCart.doc(id)
       
                   try{
                       const response = await doc.get()
                       const cart = {
                           id: response.id,
                           ...response.data()
                       }
                       res.json({base: cart})
                    } catch (e) {
                        console.log(`Error: ${e.message}`)
                    }}
       
       
       
                   async createCart(req, res) {
                       const cartNew = req.body
                       try{
                           queryCart.add(cartNew)
                           res.send("Cart added")
                         } catch (e) {
                             console.log(`Error: ${e.message}`)
                         }
                   }
       
       
                  async updateCart(req, res) {
                       const cartMod = req.body;
                       const id = 'zymFOF3wYsxXNbw9ylbX';
                       const doc = queryCart.doc(id);
                       try{
                           const cart = await doc.update(cartMod)
                           console.log(cart)
                           res.send("Cart modified")
                         } catch (e) {
                             console.log(`Error: ${e.message}`)
                         }
                   }
       
       
                  async deleteCart(req, res) {
                   const id = 'VBOi8ZIwmW6FLT1Y8SDC'
                   const doc = queryCart.doc(id)
       
                   try{
                       const cart = await doc.delete()
                       console.log(cart)
                       res.send("Cart deleted")
                       } catch (e) {
                       console.log(`Error: ${e.message}`)
                       }
                   }
 }


export default Productos;