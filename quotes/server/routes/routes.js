
const QuoteController = require("../controllers/controller");


module.exports = app => {
    app.get("/api", QuoteController.helloworld);
    app.get("/api/quotes", QuoteController.findAllQuotes);
    app.post("/api/quotes", QuoteController.createNewQuote);
    app.get("/api/quotes/random", QuoteController.findRandomQuote)
    app.get("/api/quotes/:id", QuoteController.findOneQuote);
    app.put("/api/quotes/:id", QuoteController.updateExistingQuote);
    app.delete("/api/quotes/:id", QuoteController.deleteQuote);

}