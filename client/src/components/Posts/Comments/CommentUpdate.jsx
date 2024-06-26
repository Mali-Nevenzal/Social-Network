
const CommentUpdate = ({ setInUpdate, commentToUpdate, setCommentArea, setComments, comments, updatedName, updatedBody, inUpdate }) => {

    const updateComment = () => {
        setInUpdate(false);
        if (commentToUpdate.name === updatedName && commentToUpdate.body === updatedBody)
            return;
        const updatedFields = { name: updatedName, body: updatedBody ,post_id: commentToUpdate.post_id,id:commentToUpdate.id};
        fetch(`http://localhost:8080/comments/${commentToUpdate.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedFields),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
                const updatedComment = { ...commentToUpdate, ["name"]: updatedName, ["body"]: updatedBody };
                setComments(comments.map(comment => comment.id === commentToUpdate.id ? updatedComment : comment));
                setCommentArea("");
            }).catch(error => {
                console.error(error);
                setCommentArea("Server error. try again later.")
            });
    }

    return (<>
        <button className="actionButton" onClick={() => setInUpdate(true)}>🖊️</button>
        {inUpdate && <button className="actionButton" onClick={() => updateComment()}>✔️</button>}
    </>)
}
export default CommentUpdate;