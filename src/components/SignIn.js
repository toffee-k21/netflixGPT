import { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/validation";

function SignIn() {
  const email = useRef(null);
  const password = useRef(null);

  const [isSignIn, setIsSignIn] = useState(true);
  const [valid,setValid] = useState(null)

  const sign = () => {
    setIsSignIn(!isSignIn); //good way to add toggle
  };

  const clickHandle = () => {
    // console.log(email.current.value, password.current.value);
  const validate = validation(email.current.value, password.current.value)
  setValid(validate)
  console.log(validate)
  };

  return (
    <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg)] h-screen">
      <Header />
      <div className=" flex justify-center align-middle m-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col w-1/4 bg-black/[.7] p-4 h-2/3"
        >
          <div className="text-white text-2xl p-2 font-semibold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </div>
          {!isSignIn ? (
            <input
              className="p-2 m-2 bg-black border-[.2px] text-gray-200"
              type="text"
              placeholder="Enter your Name"
            />
          ) : (
            <div></div>
          )}
          <input
            ref={email}
            className="p-2 m-2 bg-black border-[.2px] text-gray-300"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            ref={password}
            className="p-2 m-2 bg-black border-[.2px] text-gray-300"
            type="password"
            placeholder="Enter your password"
          />
           <div className="text-red-700 m-2">{valid}</div>
          <button className="bg-red-700 m-2 p-2" onClick={clickHandle}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div
            className="text-white p-2 text-s cursor-pointer"
            onClick={sign}
          >
            {isSignIn
              ? "Don't have an account ? click to sign Up"
              : "Already have an account ? click to sign In"}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
