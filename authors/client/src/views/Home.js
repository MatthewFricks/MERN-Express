import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import List from '../components/List';
const Home = () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res =>{ 
                setAuthor(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId));
    }

    return (
        <div>
            <Link to={"/new"}>Add New Author</Link> 
            {loaded && <List author={author} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Home;

// 