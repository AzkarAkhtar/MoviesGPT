import { useState } from "react";
import Header from "./Header";
import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

  const displayName = user?.displayName || "GPT";
  console.log("Navbar Rendered - User:", user);

  return (
    <nav className="flex items-center justify-between bg-black px-6 py-2">
      <Header />

      <ul className="flex space-x-6 text-white font-medium">
        <li className="cursor-pointer hover:text-gray-400">Home</li>
        <li className="cursor-pointer hover:text-gray-400">TV Shows</li>
        <li className="cursor-pointer hover:text-gray-400">Movies</li>
        <li className="cursor-pointer hover:text-gray-400">New & Popular</li>
        <li className="cursor-pointer hover:text-gray-400">My List</li>
      </ul>

      <div className="flex items-center space-x-4 text-white relative">
        <button className="hover:text-gray-400">Search</button>
        <button className="hover:text-gray-400">Kids</button>
        <button className="hover:text-gray-400">Notifications</button>

        <div className="relative">
          <div
            className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {displayName.charAt(0).toUpperCase()}
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded shadow-lg">
              <ul className="flex flex-col">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <button onClick={handleSignOut}>Sign Out</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;