import React from "react";

function Comment({id, user, comment,upvotes, downvotes, removeComment, handleDownVote, handleUpVote}){
    console.log(typeof upvotes)
    function handleDelete(){
        removeComment(id)
    }

    function onUpLike(){
        handleUpVote(id)
    }

    function onDownLike(){
        handleDownVote(id)
    }
    return (
        <>
            <h2>{user}</h2>
            <span>
                <h4>{comment}</h4>
                <button onClick={onUpLike}>{upvotes}👍</button>
                <button onClick={onDownLike}>{downvotes}👎</button>
                <br/>
                <button onClick={handleDelete}>Remove Comment</button>
            </span>
        </>

    )
}
export default Comment;