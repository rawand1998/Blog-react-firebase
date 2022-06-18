import React,{useState} from 'react';
import {logInWithEmailAndPassword} from '../hooks'
function SignIn(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  
    const handleSubmit = (e)=>{
        console.log(email,password)
        logInWithEmailAndPassword(email,password)
     
    }
    return (
        <div>
            <form>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
            </form>
           
       
           
        </div>
    )
}
export default SignIn;