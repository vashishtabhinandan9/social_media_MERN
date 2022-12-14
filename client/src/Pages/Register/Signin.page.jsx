
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./Signin.page.css"
import { useState,useContext } from 'react'
import { UserContext } from '../../Context/context'
import { ToastContainer, toast } from 'react-toastify';
import {Toastcontext} from '../../Config/toast.config'
import 'react-toastify/dist/ReactToastify.css';

export default function Signin(){
  const [state,dispatch]=useContext(UserContext)
  const navigate = useNavigate();
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const handleSubmit = async(e)=>{
    e.preventDefault();//this prevent the default code
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
         // M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
         toast.error("E-mail is not valid",{
          theme: "colored",
          autoClose: 3000,
         })
         console.log("invalid email due to regex ")//    
         return
      }

      fetch("/signin",{
          method:"post",
          headers:{
              "Content-Type":"application/json"
              
          },
          body:JSON.stringify({
              password,
              email
          })
      }).then(res=>res.json())
      .then(data=>{
          console.log(data)
          if(data.user){
            console.log()
             localStorage.setItem("jwt",data.token)
             localStorage.setItem("user",JSON.stringify(data.user))
             dispatch({type:"USER",payload:data.user})
            navigate('/')
            console.log("suucesfull signin") 

          }
          else{//this executes when data send by us does not match the data of the user in database
            console.log(data.error)
            console.log(data.message)
            toast.error(data.message,{
              theme: "colored",
              autoClose: 3000,
             })

            //M.toast({html: data.error,classes:"#c62828 red darken-3"})
          }
          {/**
        if(data.error){
          console.log(data.error)
          //M.toast({html: data.error,classes:"#c62828 red darken-3"})
         }
         else{
           //  localStorage.setItem("jwt",data.token)
           //  localStorage.setItem("user",JSON.stringify(data.user))
           //  dispatch({type:"USER",payload:data.user})
           //  M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
          // window.location.replace("/")
         
          
         }
        */}
         
      }).catch(err=>{//this gets executed when there is some error is in code or network 
        console.log("inside catch")
          console.log(err)
      })
  }



return(
    <>
   
     <div className='register'>
        <span className='title'> Viraly</span>
        <h3 className='instruction'>Sign up to see photos and videos from your friends.</h3>
        <form action="" className='form' onSubmit={handleSubmit}>

      
      <label className='label'>Email</label>
      <input className="registerInput" type="text" placeholder="Enter your email..."
       onChange={e=>setEmail(e.target.value)}
      />
      <label className='label'>Password</label>
      <input className="registerInput" type="password" placeholder="Enter your password..."
      onChange={e=>setPassword(e.target.value)}
      />

      <button className="registerButton" 
      type='submit'>Log In</button>
        </form>

        <div className='tosignup'>
         <span>Don't have an account?</span>
           <Link to="/signup"><span className='ml-2' style={{color:"rgb(23, 159, 247)"}}> Sign up</span></Link> 
        </div>

        <span className='tosignup ml-2' style={{color:"rgb(23, 159, 247)"}}>
        <Link to="/"><span>Forgot password? </span> </Link> 
        </span>
      </div>

      <ToastContainer hideProgressBar/>
    
    </>
  )  
}




    
