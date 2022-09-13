import React from 'react'
import { images } from '../imagesgallery/images'
import { Link } from 'react-router-dom'
import {MdDelete} from "react-icons/md"
import {FaRegHeart} from "react-icons/fa"

const Homecard=()=>{
  return (
    <>
    {
  images.map((item)=>{
    return(
      <>
       <div className='home-card border-2 w-full  md:w-5/12 my-4 m-auto rounded-md border-gray-800 bg-proj-50'>
      <span className='header flex justify-between items-center my-2'>
        <h5 className='cursor-pointer ml-4 text-xl'>
        <Link to="/profile">
        Alex Graham
        </Link> 
        </h5>
        {/* {{item.postedBy._id == state._id} //only hsow if post id is same as loggd inuser id  && */}
        <div className='cursor-pointer mr-4 text-xl'><MdDelete/></div>
      </span>

      <div className="card-image flex-auto my-1">
          <img  className='object-fit w-full h-80 ' key={item.key} src={item.src} alt={item.alt}/>
      </div>

       <div className="card-content my-2 ml-4 flex flex-col gap-2">
            <div className='heart-icon text-xl '>
            <FaRegHeart/>
            </div>

            <h6 className='likes text-sm font-bold' >600 likes</h6>
            <h6 className='heading text-sm' >title</h6>
            <p className='body text-sm' >body</p>
            <p className='timestamp text-xs text-gray-500 uppercase' > 9 timestamp</p>
            


        </div>
         
        
        <form  className='comment border-t-2 border-gray-200 mt-4 mb-2 flex justify-between items-center gap-2'>

          <div className='flex-1 overflow-auto m-2'>
          <input className="comment w-full overflow-y-auto outline-none" type="text" placeholder="Add a comment..."
      //onChange={e=>setPassword(e.target.value)}
      />
          </div>
      
      <div className=''><button className=" font-bold text-blue-400 mr-4" type='submit'>Post</button></div>
      
        </form>

      </div>
 
      </>
    )})
    
    }

    
    </>
  )
}

export default function Home() {
  return (
    <>

<main className=" w-full ">
        <div className="smscreen md:hidden grid-rows-3 w-auto ">{/**this statement measn if widht goes greater than md(768) than hide me */}
          {/* Mobile screen width less than 768px <NavSm /> // if with is less than 768 then hide middel elment and render small element*/}
          {/* <Nav /> */}
          <Homecard/>
          
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
        
        <div className="lgscreen hidden w-10/12 m-auto md:block">
          {/*  laptoo and desktop screen greater than 1024 */}
          {/* <Nav /> */}
          <Homecard/>
        </div>
      </main>
  
     
  </>
  )
}

{/**
 <div className="col-md-6 col-lg-4 my-4">
    <div className="card">
      <div className="card-header gap-2 d-flex justify-content-end">
        <button className="btn btn-outline-info"  onclick="editCard.apply(this, arguments)" >
          <i className="fal fa-pencil" ></i>
        </button>
        <button className="btn btn-outline-danger"  onclick="deleteCard.apply(this, arguments)">
          <i className="far fa-trash-alt" ></i>
        </button>
      </div>
      <div className="card-body">
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"
          alt="image"
          className="card-img"
        />
        <h5 className="card-title mt-4">abhinandan</h5>
        <p className="card-text">
          abhinandan
        </p>
        <span className="badge bg-primary">abhinandan</span>
      </div>
      <div className="card-footer">
        <button className="btn btn-outline-primary" >Open Task</button>
      </div>
    </div>
    </div> */
}