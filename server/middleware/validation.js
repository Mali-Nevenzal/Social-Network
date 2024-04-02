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

  export {phonenumberValid,emailValid}