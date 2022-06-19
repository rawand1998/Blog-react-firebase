import React, { useState } from "react";
import firebase from "../firebase";
import { addDoc, collection, query } from "@firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
function BlogForm() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  let navigate = useNavigate();
  const addPost = async (e) => {
    e.preventDefault();
    const postRef = collection(db, "posts");
    const post = { title, text };
    await addDoc(postRef, post).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="login-container">
      <div className="login">
        <h3 className="login-word-post">Create New Post</h3>
        <p className="login-welocme">Welcome onboard with us!</p>
        <form className="login-form">
          <label className="login-label">Title</label>
          <input
            type="text"
            placeholder="Add New Post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="login-label">Text</label>
          <input
            type="text"
            placeholder="Add New Post"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addPost}>Add Post</button>
        </form>
      </div>
    </div>
  );
}
export default BlogForm;
