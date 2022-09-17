import Navbar from "./Components/Navbar/Navabar.component";
import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home.page";
import Profile from "./Pages/Profile.page";
import Signin from "./Pages/Register/Signin.page";
import Signup from "./Pages/Register/Signup.page";
import CreatePost from "./Pages/Create.page";


const user=1;
function App() {
  return (
   <>
   
  

  {user && <Navbar/>} 

 
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

<h1 className="text-3xl text-amber-500   underline underline-offset-1">
      Hello world
    </h1>

   </>
  
  


   
  
  );
}

export default App;
