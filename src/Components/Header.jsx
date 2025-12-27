import React, { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { auth } from "../Utils/Firebase"
import { addUser, clearUser } from "../Utils/userSlice"
import { useSelector } from "react-redux"
const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName
          })
        );
        navigate("/browse");
      } else {
        dispatch(clearUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);


  return (
    <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" className="h-20 p-4" />
    </div>
  )
}

export default Header