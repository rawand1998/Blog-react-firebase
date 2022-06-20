import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
function AllPost() {
  const [postsList, setPostsList] = useState([]);
  const postRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postRef);
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
   
  }, [deletePost]);

  return (
    <div className="all-post-container">
      {postsList.map((post) => {
        return(
          <div className="postHeader">
          <div className="title">
            <h3 className="postTitle"> {post.title}</h3>

            <button onClick={() => deletePost(post.id)} className="btn-delete">
              Delete
            </button>
          </div>
          <p className="postTextContainer">{post.text} </p>
        </div>
        )
    
      })}
    </div>
  );
}
export default AllPost;
