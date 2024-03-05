import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { LOGO } from '../utils/constants'
import { changeGPTSearchShow } from '../utils/GPTSlice'

function Header() {
  
  // const user = useSelector((store)=> store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [disName,setDisName] = useState('user')
  
//  !null && console.log(user)
useEffect(()=>{
onAuthStateChanged(auth,(user)=>{
  if(user){
    // console.log(user)
    dispatch(addUser({email:user.email, uid:user.uid, displayName: user.displayName}))
    navigate('/browse')
     setDisName(user.displayName)

  }
  else{
    console.log(`no user`)
    navigate('/')
    dispatch(removeUser())
  }
})
},[])

const ToggleGPTSearch = () =>{
dispatch(changeGPTSearchShow())
}
const remUser = () =>{
dispatch(removeUser())
signOut(auth).then(()=>console.log('signOut hogya')).catch(()=>console.log('nhi logged out hua'))
}


  return (
    <div className='bg-gradient-to-b from-black flex text-white absolute top-0 justify-between px-10 w-full'>
        <img  className="w-40" src={LOGO} />
      <button
      className=''
      onClick={ToggleGPTSearch}>
Search
      </button>
        <div>
         {  disName != 'user' && `user: ${disName}`}
        {  disName != 'user' && <button className='bg-red-700 p-1 rounded-md bg-opacity-50 m-2' onClick={remUser}>Sign Out</button>}
        </div>
    </div>
  )
}

export default Header