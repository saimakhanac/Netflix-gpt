import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Login = () => {
  const [showpara, setShowpara] = useState(false);
  const [signin, setSignin] = useState(true);
  const toggleSignInForm = () => {
    setSignin(!signin);
  };
  return (
    <div className="relative h-screen w-full">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg"
          alt="bg"
        />
      </div>
      {/* Overlay for dark effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <div>
        <form className="w-3/12 absolute top-30 z-20 bg-black/80 mx-auto left-0 right-0 px-15 py-10 text-white">
          <h1 className="font-bold text-3xl py-4">{signin ? "Sign In" : "Sign Up"}</h1>
          {!signin && (
            <input
              type="text"
              placeholder="Full Name"
              className="px-3 py-4 w-full my-2 border-1 border-solid text-white border-gray-400 rounded-sm"
            />
          )}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="px-3 py-4 w-full my-2 border-1 border-solid text-white border-gray-400 rounded-sm"
          />

          <input
            type="Password"
            placeholder="Password"
            className="px-3 py-4 w-full my-2 border-1 border-solid border-gray-400 rounded-sm"
          />
          <button className="py-2 my-4 bg-red-600 w-full font-bold    ">
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
