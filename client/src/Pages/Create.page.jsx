import React from 'react'
import { useState,useEffect } from 'react';
import {BsImage} from 'react-icons/bs'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { axiosInstance } from "../Config/axiosinstance.config";


const Modal=()=> {
  const navigate = useNavigate();
  //const history = useHistory()
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  //const [image,setImage] = useState("")
  const [url,setUrl] = useState("")
  const [file,setFile]=useState(null);//this is for diaplaying postpicture or to dipaly icon
  //when no pic selected shows icon when selected shows picture
  const postDetails = async ()=>{
    console.log(file)//this is o see what is being sent
    const data = new FormData()
    data.append("file",file)//this is the image file we are trying to send
    data.append("upload_preset","socialmedia")//this is the preset we are uploading to 
    //you can see above we have given name upload preset
    data.append("cloud_name","dqwkrd0xd")//this is our cloud name 

//######post to server/mongodb 
//this use effect only gets executed wehn the we get url from another fetch request 
//once we get url only then this code is executed
//also as useeffect also executes on  mount so we have done an if condition=> if url is not null only hten the code is execites

    useEffect(()=>{
      if(url){
 //######post to server/mongodb 

 try {
  const res= axios.post("createpost",{
      title,
      body,
      "pic":url
    },
    {
      headers: {
        "Content-Type":"application/json",
        "Authorization": 'bearer'+" "+localStorage.getItem("jwt") //as you are seperating token from beraerby 
      }});

    if(res){//
      /*see how to implement this toast message on navigation
      toast.success(res.data.message,{
        theme: "colored",
        hideProgressBar: true,
        autoClose: 3000,
      onClose:()=>{},
       });
       */
      console.log("post  created scuucesfull")
      navigate("/")
      
    }
    else{
      console.log(res.error)
    }
    
  } catch (error) {
    //console.log(error)
    console.log(error.response.data)
  }

      }
    },{url})
   
   //#####post to cloudinary
    fetch("https://api.cloudinary.com/v1_1/dqwkrd0xd/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())//this is the response we have got we convert it to json bu res.json()
    .then(data=>{
      console.log(data)
       setUrl(data.url)
    })
    .catch(err=>{
        console.log(err)
    })
}

  return (
    <>
      <div className='modal w-full h-full m-auto rounded-lg  bg-proj-50 '>
      <h1 className='heading  font-bold text-2xl text-center p-4 border-b-2 border-gray-200'>Create New post</h1>
      <form className="Form my-2 mt-4 flex flex-col items-center  gap-4 ">
     
       { !file && 
        (<div className='icon w-52 h-52 grid  place-content-center'>
        <div className='w-full h-full  text-8xl'><BsImage/></div> 
        </div>)
        }
       
        { file &&( <img
        className=' h-64 w-64  rounded-xl border-4 border-gray-500 object-fit cursor-pointer '
        src={URL.createObjectURL(file)} 
          alt=""
        />)
        }

       
      
       <input
          id="postheading "
          type="text"    
          placeholder='Title'           
          className="postheading w-8/12 mx-auto border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 "                
          onChange={(e)=>setTitle(e.target.value)}
        
       />  
      
       
       
       <input
          id="postcaption"
          type="text"      
          placeholder='Write a caption'
          className="postcaption w-8/12 mx-auto  border-b-2 border-gray-500 focus:outline-none focus:border-blue-500"                
          onChange={(e)=>setBody(e.target.value)}
       />  
       
       
   <div className='grid place-content-center m-auto w-8/12 '>
   <input type="file" 
   className="block mt-4 text-sm w-full text-slate-500
      file:mr-4 file:py-2 file:px-4   
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-400 file:text-white
      hover:file:bg-blue-500"
      onChange={
        
        (e) => {if(e.target.files.length !== 0){  setFile(e.target.files[0])}
        
        //console.log(e.target.files[0]);
        //console.log(file)
      
      }}
        //when user selects a file and number of fiels selcted are not 0 then setfile =file selected
      
      
      />
   </div>


   <button  type='button'
   onClick={postDetails}
    className="border-2 my-2 w-20 rounded-full text-white cursor-pointer p-2 bg-blue-400  hover:drop-shadow-xl hover:bg-blue-500 ">
                POST
    </button> 
      </form>
      </div>




    </>
  )
}


export default function CreatePost() {
  return (
    <>

<main className=" w-full ">
        <div className="smscreen md:hidden mt-8 w-auto h-screen">{/**this statement measn if widht goes greater than md(768) than hide me */}
          {/* Mobile screen width less than 768px <NavSm /> // if with is less than 768 then hide middel elment and render small element*/}
          {/* <Nav /> */}
          <Modal/>
          
        </div>
        {/** */}
        
        <div className="hidden w-full m-auto md:hidden">{/**if width grater than md(768) then display=flex  
         * else display is hidden and for large(1024 display hidden)
         * do only between 768-1024 displlay = flex else display=hidden display is a css property
         *  */}
          {/* Medium/Tab screen {768 to 1024} if with is less than 1024 meduim render */}
        {/**<NavMd /> */} 
        {/* <Nav /> */}
        
        
        </div>
        
        <div className="lgscreen hidden w-9/12 mx-auto mt-20 md:block">
          {/*  laptoo and desktop screen greater than 1024 */}
          {/* <Nav /> */}
          <Modal/>
        </div>
      </main>
  
     
  </>
  )
}