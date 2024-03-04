export const validation = (email,password ) =>{
const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)//this will return true or false

const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

if(!isEmailValid) return "Email is not valid"
if(!isPasswordValid) return " Password is not valid"

return null
}