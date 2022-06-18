import React from 'react';
import firebase from '../firebase'
import {auth } from '../firebase'
import {signInWithEmailAndPassword} from'firebase/auth';

export const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };