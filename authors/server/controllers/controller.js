const Author = require("../models/model");

module.exports.createNewAuthor = (req,res)=>{
    Author.create(req.body)
        .then(newAuthorObj=>{
            res.json({results: newAuthorObj })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

module.exports.getOneAuthor = (req,res)=>{
    console.log("trying to find one Author!")
    console.log(req.params.id)
    Author.findOne({_id:req.params.id})
        .then(foundAuthor=>{
            res.json({results: foundAuthor })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndAuthor(
        { _id: req.params.id },
        req.body, 
        { new: true, runValidators: true } 
    )
        .then(updatedAuthor => {
            res.json({ results: updatedAuthor })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deleteAuthor = (req,res)=>{
    Author.deleteOne({_id: req.params.id})
        .then(deletedAuthor =>{
            res.json({results: deletedAuthor})
        })
        .catch(err=>{
            res.json({err:err})
        })
}
