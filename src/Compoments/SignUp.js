import React,{useState} from 'react';
import {auth,registerWithEmailAndPassword} from '../firebase'
import {register} from '../hooks'
import { useNavigate } from "react-router-dom";

function SignUp(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    let navigate = useNavigate();
  
    const handleSubmit = ()=>{
        
        register(email,password)
        navigate("/")
     
    }
    return (
        <div>
            <form>
                {/* <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/> */}
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Register</button>
            </form>
           
       
           
        </div>
    )
}
export default SignUp;