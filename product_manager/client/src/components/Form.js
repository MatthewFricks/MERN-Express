import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

const NewForm = () => {

    const history = useHistory(); 

    let [formInfo, setFormInfo] = useState({
        title: null,
        price: null,
        description: null,
    }); 

    let [validationErrors, setValidationErrors] = useState({})


    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitted with this info-->", formInfo)
        axios.post("http://localhost:8000/api/product", formInfo)
            .then(res=>{
                console.log("response after submitting post request-->", res)
                if(res.data.err){ 
                    setValidationErrors(res.data.err.errors)
                }
                else{
                    history.push("/");
                }
            })
            .catch(err=>console.log("errrrrr-->", err))
    }

    const changeHandler = (e)=>{
        console.log("something changed")
        console.log(e.target.name, e.target.value)
        setFormInfo({ 
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={ submitHandler }>
                <div>
                    <label htmlFor="">Title:</label><br/>
                    <input onChange={ changeHandler } type="text" name="title" id=""/>
                    <p className="text-danger">{ validationErrors.title?.message }</p>
                </div>
                <div>
                    <label>Price:</label><br/>
                    <input onChange={ changeHandler } type="text" name="price" id=""/>
                    <p className="text-danger">{ validationErrors.price?.message }</p>
                </div>
                <div>
                    <label>Description</label><br/>
                    <input onChange={ changeHandler } type="text" name="description" id=""/>
                    <p className="text-danger">{ validationErrors.description?.message }</p>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default NewForm;