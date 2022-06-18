import React,{useState} from 'react';
import {auth,registerWithEmailAndPassword} from '../firebase'
import {register} from '../hooks'
function SignUp(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // const [userName,setUserName] = useState('')
  
    const handleSubmit = ()=>{
        
        register(email,password)
     
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