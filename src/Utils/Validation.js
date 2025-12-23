
const Validation = (email, password, name) => {
  const isEmailValid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const isValidname= /^[a-zA-Z]+([ \-\'][a-zA-Z]+){0,2}[.]{0,1}$/.test(name); 

  if(!isEmailValid) return ("Email is Invalid");
  if(!isPasswordStrong) return ("Password is Invalid");
  if(!isValidname) return ("Name is Invalid");

  return null;

}

export default Validation;