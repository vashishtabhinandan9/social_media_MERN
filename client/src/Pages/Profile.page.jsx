import React from 'react'
import { images } from '../imagesgallery/images'

const Gallery=()=>{
return(
     <>
     {
images.map((i)=>{
  return(
  < > 
  <div className=' object-cover cursor-pointer  '>
  <img className="" src={i.src} alt={i.alt}/>
  </div>
     
  </>
  )
})}
    </>
  )
 
}

const ProfileSm=()=> {
  return (
    <>
    <div className='headingsm flex mt-4 ml-8 w-inherit gap-8 '>
        <div className='1st flex flex-col items-center gap-3'>
          <div className='img  h-28 w-28'>
            <img className='h-full w-full rounded-full' src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
              alt='profile picture'/>
          </div>
          <div className='username'>
          <h2 className=" font-bold" style={{fontFamily:'Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Alex Graham</h2>
          </div>
        </div>

        <div className='2nd w-auto'>
          <div className='username ' style={{fontFamily:'Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
            <h1 className='text-4xl mt-4 tracking-wide font-thin'>Alex Graham</h1>
          </div>
        </div>
    </div>     


      <div className='statistics mt-8 border-y-2 border-gray-200 '>
        <ul className='flex '>
          <li className='cursor-pointer  flex-auto text-center'> 40<br></br>Posts </li>
          <li className='cursor-pointer  flex-auto text-center'> 40<br></br>Followers </li>
          <li className='cursor-pointer  flex-auto text-center '> 40<br></br>Following </li>
        </ul>
      </div>

     

      <div className='gallery grid grid-cols-3 gap-1 mt-4 mx-2'>
      <Gallery className=""/>
      </div>
    
    </>
  )
}

const ProfileLg=()=> {
  return (
    <>
    <div className='headinglg flex  mt-4 ml-8 w-full  gap-8 '>
        
          <div className='1st h-40 w-40 '>
            <img className='h-full w-full rounded-full' src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
              alt='profile picture'/>
          </div>
       

        <div className='2nd w-8/12 '>
          <div className='bigusername  ' style={{fontFamily:'Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
            <h1 className='text-4xl mt-4 tracking-wide font-thin'>Alex Graham</h1>
          </div>

      <div className='statistics mt-8  '>
           <ul className='flex  w-10/12 gap-8'>
          <li className='cursor-pointer  text-center'> 40 Posts </li>
          <li className='cursor-pointer  text-center'> 40 Followers </li>
          <li className='cursor-pointer  text-center '> 40 Following </li>
           </ul>
      </div>

          <div className='smallusername mt-4'>
            <h2 className=" font-bold" style={{fontFamily:'Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Alex Graham</h2>
          </div>
        </div>
    </div>
         

    <div className='w-full border-t-2 border-gray-200 gallery grid grid-cols-3 gap-3 mt-4 pt-4 mx-30'>
      <Gallery className=""/>
      </div>
   

    
    </>
  )
}
const Profile = () => {
  return (
    <>
   
      <main className=" w-full ">
        <div className="smscreen md:hidden w-auto ">{/**this statement measn if widht goes greater than md(768) than hide me */}
          {/* Mobile screen width less than 768px <NavSm /> // if with is less than 768 then hide middel elment and render small element*/}
          {/* <Nav /> */}
          <ProfileSm/>
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
        
        <div className="lgscreen hidden w-9/12 m-auto md:block">
          {/*  laptoo and desktop screen greater than 1024 */}
          {/* <Nav /> */}
          <ProfileLg/>
        </div>
      </main>
    </>
  );
};

export default Profile;
