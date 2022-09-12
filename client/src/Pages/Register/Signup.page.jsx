import React from 'react'
import { Link } from 'react-router-dom'
import "./Signup.page.css"



export default function Signup(){
return(
    <>
   
     <div className='register'>
        <span className='title'> Viraly</span>
        <h3 className='instruction'>Sign up to see photos and videos from your friends.</h3>
        <form action="" className='form'>

        <label className='label'>Username</label>
      <input className="registerInput" type="text" placeholder="Enter your username..."
      //onChange={e=>setUsername(e.target.value)}
      />
      <label className='label'>Email</label>
      <input className="registerInput" type="text" placeholder="Enter your email..."
      // onChange={e=>setEmail(e.target.value)}
      />
      <label className='label'>Password</label>
      <input className="registerInput" type="password" placeholder="Enter your password..."
      //onChange={e=>setPassword(e.target.value)}
      />

      <button className="registerButton" type='submit'>Register</button>
      
        </form>

        <div className='tologin'>
         <span>Have an account?</span>
           <Link to="/signin"><span className='ml-2' style={{color:"rgb(23, 159, 247)"}}>Log in</span></Link> 
         
        </div>
      </div>
    
    </>
  )  
}




    


{/** <div className="register" >
    <span className="registerTitle">Register</span>
    <form className="registerForm">
      <label>Username</label>
      <input className="registerInput" type="text" placeholder="Enter your username..."
      //onChange={e=>setUsername(e.target.value)}
      />
      <label>Email</label>
      <input className="registerInput" type="text" placeholder="Enter your email..."
      // onChange={e=>setEmail(e.target.value)}
      />
      <label>Password</label>
      <input className="registerInput" type="password" placeholder="Enter your password..."
      //onChange={e=>setPassword(e.target.value)}
      />
      <button className="registerButton" type='submit'>Register</button>
    </form>

  
    <button className="registerLoginButton">
    <Link className='link' to="/login">
      Login
      </Link>
      </button>
   
      {/*error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}  
  </div> */}
