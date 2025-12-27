import { useState } from "react";
import Header from "./Header";
import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LanguageSelector from "./LanguageSelector";
import { translations } from "../Utils/langConstant";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const currentLanguage = useSelector((state) => state.language.language);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  const displayName = user?.displayName || "GPT";

  return (
   <nav className="absolute fixed top-0 left-0 w-full flex items-center justify-between bg-transparent px-6 py-2 z-50">
  <Header />

  <div className="flex justify-center flex-1">
    <input
      type="text"
      placeholder={translations[currentLanguage].searchPlaceholder}
      className="w-96 bg-gray-800 text-white px-4 py-2 rounded focus:outline-none"
    />
    <button className="ml-2 bg-cyan-300 text-black px-4 py-2 rounded hover:bg-green-700">
      {translations[currentLanguage].searchButton}
    </button>
    <LanguageSelector />  
  </div>

  <div className="flex items-center text-white relative">
    <div className="relative">
      <div
        className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {displayName.charAt(0).toUpperCase()}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded shadow-lg">
          <ul className="flex flex-col">
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
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