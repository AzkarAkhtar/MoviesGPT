
const Validation = (email, password) => {
  const isEmailValid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if(!isEmailValid) return ("Email is Invalid");
  if(!isPasswordStrong) return ("Password is Invalid");

  return null;

}

export default Validation;