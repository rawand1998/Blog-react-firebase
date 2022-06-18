import React from 'react';
import firebase from '../firebase'
import {auth } from '../firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,} from'firebase/auth';
import { addDoc,collection ,query} from '@firebase/firestore';
import {db} from '../firebase'
// const postsCollectionRef = collection(db, "name");

export const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth,email, password);
 
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

export const register= async(userName,email, password)=>{

    try{
        
    const res=  await createUserWithEmailAndPassword(auth,email,password)
    //     const user= res.user
    //     console.log(addDoc(postsCollectionRef,{name:userName}),"cmjbned")
    //    addDoc(postsCollectionRef,{
    //     name:userName
    //    })
    
  
      
    }catch(err)
    {console.error(err)}
}