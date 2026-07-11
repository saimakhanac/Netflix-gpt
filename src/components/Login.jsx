import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useRef } from "react";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [showpara, setShowpara] = useState(false);
  const [error, setError] = useState(null);
  const [signin, setSignin] = useState(true);
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButton = () => {
    // checkValidation(email, password);

    const message = checkValidation(
      email.current.value,
      password.current.value
      // name.current.value
    );

    setError(message);
    if (message) return;
    // Sign In Sign Up Logic
    if (!signin) {
      // SignUp Login
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // My code for resolving for "on click of sign up it is coming as null and then when I refresh its coming fine"
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
              );
            })
            .catch((error) => {
              setError(error.message);
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      // Signin Login
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setSignin(!signin);
  };
  return (
    <div className="relative h-screen w-full">
      <Header />
      <div className="-z-10">
        <img src={BG_URL} alt="bg" className="h-screen object-cover md:h-auto md:object-none" />
      </div>
      {/* Overlay for dark effect */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div> */}
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="md:w-4/12 absolute top-30 z-20 bg-black/80 mx-auto left-0 right-0 px-15 py-10 text-white">
          <h1 className="font-bold text-3xl py-4">{signin ? "Sign In" : "Sign Up"}</h1>
          {!signin && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="px-3 py-4 w-full my-2 border-1 border-solid text-white border-gray-400 rounded-sm"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="px-3 py-4 w-full my-2 border-1 border-solid text-white border-gray-400 rounded-sm"
          />

          <input
            ref={password}
            type="Password"
            placeholder="Password"
            className="px-3 py-4 w-full my-2 border-1 border-solid border-gray-400 rounded-sm"
          />
          <p className="text-red-600 font-bold text-lg py-2">{error}</p>
          <button
            onClick={handleButton}
            className="py-2 my-4 bg-red-600 w-full font-bold"
            type="button">
            {signin ? "Sign In" : "Sign Up"}
          </button>
          <h1 className="flex justify-center">OR</h1>
          <button className="bg-white/20 p-2 w-full my-2 font-bold">Use a sign-in-code</button>
          <button className="bg-none underline flex justify-center w-full my-1">
            Forgot password?
          </button>
          <div className="flex gap-3 my-4 items-center">
            <input type="checkbox" className="accent-white w-5 h-5" />
            <p>Remember me</p>
          </div>
          {/* <div className="flex">
            <p className="text-gray-300">New to Netflix?</p>
            <button className="font-bold" onClick={toggleSignInForm} type="button">
              {signin ? "Sign up now.": "Sign In now"}
            </button>
          </div> */}
          <p onClick={toggleSignInForm} className="cursor-pointer">
            {signin ? "New to Netflix? Sign up Now" : "Already Registered? Sign In Now"}
          </p>
          <p className="text-gray-400 my-2 text-sm">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </p>
          {!showpara && (
            <button
              type="button"
              className="underline text-blue-500"
              onClick={() => {
                setShowpara(true);
              }}>
              Learn more
            </button>
          )}

          {showpara && (
            <p className="text-gray-400 text-sm">
              The information collected by Google reCAPTCHA is subject to the Google Privacy Policy
              and Terms of Service, and is used for providing, maintaining, and improving the
              reCAPTCHA service and for general security purposes (it is not used for personalised
              advertising by Google).
            </p>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
