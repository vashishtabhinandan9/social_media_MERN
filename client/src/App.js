import Navbar from "./Components/Navbar/Navabar.component";
import { Routes,Route,useNavigate } from "react-router-dom";
import Home from "./Pages/Home.page";
import Profile from "./Pages/Profile.page";
import Signin from "./Pages/Register/Signin.page";
import Signup from "./Pages/Register/Signup.page";
import CreatePost from "./Pages/Create.page";
import { UserContext } from "./Context/context";
import { initialState } from "./Context/Reducer";
import { reducer } from "./Context/Reducer";
import { useEffect, useReducer,useContext } from "react";

const user=1;

const Routing=()=>{
const Navigate=useNavigate();
const {state,dispatch} = useContext(UserContext)
useEffect(()=>{
  const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      Navigate("/")
    }else{
      if(!Navigate.location.pathname.startsWith('/reset'))
           Navigate('/signin')
    }
},[])

return (
  <>
  <Routes>
   <Route exact path="/" element={<Home/>}/>
   <Route path="/signin" element={ <Signin />}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route exact path="/profile" element={<Profile/>}/>
   <Route path="/create" element={<CreatePost/>}/>

   {
    /**
     *  <Route path="/profile/:userid">
        <UserProfile />
    </Route>
    <Route path="/myfollowingpost">
        <SubscribedUserPosts />
    </Route>
    <Route exact path="/reset">
        <Reset/>
    </Route>
    <Route path="/reset/:token">
        <NewPassword />
    </Route>
     */
    
   }
  
</Routes>
  </>
)
}

function App() {
  const [state,dispatch]= useReducer(reducer,initialState)
  return (
   <>
   <UserContext.Provider value={{state,dispatch}}>
  {user && <Navbar/>} 
  <Routing/>
  </UserContext.Provider>

<h1 className="text-3xl text-amber-500   underline underline-offset-1">
      Hello world
    </h1>

   </>
  
  


   
  
  );
}

export default App;
