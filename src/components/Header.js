import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { changeGPTSearchShow, changeLang } from "../utils/GPTSlice";
import GPTSearchPage from "./GPTSearchPage";

function Header() {
  // const user = useSelector((store)=> store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gptpage = useSelector(store=>store.gpt.GPTSearchShow)

  const [disName, setDisName] = useState("user");

  //  !null && console.log(user)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user)
        dispatch(
          addUser({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
        navigate("/browse");
        setDisName(user.displayName);
      } else {
        console.log(`no user`);
        navigate("/");
        dispatch(removeUser());
      }
    });
  }, []);

  const ToggleGPTSearch = () => {
    dispatch(changeGPTSearchShow());
  };
  const remUser = () => {
    dispatch(removeUser());
    signOut(auth)
      .then(() => console.log("signOut hogya"))
      .catch(() => console.log("nhi logged out hua"));
  };

 const handleLang =(e)=>{
// console.log(e.target.value)
dispatch(changeLang(e.target.value))
 }

  return (
    <div className="bg-gradient-to-b from-black flex text-white absolute top-0 justify-between px-10 w-full">
      <img className="w-40" src={LOGO} />
      <div>
        {gptpage ? (<select className="bg-gray-700 m-4" onChange={handleLang}>
          <option value={"en"}>English</option>
          <option value={"hindi"}>Hindi</option>
          <option value={"spanish"}>Spanish</option>
        </select> ): (<div></div>)}
        {disName != "user" && `user: ${disName}`}
        <button
          className="bg-red-700 m-2 py-1 px-2 rounded-lg"
          onClick={ToggleGPTSearch}
        >
          {gptpage ? "Home" :"Search" }
        </button>
        {disName != "user" && (
          <button
            className="bg-gray-700 p-1 rounded-md bg-opacity-50 m-2"
            onClick={remUser}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
