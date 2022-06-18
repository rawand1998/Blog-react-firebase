import React from 'react';
import firebase from '../firebase'
import {auth } from '../firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,} from'firebase/auth';

export const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth,email, password);
 
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

export const register= async(email, password)=>{

    try{
        
      await createUserWithEmailAndPassword(auth,email,password);
    }catch(err)
    {console.error(err)}
}