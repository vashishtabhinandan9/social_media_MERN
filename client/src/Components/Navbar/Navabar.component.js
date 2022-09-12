import React from "react";
import { Link } from "react-router-dom";
import {
  BiSearch
} from "react-icons/bi";
import {TbHome,TbPlus,TbCompass} from "react-icons/tb"
import {IoPersonCircle} from "react-icons/io5"

//
const Nav = () => {
  return (
    <>
    <span className="w-full gap-4 flex-nowrap bg-white border-2 flex justify-around items-center border-green-500">
           
            <span  className="title font-meduim font-grandhotel text-8xl ">
            <Link to="/">{/**  /myfollowingpost */}
            Viraly
              </Link> 
            </span>
           

            <ul className="icons items-center flex  w-auto border-2 border-indigo-200 gap-2">
              <li className=" cursor-pointer">
               <Link to="/"> {/**  on click search functiion */}
                <BiSearch className="w-8 h-8" />
              </Link>
              </li>

              <li className="w-8 h-8 cursor-pointer">
             <Link to="/">{/**  /myfollowingpost */}
              <TbHome className="w-full h-full" />
              </Link>
              </li>

                
                <Link to="/create">
                 <li className="w-7 h-7  border-2 border-gray-800 rounded-lg grid place place-content-center cursor-pointer" >
                  <TbPlus className="w-full  h-full  " />
                  </li>
                </Link>
            
         
          <li className="w-8 h-8 cursor-pointer">
          <Link to="/">{/** all post by all users*/}
            <TbCompass className="w-full h-full" />
            </Link>
          </li>
         
          <li className="w-8 h-8 cursor-pointer ">
          <Link to="/profile">{/**  /myprofile */}
            <IoPersonCircle className="w-full h-full" />
          </Link>
          </li>
  
          <li className="border-2 rouded-lg text-white cursor-pointer p-2 bg-red-500 hover:drop-shadow-xl ">
                LOGOUT
          </li>
           
         </ul>
    </span>
    </>
  )
}

const Navbar = () => {
  return (
    <>
   
      <nav className=" w-full sticky top-0">
        <div className="md:hidden w-auto ">{/**this statement measn if widht goes greater than md(768) than hide me */}
          {/* Mobile screen width less than 768px <NavSm /> // if with is less than 768 then hide middel elment and render small element*/}
          <Nav />
        </div>
        {/** */}
        <div className="hidden w-11/12 m-auto md:flex lg:hidden">{/**if width grater than md(768) then display=flex  
         * else display is hidden and for large(1024 display hidden)
         * do only between 768-1024 displlay = flex else display=hidden display is a css property
         *  */}
          {/* Medium/Tab screen {768 to 1024} if with is less than 1024 meduim render */}
        {/**<NavMd /> */} 
        <Nav />
        
        
        </div>
        <div className="hidden w-11/12 m-auto  lg:flex">
          {/*  laptoo and desktop screen greater than 1024 */}
          <Nav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/**
 *  default hidden is used with meduim and large becsue in
 *  case  if we do small screen and we do not ahve hidden then large screen navbar also renders
 * 
 * 
 * Md:hidden for mobile screen /*Mobile Screen*
 * min width =768px
md hidden makes the meduim screen and screen larger than medium hidden
So it is equal to writing lg:hidden xl:hidden md:hidden

hidden lg:hidden md:flex  /*tablet dcreen

so we have set default to hidden 

 when we have large screen or screen larger than large it hidden 
but when medium screen navbar item becomes flex  

hidden lg:flex   /*desktop Screen* 
default = hidden 
 for large it is flex  

 */