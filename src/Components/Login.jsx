import { useRef, useState } from "react";
import Header from "./Header";
import Validation from "../Utils/Validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);

  const handlesigninbutton = () => {
    const message = Validation(
      email.current.value,
      password.current.value,
      isSignIn ? null : name.current?.value
    );
    setError(message);
    if (message) return;

    //sign up logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          })
            .then(() => {
              const { uid, email, displayName} = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
         const errorMessage = error.message;
          setError(errorMessage);
        });
    }

    //sign in logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
  
        const user = userCredential.user;
        console.log("User signed in:", user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

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
        <div className="bg-black bg-opacity-70 p-10 rounded-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-white">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-4">
            {!isSignIn && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email or phone number"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <p className="text-red-500">{error}</p>

            <button
              type="button"
              className="bg-red-600 hover:bg-green-700 transition text-white font-semibold py-3 rounded cursor-pointer"
              onClick={handlesigninbutton}
            >
              {isSignIn ? "Sign In" : "Sign Up"}
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
            <p
              className="text-white hover:underline cursor-pointer"
              onClick={handleSignUp}
            >
              {isSignIn ? "New to MoviesGPT? Sign up now" : "Already have an account? Sign in now"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;