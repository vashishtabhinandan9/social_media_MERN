import React from 'react'
import { useState } from 'react';
import {BsImage} from 'react-icons/bs'

const Modal=()=> {
  
  const [file,setFile]=useState(null);
  
  return (
    <>
      <div className='modal w-full h-full m-auto rounded-lg  bg-proj-50 '>
      <h1 className='heading  font-bold text-2xl text-center p-4 border-b-2 border-gray-200'>Create New post</h1>
      <form className="Form my-2 mt-4 flex flex-col items-center  gap-4 " >
     
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
       />  
      
       
       
       <input
          id="postcaption"
          type="text"      
          placeholder='Write a caption'
          className="postcaption w-8/12 mx-auto  border-b-2 border-gray-500 focus:outline-none focus:border-blue-500"                
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
        
        (e) => {if(e.target.files.length !== 0){setFile(e.target.files[0])}}}
      
      
      />
   </div>
    
  

        
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