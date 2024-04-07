import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ContinueRegistration = ({ username, password }) => {

  const fields = {
    name: '',
    username: username,
    email: '',
    phone: ''
  }
  const fieldsError = {
    name: '',
    email: '',
    phone: ''
  }

  const [userDetails, setUserDetails] = useState(fields);
  const [errorDisplay, setErrorDisplay] = useState(fieldsError);
  const [globalError, setGlobalError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setGlobalError("");
  }, [userDetails])



  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };
  const isValidString = (inputString) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(inputString);
  };
  const isValidNumber = (inputString) => {
    const regex = /^[-0-9]+$/;
    return regex.test(inputString);
  };

  const checkValidation = (name, internalName, value, validFunc, errorString = `Invalid ${internalName}.`) => {
    if (name.includes('.')) {
      const [parentKey, childKey] = name.split('.');
      setErrorDisplay((prevData) => ({ ...prevData, [parentKey]: { ...prevData[parentKey], [childKey]: !validFunc(value) ? errorString : "" } }));
    } else {
      setErrorDisplay((prevData) => ({ ...prevData, [name]: !validFunc(value) ? errorString : "" }));
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    let internalName = name;
    if (name.includes('.')) {
      const [parentKey, childKey] = name.split('.');
      internalName = childKey;
      setUserDetails((prevData) => ({ ...prevData, [parentKey]: { ...prevData[parentKey], [childKey]: value } }));
    } else {
      setUserDetails((prevData) => ({ ...prevData, [name]: value }));
    }
    switch (internalName) {
      case "name":
        checkValidation(name, internalName, value, isValidString); break;
      case "email":
        checkValidation(name, internalName, value, isValidEmail, "Email address must contain '.' and '@'."); break;
      case "phone":
        checkValidation(name, internalName, value, isValidNumber); break;
      default: break;
    }
  };

  const isObjectEmpty = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        if (!isObjectEmpty(obj[key])) {
          return false;
        }
      } else if (obj[key] !== '' && obj[key] !== 0 && obj[key] !== "0") {
        return false;
      }
    }
    return true;
  };

  const postRequest =async () => {
    await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username:username,password:password}),
    }).then(response => {
    if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
    }
    }).catch(error => {
    console.error(error);
    setGlobalError("Server error. try again later.")
    }) 



    // fetch('http://localhost:8080/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userDetails),
    // }).then(response => {
    //   if (!response.ok) {
    //     throw new Error(`Request failed with status: ${response.status}`);
    //   }
    //   else {
    //     const userId = response.json();
    //     userDetails.id = userId.data;
    //     const updatedUser = { ...userDetails };
    //     localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    //     navigate(`/users/${userDetails.id}/home`);
    //   }
    // }).catch(error => {
    //   console.error(error);
    //   setGlobalError("Server error. try again later.")
    // })
    fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails),
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            const userId = response.json();
            userDetails.id = userId.insertId;
            //setTodos([...todos, userDetails]);
            localStorage.setItem("currentUser", JSON.stringify(userDetails));
            navigate(`/users/${userDetails.id}/home`);
            //setCommentArea("");
        }).catch(error => {
            console.error(error);
            setGlobalError("Server error. try again later.")
        })
  }

  const handleSubmit = (e) => {
    setUserDetails((prevData) => ({ ...prevData, username: username }));
    e.preventDefault();
    if (!isObjectEmpty(errorDisplay)) {
      return;
    }
    postRequest();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Personal Information:</h4>
      <label>
        Name:
        <input type="text" name="name" value={userDetails.name} onChange={handleChange} required noValidate />
      </label>
      {<p className='commentArea'>{errorDisplay.name}</p>}

      <label>
        Email:
        <input type="email" name="email" value={userDetails.email} onChange={handleChange} required noValidate />
      </label>
      {<p className='commentArea'>{errorDisplay.email}</p>}

      <label>
        Phone:
        <input type="text" name="phone" value={userDetails.phone} onChange={handleChange} required noValidate />
      </label>
      {<p className='commentArea'>{errorDisplay.phone}</p>}

      
      <button className="addButton" type="submit">Register</button>
      {<p className='commentArea'>{globalError}</p>}<br />
    </form>

  );
};
export default ContinueRegistration;