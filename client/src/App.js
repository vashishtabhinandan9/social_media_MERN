import Navbar from "./Components/Navbar/Navabar.component";
import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home.page";
import Profile from "./Pages/Profile.page";
import Signin from "./Pages/Signin.page";
import Signup from "./Pages/Signup.page";

function App() {
  return (
   <>
   
  

  <Navbar/>
  <h1 className="text-3xl text-amber-500   underline underline-offset-1">
      Hello world
    </h1>
<Routes>
   <Route exact path="/" element={<Home/>}/>
   <Route path="/signin" element={ <Signin />}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route exact path="/profile" element={<Profile/>}/>
   <Route path="/create" element={/*<CreatePost/>*/<h1>crealte</h1>}/>

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
  
  


   
  
  );
}

export default App;
