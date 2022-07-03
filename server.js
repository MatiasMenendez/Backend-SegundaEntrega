import express from "express";
const { Router } = express;
import Productos from './db/contenedores/ContenedorFirebase.js';
import query from './firebase.js'
import { Server as HttpServer } from "http";


const app = express()
const httpServer = new HttpServer(app);

const router = Router();

const PORT = 8080;

const server = httpServer.listen(PORT, () => {
    console.log(`Server http listening in port ${server.address().port}`)
 })
server.on("error", error => console.log(`Error in server ${error}`));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
app.set("view engine", "ejs"); 
app.set("views", "./views") 



const productsFirebase = new Productos(query);



//Products endpoints firebase

router.get('/products', (req, res) => {
    return productsFirebase.readProducts(req, res)
 })

router.get('/product', (req, res) => {
    return productsFirebase.readProduct(req, res)
 })

router.post('/products', (req, res) => {
    return productsFirebase.createProduct(req, res)
})

router.put("/products", (req, res) => {
    return productsFirebase.updateProduct(req, res)
})

router.delete("/products", (req, res) => {
    return productsFirebase.deleteProduct(req, res)    
})


app.use('/', router);