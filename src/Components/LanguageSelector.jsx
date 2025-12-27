import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../Utils/LangSlice';
import {translations} from '../Utils/langConstant';


const LanguageSelector = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.language);

  const handleChange = (event) => {
    dispatch(setLanguage(event.target.value));
  };
  console.log("Current Language:", currentLanguage);

  return (
    <div className="ml-4 flex items-center">
      <select
        className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 
                   focus:outline-none focus:ring-2 focus:ring-cyan-300 
                   hover:bg-gray-700 cursor-pointer"

                   id="language" value={currentLanguage} onChange={handleChange}
                    placeholder={translations[currentLanguage].searchPlaceholder}

      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
