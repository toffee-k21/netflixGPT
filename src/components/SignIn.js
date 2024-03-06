import { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BG_IMG_URL } from "../utils/constants";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [isSignIn, setIsSignIn] = useState(true);
  const [valid, setValid] = useState(null);
  const [authErr,setAuthErr] = useState(null)

  const sign = () => {
    setIsSignIn(!isSignIn); //good way to add toggle
  };

  const clickHandle = () => {
    const validate = validation(email.current.value, password.current.value);
    setValid(validate);
    console.log(validate);
    if (validate != null) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((user) => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => console.log("name added"))
            .catch(() => console.log("not be able to add"));
          // dispatch(addUser({email: u.user.email , uid: u.user.uid}))
          // navigate("/browse");
        })
        .catch((e) => setAuthErr(e.message));
    }
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((u) => {
          // dispatch(addUser({email: u.user.email , uid: u.user.uid}))
          // navigate("/browse");
        })
        .catch((e) => setAuthErr(e.message));
    }
  };



  return (
    <div className={`h-screen`} style={{background: `url(${BG_IMG_URL})`}}>
      {/* webpack doesnt support templete litrels ???? in tailwind url wla part */}
      <Header />
      <div className="h-screen w-screen flex justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" bg-black/[.7] p-4 w-1/4"
        >
          <div className="text-white text-2xl p-2 font-semibold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </div>
          {!isSignIn ? (
            <input
              ref={name}
              className="p-2 m-2 bg-black border-[.2px] text-gray-200 w-11/12"
              type="text"
              placeholder="Enter your Name"
            />
          ) : (
            <div></div>
          )}
          <input
            ref={email}
            className="p-2 m-2 bg-black border-[.2px] text-gray-300 w-11/12"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            ref={password}
            className="p-2 m-2 bg-black border-[.2px] text-gray-300 w-11/12"
            type="password"
            placeholder="Enter your password"
          />
          <div className="text-red-700 m-2">{valid}</div>
          <div className="text-red-700 m-2">{authErr}</div>
          <button className="bg-red-700 m-2 p-2" onClick={clickHandle}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="text-white p-2 text-s cursor-pointer" onClick={sign}>
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
