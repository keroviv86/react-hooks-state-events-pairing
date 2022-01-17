import video from "../data/video.js";
import Comments from "./Comments"
import React, {useState} from "react";

function App() {
  // console.log("Here's your data:", video)
  const [upVote, upVoteSetter]= useState(video.upvotes)
  const [downVote, downVoteSetter]= useState(video.downvotes)
  const [commentView, commentViewSetter]= useState(false)

  function handleClickUp(){
    console.log("clicked")
    upVoteSetter(upVote+1)
  }

  function handleClickDown(){
    let currentDownVote = downVote -1
    downVoteSetter(currentDownVote)
  }

  function toggleCommentView(){
    commentViewSetter((commentView)=> !commentView)
  }
  

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <small>{video.views} | {video.createdAt}</small>
      <div>
        <button onClick={handleClickUp}>{upVote}👍</button>
        <button onClick={handleClickDown}>{downVote}👎</button>
      </div>
      <br/>
      <button onClick = {toggleCommentView}>{commentView ? "Show": "Hide"} Comments</button>
      {commentView ? <Comments comments={video.comments} /> : null}
    </div>
  );
}

export default App;
