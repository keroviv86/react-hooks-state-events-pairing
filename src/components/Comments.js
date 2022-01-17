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

    function handleUpVote(id){
        let addVotes =  commentList.map((comment) => {
            if (comment.id === id){
                comment.upvotes +=1
            }
            return comment
        })
        commentListSetter(addVotes)
    }

    function handleDownVote(id){
        let minusVotes =  commentList.map((comment) => {
            if (comment.id === id){
                comment.downvotes -=1
            }
            return comment
        })
        commentListSetter(minusVotes)
    }

    let displayComments = commentList.map((comment)=>(
        <Comment 
            key= {comment.id}
            id = {comment.id}
            user= {comment.user}
            comment= {comment.comment}
            upvotes = {0}
            downvotes= {0}
            removeComment= {removeComment} 
            handleUpVote= {handleUpVote}
            handleDownVote = {handleDownVote}
            commentList = {commentList}
        />
    ))
    return(
    <div>
        <h2>{commentList.length} Comments</h2>
        {displayComments}
    </div>

    )
    

}

export default Comments;