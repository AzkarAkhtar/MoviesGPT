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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-gradient-to-b from-black via-black/80 to-transparent px-6 py-4">
  <Header />

  <ul className="hidden md:flex space-x-6 text-white font-medium">
    <li className="cursor-pointer hover:text-gray-300 transition">Home</li>
    <li className="cursor-pointer hover:text-gray-300 transition">TV Shows</li>
    <li className="cursor-pointer hover:text-gray-300 transition">Movies</li>
    <li className="cursor-pointer hover:text-gray-300 transition">New & Popular</li>
    <li className="cursor-pointer hover:text-gray-300 transition">My List</li>
  </ul>

  <div className="flex items-center space-x-4 text-white relative">
    <button className="hover:text-gray-300 transition">Search</button>
    <button className="hover:text-gray-300 transition">Kids</button>
    <button className="hover:text-gray-300 transition">Notifications</button>

    <div className="relative">
      <div
        className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {displayName.charAt(0).toUpperCase()}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-black text-white rounded shadow-lg border border-gray-700">
          <ul className="flex flex-col">
            <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
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