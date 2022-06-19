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
    console.log("postList", postsList);
  }, [deletePost]);

  return (
    <div className="homePage">
      {postsList.map((post) => {
        return (
          <div className="post" >
            <div className="postHeader">
              <div className="title">
                <h3> {post.title}</h3>
                <button onClick={() => deletePost(post.id)} className="btn-delete">Delete</button>
              </div>
            </div>
            <div className="postTextContainer">{post.text} </div>
          </div>
        );
      })} 
    </div>
  );
}
export default AllPost;
