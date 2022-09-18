import React from 'react'
import { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import "./Signup.page.css"
import axios, { AxiosError } from 'axios'


export default function Signup(){
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [image,setImage] = useState("")
  const [url,setUrl] = useState(undefined)
 // console.log(email)
 //console.log(name)
 const navigate=useNavigate();


const  handleSubmit=async(e)=>{
  e.preventDefault();//this prevent the default code


  if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
    console.log("invalid email due to regex ")//   
    // M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
    return
}

 try {
  const res=await axios.post("/signup",{
    name,
    email,
    password
  });

  if(res.data){
    //if success then replace it with signin and 
    //pop up message that signin invalid
    console.log(res.data.message);//data is retrunded noramlly by browser .if there is some
    // field inside data then you have to do res.data.fieldname
    console.log(res)
    console.log("hello")
   navigate("/signin")
  }
  else {//this else bolck is useless as when error occurs it goes to catch block
    console.log(res.error)
    //pop up message that signup invalid
    //res.error=>this is the user message put it in animation
  }
 } catch (error) {
  console.log("inside catch")
  console.log(error)
  console.log(error.response.data)//this is the message which coems when error occurs// put this in animation
  //put 
  //pop up message that signup invalid
    //error.response.data=>this is the user message put it in animation
 }
  
 }

return(
    <>
     <div className='register' onSubmit={handleSubmit}>
        <span className='title'> Viraly</span>
        <h3 className='instruction'>Sign up to see photos and videos from your friends.</h3>
        <form action="" className='form'>

        <label className='label'>Username</label>
      <input className="registerInput"
      required 
      type="text" 
      placeholder="Enter your username..."
      onChange={e=>setName(e.target.value)}
      />
      <label className='label'>Email</label>
      <input className="registerInput required" 
      required
       type="text"
       placeholder="Enter your email..."
       onChange={e=>setEmail(e.target.value)}
      />
      <label className='label'>Password</label>
      <input className="registerInput required" 
      required
      type="password" 
      placeholder="Enter your password..."
      onChange={e=>setPassword(e.target.value)}
      />

      <button className="registerButton" type='submit' >Register</button>
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
