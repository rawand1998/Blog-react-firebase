import React ,{useStat} from 'react'
import './App.css';
import SignIn from './Compoments/SignIn';
import SignUp from './Compoments/SignUp';
import BlogForm from './Compoments/BlogForm';
import AllPost from './Compoments/AllPost';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  
  return (
   <Router>
    <nav>
      <Link to="/"></Link>
      <Link to="/login">Login</Link>
      <Link to="/register">register</Link>
      <Link to="/create/post">Create Post</Link>
    </nav>
    <Routes>
    <Route path="/" element={<AllPost />}/>
      <Route path="/login" element={<SignIn />}/>
      <Route path="/register" element={<SignUp />}/>
      <Route path="//create/post" element={<BlogForm />}/>
    </Routes>
   </Router>
  
  );
}

export default App;
