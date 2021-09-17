import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { Link } from "react-router-dom";

const OneProduct = () => {
    const { idParam } = useParams();
    const [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${idParam}`)
            .then(res=>{
                console.log("response***", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>console.log("error***", err))
    },[idParam])


    return (
        <div>
            <h1>{productInfo.title}</h1>
            <p>Price: {productInfo.price}</p>
            <p>Description: {productInfo.description}</p>
            <h4><Link to = {`/`} className="btn btn-info">Home</Link> | <Link to = {`/product/edit/${productInfo._id}`} className="btn btn-info">Edit</Link></h4>
        </div>
    );
};

export default OneProduct;