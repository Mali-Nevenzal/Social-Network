import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {GetRequest,CreateRequest} from "./Tools"

export default function Login( ) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [commentArea, setCommentArea] = useState('');
  const [user,setUser]=useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    
  },[user])
  const isUserExist = async(usernameValue, passwordValue) => {
  const newUser=await CreateRequest(setCommentArea, "register", {username:usernameValue,password:passwordValue});

    if(newUser)
    { 
          const response= await GetRequest(usernameValue, setUser, setCommentArea, "users");
          console.log("response after getRequest : "+response)
          if(response)
          {
            localStorage.setItem("currentUser", JSON.stringify(user));
             navigate(`/users/${user.id}/home`);
          }
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;
    isUserExist(usernameValue, passwordValue);
  };

  return (
    <>
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={usernameRef} required noValidate />
        </div><br />
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} required noValidate />
        </div><br />
        <button className="addButton" type="submit">Login</button>
      </form>
      <Link className="link" to="/register">registration</Link>
      {commentArea && <p className='commentArea'>{commentArea}</p>}
    </>
  )
}
