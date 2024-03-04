import { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/validation";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [isSignIn, setIsSignIn] = useState(true);
  const [valid, setValid] = useState(null);
<<<<<<< HEAD
  const [authErr,setAuthErr] = useState(null)
=======
=======
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const email = useRef(null);
  const password = useRef(null);

  const [isSignIn, setIsSignIn] = useState(true);
  const [valid,setValid] = useState(null)
  // email.current.value, password.current.value) ye useRef k krn hi h
>>>>>>> 5b9f855f108ddba5a026ad1839725dc9ca68909f
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175

  const sign = () => {
    setIsSignIn(!isSignIn); //good way to add toggle
  };

  const clickHandle = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
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
<<<<<<< HEAD
            .then(() => console.log("name added"))
            .catch(() => console.log("not be able to add"));
          // dispatch(addUser({email: u.user.email , uid: u.user.uid}))
          // navigate("/browse");
        })
        .catch((e) => setAuthErr(e.message));
=======
          .then(()=>console.log('name added'))
          .catch(()=>console.log('not be able to add'))
          // dispatch(addUser({email: u.user.email , uid: u.user.uid}))
          // navigate("/browse");
        })
        .catch((e) => console.log(e));
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
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
<<<<<<< HEAD
        .catch((e) => setAuthErr(e.message));
    }
  };

  return (
    <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg)] h-screen ">
      <Header />
      <div className="h-screen w-screen flex justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" bg-black/[.7] p-4 w-1/4"
=======
        .catch((e) => console.log(e));
    }
=======
    // console.log(email.current.value, password.current.value);
  const validate = validation(email.current.value, password.current.value)
  setValid(validate)
  console.log(validate)
  // console.log(!validate)
  if(validate != null ) return;

  if(!isSignIn) { 
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((u)=> console.log(u))
  .catch((e)=>console.log(e))
  }
  if(isSignIn) {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((u)=>console.log(u))
    .catch((e)=>console.log(e))
  }
>>>>>>> 5b9f855f108ddba5a026ad1839725dc9ca68909f
  };

  return (
    <div className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg)] h-screen">
      <Header />
      <div className=" flex justify-center align-middle m-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col w-1/4 bg-black/[.7] p-4 h-2/3"
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
        >
          <div className="text-white text-2xl p-2 font-semibold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </div>
          {!isSignIn ? (
            <input
<<<<<<< HEAD
              ref={name}
              className="p-2 m-2 bg-black border-[.2px] text-gray-200 w-11/12"
=======
<<<<<<< HEAD
              ref={name}
=======
>>>>>>> 5b9f855f108ddba5a026ad1839725dc9ca68909f
              className="p-2 m-2 bg-black border-[.2px] text-gray-200"
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
              type="text"
              placeholder="Enter your Name"
            />
          ) : (
            <div></div>
          )}
          <input
            ref={email}
<<<<<<< HEAD
            className="p-2 m-2 bg-black border-[.2px] text-gray-300 w-11/12"
=======
            className="p-2 m-2 bg-black border-[.2px] text-gray-300"
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
            type="email"
            placeholder="Enter your Email"
          />
          <input
            ref={password}
<<<<<<< HEAD
            className="p-2 m-2 bg-black border-[.2px] text-gray-300 w-11/12"
            type="password"
            placeholder="Enter your password"
          />
          <div className="text-red-700 m-2">{valid}</div>
          <div className="text-red-700 m-2">{authErr}</div>
=======
            className="p-2 m-2 bg-black border-[.2px] text-gray-300"
            type="password"
            placeholder="Enter your password"
          />
<<<<<<< HEAD
          <div className="text-red-700 m-2">{valid}</div>
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
          <button className="bg-red-700 m-2 p-2" onClick={clickHandle}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="text-white p-2 text-s cursor-pointer" onClick={sign}>
<<<<<<< HEAD
=======
=======
           <div className="text-red-700 m-2">{valid}</div>
          <button className="bg-red-700 m-2 p-2" onClick={clickHandle}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div
            className="text-white p-2 text-s cursor-pointer"
            onClick={sign}
          >
>>>>>>> 5b9f855f108ddba5a026ad1839725dc9ca68909f
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
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
