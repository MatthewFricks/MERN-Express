const Product = require("../models/model");

module.exports.createNewProduct = (req,res)=>{
    Product.create(req.body)
        .then(newProductObj=>{
            res.json({results: newProductObj })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

// module.exports.getAllProducts = (req,res)=>{
//     Product.find()
//         .then(allProducts=>{
//             res.json({results: allProducts})
//         })
//         .catch(err=>{
//             res.json({err:err})
//         })
// }

module.exports.getOneProduct = (req,res)=>{
    console.log("trying to find one product!")
    console.log(req.params.id)
    Product.findOne({_id:req.params.id})
        .then(foundProduct=>{
            res.json({results: foundProduct })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body, 
        { new: true, runValidators: true } 
    )
        .then(updatedProduct => {
            res.json({ results: updatedProduct })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deleteProduct = (req,res)=>{
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct =>{
            res.json({results: deletedProduct})
        })
        .catch(err=>{
            res.json({err:err})
        })
}
