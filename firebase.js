import admin from 'firebase-admin'
import { readFile } from 'fs/promises'

 const serviceAccount = JSON.parse(
     await readFile(
         new URL('./ecommerce-matias-firebase-adminsdk-kbl92-28477215cb.json', import.meta.url)
     )
 )

 admin.initializeApp({
     credential: admin.credential.cert(serviceAccount),
     databaseURL: 'https://ecommerce-matias.firebaseio.com'
 })

 const db = admin.firestore()
 const query = db.collection('products')
 //const queryCart = db.collection('cart')

//export default queryCart
export default query 
