const JokeController = require("../controllers/controller");


module.exports = app => {
    app.get("/api", JokeController.helloworld);
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/jokes", JokeController.createNewJoke);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.put("/api/jokes/:id", JokeController.updateExistingJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJoke);

}