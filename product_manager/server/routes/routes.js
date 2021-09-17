const ProdController = require('../controllers/controller');

module.exports = function(app){
    app.post("/api/product", ProdController.createNewProduct)
    app.get("/api/product", ProdController.getAllProducts);
    app.get("/api/product/:id", ProdController.getOneProduct);
    app.put("/api/product/:id", ProdController.updateExistingProduct);
    app.delete("/api/product/:id", ProdController.deleteProduct);
}