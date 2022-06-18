import React,{useState} from 'react';
import HandleForm from './HandleForm'
function SignIn(){
    const [value,setValue] = useState('')
    const handleSubmit = ()=>{

    }
    return (
        <div>
          <HandleForm  handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
          heading="Login"
           />
        </div>
    )
}
export default SignIn;