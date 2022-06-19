import React,{useState} from 'react';
import {logInWithEmailAndPassword} from '../hooks'
import { useNavigate } from "react-router-dom";

function SignIn(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    let navigate = useNavigate();
    const handleSubmit = (e)=>{
       
        logInWithEmailAndPassword(email,password)
        navigate("/")
    }
    return (
        <div>
            <form>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
            </form>
           
       
           
        </div>
    )
}
export default SignIn;