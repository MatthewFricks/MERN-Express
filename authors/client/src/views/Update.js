import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import Form from '../components/Form';

const Update = (props) => {
    
    const history = useHistory()
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data.results);
                setLoaded(true);
            })
    }, [id]);
    
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
            .then(res => console.log(res));
            history.push("/")
    }
    
    return (
        <div>
            <h2>Edit this Author</h2>
            {loaded && (
                <>
                    <Form
                        onSubmitProp={updateAuthor}
                        initialAuthor={author.author}
                    />
                </>
            )}
        </div>
    )
}
    
export default Update;