import { onAuthStateChanged, signOut } from "firebase/auth";
import logo from "../../public/icons8-netflix.svg";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
  return (
    <div className="absolute w-screen px-8 z-10 bg-gradient-to-b from-black flex justify-between">
      <img src={logo} alt="logo" />
      {user && (
        <div className="flex items-center justify-between">
          <img src={user?.photoURL} alt="userIcon" className="w-12 h-12" />
          <button onClick={handleSignOut} className="px-2 text-white font-bold">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
