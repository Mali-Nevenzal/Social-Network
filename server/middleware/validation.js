function emailValid(email)
{
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && email.match(emailFormat)) { return true; }
    console.log("the email is not validL: "+email)
    return false;
}

function phonenumberValid(inputtxt) {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(inputtxt.match(phoneno)) 
      return true;
      console.log("the phone is not validL: "+inputtxt)
    return false;
  }

  function userNameValid(input) {
    var regex = /^[a-zA-Z]+$/;
    if ((input.length > 11) || !regex.test(input)) 
      return false;
      console.log("the userName is not validL: "+input)
    return true;
  }

  
  export {phonenumberValid,emailValid,userNameValid}

 
