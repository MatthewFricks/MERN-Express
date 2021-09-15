const Joke = require("../models/model");



module.exports.helloworld = (req, res) => {
    res.json({ message: "Hello Jokes-api with mongoose modularized!!!" });
}

module.exports.findAllJokes = (req,res)=>{
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.createNewJoke = (req,res)=>{
    Joke.create(req.body)
        .then(newJokeObj=>{
            res.json({results: newJokeObj })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOneJoke = (req,res)=>{
    console.log("trying to find one Joke!")
    console.log(req.params.id)
    Joke.findOne({_id:req.params.id})
        .then(foundJoke=>{
            res.json({results: foundJoke })
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body, 
        { new: true, runValidators: true } 
    )
        .then(updatedJoke => {
            res.json({ results: updatedJoke })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err=>{
            res.json({err:err})
        })
}
