class contenedorMongo {
    constructor(db, model) {
        this.db = db;
        this.model = model;
    }

    async getElems(req, res) {
        return this.db
        .then(_ => this.model.find({}))
        .then(data => {
            return data
        })
    }

    async getElem(req, res) {
        return this.db
        .then(_ => this.model.find({_id: req.params.id}))
        .then(data => {
            return data
        })
    }

    async postElem(req, res) {
        const element = req.body;
        const newElem = new this.model(element);

        return this.db
        .then(_ => newElem.save())
        .then(document => {
            return document
        })
    }

    async putElem(req, res) {
        const elemMod = req.body;

        return this.db
        .then(_ => this.model.findOne({_id: req.params.id}))
        .then(elem => {
            console.log(elem)
            elem = elemMod
            elem.save()
            console.log(elem);
        })
        .catch(err => console.log("there was an error", err))
    }

    async deleteElem(req, res) { 
        this.db
        .then(_ => this.model.findOne({_id: req.params.id}))
        .then(elem => {
            return elem.remove()
        })
        .catch(err => console.log("product not found", err))
    }
}

export default contenedorMongo;