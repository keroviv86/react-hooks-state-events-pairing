import React, {useState} from "react";
import Comment from "./Comment"
function Comments({comments}){
    const [commentList, commentListSetter] = useState(comments)
    console.log(comments)

    function removeComment(id){
        console.log(id)
        let remainComments = commentList.filter((comment) => (
            comment.id !== id
        ))
        commentListSetter(remainComments)
    }
    let displayComments = commentList.map((comment)=>(
        <Comment 
            key= {comment.id}
            id = {comment.id}
            user= {comment.user}
            comment= {comment.comment}
            removeComment= {removeComment} 
        />
    ))
    return(
    <div>
        <h2>{comments.length} Comments</h2>
        {displayComments}
    </div>

    )
    

}

export default Comments;