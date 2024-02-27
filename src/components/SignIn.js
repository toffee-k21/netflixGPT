import { useState } from "react";
import Header from "./Header";

function SignIn() {

    const [isSignIn,setIsSignIn] = useState(true)


    const clickHandler = () =>{
        setIsSignIn(!isSignIn)//good way to add toggle 
    }
  return (
    <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg)] h-screen">
      <Header />
      <div className=" flex justify-center align-middle m-10">
        <form className="flex flex-col w-1/4 bg-black/[.7] p-4 h-2/3">
          <div className="text-white text-2xl p-2 font-semibold">{isSignIn ? "Sign In" :"Sign Up" }</div>
          {isSignIn ? <input
            className="p-2 m-2 bg-black border-[.2px]"
            type="text"
            placeholder="Enter your Name"
          /> : <div></div>}
          <input
            className="p-2 m-2 bg-black border-[.2px]"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            className="p-2 m-2 bg-black border-[.2px]"
            type="password"
            placeholder="Enter your password"
          />
          <button className="bg-red-700 m-2 p-2" >{isSignIn ? "Sign In" :"Sign Up" }</button>
          <div className="text-white p-2 text-s cursor-pointer" onClick={clickHandler}>{isSignIn ? "Don't have an account ? click to sign Up" :"Already have an account ? click to sign In" }</div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
