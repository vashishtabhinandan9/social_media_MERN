import React from "react";
import { Link } from "react-router-dom";
import {
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronDown,
} from "react-icons/bi";
import {TbHome,TbPlus,TbCompass} from "react-icons/tb"
import {IoPersonCircle} from "react-icons/io5"

const NavSm = () => {
  return (
    <>
      <div className="text-black flex py-4   items-center justify-between">
       <Link to="/">{/**  /myfollowingpost */}
        <div className="w-44">
          <h2 className="ml-4  text-xl font-bold">Instagram</h2>
        </div>
        </Link> 
        

        <div className="icons flex items-center flex-1 w-44 float-left  gap-4">

          <Link to="/"> {/**  on click search functiion */}
          <div className="w-8 h-8 cursor-pointer">
            <BiSearch className="w-full h-full" />
            </div>
          </Link>

          <Link to="/">{/**  /myfollowingpost */}
          <div className="w-8 h-8 cursor-pointer">
          <TbHome className="w-full h-full" />
          </div>
          </Link>
       
        <Link to="/create">
        <div className="w-8 h-6  border-2 border-gray-800 rounded-lg grid place place-content-center cursor-pointer" >
          <TbPlus className="w-full  h-full  " />
        </div>
        </Link>
        
        <Link to="/">{/** all post by all users*/}
        <div className="w-8 h-8 cursor-pointer">
          <TbCompass className="w-full h-full" />
        </div>
        </Link>
        
        <Link to="/profile">{/**  /myprofile */}
        <div className="w-8 h-8 cursor-pointer">
          <IoPersonCircle className="w-full h-full" />
        </div>
        </Link>
       
        
        </div>
        
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, Plays, Sports and Activities."
      />
    </div>
  );
};
const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-20 h-20">
          <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" 
               alt="logo" 
               className="w-full h-full " 
          />
          </div>
           
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, Plays, Sports and Activities."
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">
            NCR <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};


const Navbar = () => {
  return (
    <>
      <nav className="bg-white w-full   sticky top-0">
        <div className="md:hidden">{/**this statement measn if widht goes greater than md(768) than hide me */}
          {/* Mobile screen less than 768px <NavSm /> // if with is less than 768 then hide middel elment and render small element*/}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">{/**if width grater than md(768) then display=flex  
         * else display is hidden and for large(1024 display hidden)
         * do only between 768-1024 displlay = flex else display=hidden display is a css property
         *  */}
          {/* Medium/Tab screen {768 to 1024} if with is less than 1024 meduim render */}
        {/**<NavMd /> */} 
        
        </div>
        <div className="hidden m-auto w-10/12 lg:flex">
          {/* Large screen for greater than 1024 */}
          <NavLg />
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