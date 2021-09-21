import React, { useState } from 'react'

export default props => {
    const { initialAuthor, onSubmitProp } = props;
    const [author, setAuthor] = useState(initialAuthor);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({author});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Author</label><br />
                <input 
                    type="text" 
                    name="author" value={author} 
                    onChange={(e) => { setAuthor(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    )
}
