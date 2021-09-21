const AuthorController = require('../controllers/controller');

module.exports = function(app){
    app.post("/api/author", AuthorController.createNewAuthor)
    app.get("/api/author", AuthorController.getAllAuthors);
    app.get("/api/author/:id", AuthorController.getOneAuthor);
    app.put("/api/author/:id", AuthorController.updateExistingAuthor);
    app.delete("/api/author/:id", AuthorController.deleteAuthor);
}