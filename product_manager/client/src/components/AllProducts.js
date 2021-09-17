import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    const [deleteClick, setDeleteClick] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => {
                setAllProducts(res.data);
                console.log(res.data);
            })
            .catch(err => console.log("error***", err))
    }, [deleteClick])


    const deleteHandler = (e, productID)=>{
        axios.delete(`http://localhost:8000/api/product/${productID}`)
            .then(res=>{
                setDeleteClick(!deleteClick)
            })
            .catch(err => console.log("error****", err))
    }




    return (
        <div>
            <h3>All products</h3>
            <h4><Link to={`/new`}>New Product</Link></h4>
            {allProducts.map((product, i) => {
                return <div key={i}>
                    <div>
                        <h4><Link to={`/product/${product._id}`}>{product.title}</Link></h4>
                        <p>Price: {product.price}</p>
                        <p>Description: {product.description}</p>
                        <p><button onClick= {(e)=>deleteHandler(e,product._id)} className="btn btn-danger">Delete</button></p>
                    </div>
                    
                </div>
            })}
        </div>
    );
};
export default AllProducts;