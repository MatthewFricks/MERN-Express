import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";


const Edit = () => {
    const { idParam } = useParams();
    console.log(idParam)
    const history = useHistory(); 

    const [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${idParam}`)
            .then(res=>{
                console.log("response***", res)
                setProductInfo(res.data.results)
                console.log(res.data.results)
            })
            .catch(err=>console.log("error*** ", err))
    },[idParam])


    const changeHandler = (e)=>{
        console.log("something changed")
        console.log(e.target.name, e.target.value)
        setProductInfo({ 
            ...productInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${idParam}`, productInfo )
            .then(res=>{
                console.log("response****",res)
                history.push(`/product/${idParam}`);
            })
            .catch(err=> console.log("error****, ", err))
    }


    return (
        <div>
            <h1>Edit {idParam} </h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">Title:</label>
                    <input onChange = {changeHandler} type="text" name="title" id="" value = {productInfo.title} />
                    {/* <p className="text-danger">{validationErrors.name? validationErrors.name.message: ""}</p> */}
                </div>
                <div>
                    <label htmlFor="">Price:</label>
                    <input onChange = {changeHandler} type="number" name="price" id="" value = {productInfo.price} />
                    {/* <p className="text-danger">{validationErrors.numProjects? validationErrors.numProjects.message:""}</p> */}
                </div>
                <div>
                    <label htmlFor="">Description:</label>
                    <input onChange = {changeHandler} type="text" name="description" id="" value = {productInfo.description}/>
                    {/* <p className="text-danger">{validationErrors.graduationDate? validationErrors.graduationDate.message: ""}</p> */}
                </div>
                <input className= "btn btn-primary"type="submit" value="Update" />
            </form>
        </div>
    );
};


export default Edit;