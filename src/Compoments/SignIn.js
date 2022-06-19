import React, { useState } from "react";
import { logInWithEmailAndPassword } from "../hooks";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    logInWithEmailAndPassword(email, password);
    navigate("/");
  };
  return (
    <div className="login-container">
      <div className="login">
        <h3 className="login-word">Login</h3>
        <p className="login-welocme">Welcome onboard with us!</p>
        <form className="login-form">
            <label className="login-label">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
             <label className="login-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
}
export default SignIn;
