import React from 'react';
function HandleForm({handleSubmit,value,setValue,heading}){
    return (
        <div>
           <form handleSubmit={handleSubmit}>
            <h3>{heading}</h3>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <input type="password" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button type="submit">Login</button>
           </form>
        </div>
    )
}
export default HandleForm;