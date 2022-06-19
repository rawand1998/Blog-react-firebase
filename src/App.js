
import './App.css';
import SignIn from './Compoments/SignIn';
import SignUp from './Compoments/SignUp';
import BlogForm from './Compoments/BlogForm';
import AllPost from './Compoments/AllPost';
function App() {
  return (
    <div className="App">
     {/* <SignIn />
     <SignUp /> */}
     <BlogForm />
     <AllPost />
    </div>
  );
}

export default App;
