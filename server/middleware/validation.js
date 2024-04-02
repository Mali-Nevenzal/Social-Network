function emailValid(email)
{
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && email.match(emailFormat)) { return true; }
    return false;
}

function phonenumberValid(inputtxt) {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(inputtxt.value.match(phoneno)) 
      return true;
    return false;
  }

  function userNameValid(input) {
    var regex = /^[a-zA-Z]+$/;
        if (input.length > 11) {
      return false;
    }
        if (regex.test(input)) {
      return true;
    } else {
      return false;
    }
  }
  export {phonenumberValid,emailValid,userNameValid}

 
