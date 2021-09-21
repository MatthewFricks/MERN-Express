import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './DeleteButton';
    
const AuthorList = (props) => {
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setAuthor(res.data));
    }, [])
    
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId))
    }
    
    return (
        <div>
            {author.map((author, idx) => {
                return (
                    <p key={idx}>
                        {/* <Link to={"/" + author._id}> */}
                        {author.author},
                        {/* </Link> */}
                        |
                        <Link to={"/update/" + author._id}>
                            Edit
                        </Link> 
                        |
                        <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
                    </p>
                )
            })}
        </div>
    );
}
    
export default AuthorList;