
import React from 'react'
import { Link } from 'react-router-dom'
import "./Signin.page.css"



export default function Signin(){
return(
    <>
   
     <div className='register'>
        <span className='title'> Viraly</span>
        <h3 className='instruction'>Sign up to see photos and videos from your friends.</h3>
        <form action="" className='form'>

      
      <label className='label'>Email</label>
      <input className="registerInput" type="text" placeholder="Enter your email..."
      // onChange={e=>setEmail(e.target.value)}
      />
      <label className='label'>Password</label>
      <input className="registerInput" type="password" placeholder="Enter your password..."
      //onChange={e=>setPassword(e.target.value)}
      />

      <button className="registerButton" type='submit'>Log In</button>
        </form>

        <div className='tosignup'>
         <span>Don't have an account?</span>
           <Link to="/signup"><span className='ml-2' style={{color:"rgb(23, 159, 247)"}}> Sign up</span></Link> 
        </div>

        <span className='tosignup ml-2' style={{color:"rgb(23, 159, 247)"}}>
        <Link to="/"><span>Forgot password? </span> </Link> 
        </span>
      </div>
    
    </>
  )  
}




    
