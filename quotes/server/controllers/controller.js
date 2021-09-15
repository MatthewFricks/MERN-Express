const Quote = require("../models/model");



module.exports.helloworld = (req, res) => {
    res.json({ message: "Hello Quotes-api with mongoose modularized!!!" });
}

module.exports.findAllQuotes = (req,res)=>{
    Quote.find()
        .then(allQuotes=>{
            res.json({results: allQuotes})
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.createNewQuote = (req,res)=>{
    Quote.create(req.body)
        .then(newQuoteObj=>{
            res.json({results: newQuoteObj })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOneQuote = (req,res)=>{
    console.log("trying to find one quote!")
    console.log(req.params.id)
    Quote.findOne({_id:req.params.id})
        .then(foundQuote=>{
            res.json({results: foundQuote })
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.updateExistingQuote = (req, res) => {
    Quote.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id
        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedQuote => {
            res.json({ results: updatedQuote })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deleteQuote = (req,res)=>{
    Quote.deleteOne({_id: req.params.id})
        .then(deletedQuote =>{
            res.json({results: deletedQuote})
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findRandomQuote = (req,res)=>{
    console.log("trying to find random quote thoooo")
    Quote.find()
        .then(allQuotes=>{
            console.log("all quotes looks like this")
            let lengthOfAllQuotes = allQuotes.length;
            //get a random number from 0 to lengthOfAllQuotes

            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }
            let randomIndex = getRandomInt(lengthOfAllQuotes)

            console.log(allQuotes[randomIndex])
            res.json({results: allQuotes[randomIndex]})
        })
        .catch(err=>{
            res.json({err:err})
        })
}