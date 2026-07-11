import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../../public/icons8-netflix.svg";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearchButton = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    // Toggle GPT Search Button
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 z-10 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <img src={logo} alt="logo" className=" w-30 md:w-44 mx-auto md:mx-0" />
      {user && (
        <div className="flex items-center justify-between">
          {showGptSearchButton && (
            <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}>
            {showGptSearchButton ? "Homepage" : "GPT Search"}
          </button>
          <div className="flex justify-between">
          <img src={USER_AVATAR} alt="userIcon" className="w-12 h-12" />
          <button onClick={handleSignOut} className="px-2 text-white font-bold">
            (Sign Out)
          </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
