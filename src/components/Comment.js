import React from "react";

function Comment({id, user, comment, removeComment}){
    function handleDelete(){
        removeComment(id)
    }
    return (
        <>
            <h2>{user}</h2>
            <span>
                <h4>{comment}</h4>
                <button onClick={handleDelete}>Remove Comment</button>
            </span>
            
        </>

    )
}
export default Comment;