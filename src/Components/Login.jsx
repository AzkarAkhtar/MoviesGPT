import { useRef, useState } from "react";
import Header from "./Header";
import Validation from "../Utils/Validation";

const Login = () => {

  const email = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState(null);

  const handlesigninbutton = () =>{
    const message = Validation(email.current.value,password.current.value);
    setError(message);
  }
  return (
    <div className="relative min-h-screen">
  <img 
    src="https://assets.nflxext.com/ffe/siteui/vlv3/6d631aa6-567d-46ef-a644-b5b00e4334d2/web/IN-en-20251215-TRIFECTA-perspective_f1cab02a-e42b-4913-a7d9-c5fe0f94f68d_large.jpg" 
    alt="Netflix background" 
    className="h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/70"></div>

  <div className="absolute top-0 left-0 w-full z-20">
    <Header />
  </div>


  <div className="absolute inset-0 flex justify-center items-center z-10">
    <div className="bg-opacity-200 p-10 rounded-md w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-white">Sign In</h2>
      
      <form onSubmit = {(e) => e.preventDefault()} className="flex flex-col space-y-4">
        <input 
          ref = {email}
          type="email" 
          placeholder="Email or phone number" 
          className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600" 
        />
        <input 
          ref = {password}
          type="password" 
          placeholder="Password" 
          className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600" 
        />
        
        <p className="text-red-500">{error}</p>

        <button 
          className="bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded"
          onClick={handlesigninbutton}
          >
          Sign In
        </button>
        
        <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-red-600" />
            <span>Remember me</span>
          </label>
          <a href="#" className="hover:underline">Need help?</a>
        </div>
      </form>

      <div className="mt-6 text-gray-400 text-sm">
        <p>New to Netflix? <a href="#" className="text-white hover:underline">Sign up now</a></p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login;