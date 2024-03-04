<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { LOGO } from '../utils/constants'

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

const remUser = () =>{
dispatch(removeUser())
signOut(auth).then(()=>console.log('signOut hogya')).catch(()=>console.log('nhi logged out hua'))
}


  return (
    <div className='bg-gradient-to-b from-black flex text-white absolute top-0 justify-between px-10 w-full'>
        <img  className="w-40" src={LOGO} />
        <div>
         {  disName != 'user' && `user: ${disName}`}
        {  disName != 'user' && <button className='bg-red-700 p-1 rounded-md bg-opacity-50 m-2' onClick={remUser}>Sign Out</button>}
        </div>
<<<<<<< HEAD
=======
=======
import React from 'react'

function Header() {
  return (
    <div className='bg-gradient-to-b from-black'>
        <img  className="w-40" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' />
>>>>>>> 5b9f855f108ddba5a026ad1839725dc9ca68909f
>>>>>>> 5cf4619b133f3dbf84b2682c0e8c410972d01175
    </div>
  )
}

export default Header