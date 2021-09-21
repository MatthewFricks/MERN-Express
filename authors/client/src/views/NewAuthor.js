import axios from 'axios';
import { useHistory } from "react-router-dom";
import Form from '../components/Form';

const NewAuthor = () => {

    const history = useHistory()

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author', author)
            .then(res=>([res.data.results]))
            history.push("/")
    }

    return (
        <div>
            <h2>Add New Author</h2>
            <Form onSubmitProp={createAuthor} initialAuthor=""/>
        </div>
    )
}
export default NewAuthor;