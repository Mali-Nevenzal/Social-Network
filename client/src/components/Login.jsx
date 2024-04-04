import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import {GetRequest,CreateRequest} from "./Tools"

export default function Login( ) {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [commentArea, setCommentArea] = useState('');
  const [user,setUser]=useState({});
  const navigate = useNavigate();
  const isUserExist = async(usernameValue, passwordValue) => {
    const newUser=await CreateRequest(setCommentArea, "register", {username:usernameValue,password:passwordValue});
    console.log("new user is: "+newUser);
if(newUser)
    { 
          const response=await GetRequest(usernameValue, setUser, setCommentArea, "users");
          if(response)
          {localStorage.setItem("currentUser", JSON.stringify(user));
          navigate(`/users/${user.id}/home`);}}
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(`http://localhost:8080/register`, {
    //       headers: { 'Content-Type': 'application/json' },
    //       method: 'POST',
    //       body: JSON.stringify({ username: usernameValue, password: passwordValue })
    //     })
  
    //     if (!response.ok) {
    //       throw new Error(`Request failed with status: ${response.status}`);
    //     }
  
    //     const data = await response.json();
  
    //     if (Object.keys(data).length === 0) {
    //       setCommentArea("wrong username or password.");
    //     } else {
    //       console.log(data)
    //       delete data[0].password;
    //       console.log("after register get"+data[0]);
    //       await GetRequest(usernameValue, setUser, setCommentArea, "users");
    //       localStorage.setItem("currentUser", JSON.stringify(user));
    //       navigate(`/users/${data[0].id}/home`);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     setCommentArea("Server error. try again later.");
    //   }
    // };
  
    // fetchData();
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
      {commentArea && <p className='commentArea'>{commentArea}</p>}
    </>
  )
}
//export default Login;