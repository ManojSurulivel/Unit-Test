import React, { useState } from 'react'
import './SignIn.css'


const SignIn = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[message, setMessage] = useState("");

    const signIn = () => {
        setMessage("Loading")

        if(email === "manoj123@gmail.com" && password == "manoj123") {
            setTimeout(() => {
                setMessage("LogIn SucessFully")
            },2000) ;
            setPassword("");
            setEmail("")
        }else{
            setTimeout(() => {
                setMessage("LogIn Invalid")
            },2000) ;        }
    }

  return (
    <div className='container'>
        <h1>SignIn Form</h1>
      <input className='input' type="email" value= {email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <input type="password" value= {password}  onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/>
      <button className='submit' type='submit' onClick={signIn}>submit</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default SignIn


