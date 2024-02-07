import Hero from "./Hero/Hero";
import Nav from "./component/nav";
import './index.css';
import './App.css';
import Companies from "./component/companies/companies";
import Residencies from "./component/Residiences/Residience";
import Value from "./value/Value";
import Contact from "./Contact/Contact";
import Getstarted from "./GetStarted/Getstarted";
import Footer from "./Footer/Footer";
import Authantication from "./authantication/Authantication";
import { useSelector } from "react-redux";
import { BrowserRouter,Route,Routes,Link, Router } from "react-router-dom";
import Log from "./log";
import Login from "./auth/login";
import Signup from "./auth/signup";
import Payment from "./payment/payment";
export default function App(){
  const user=useSelector((state)=>state.data.user.user);

  return(
    
    
  <div className="App">
     <BrowserRouter>
     
     <Routes>
      <Route path="/value" element={<Value/>}/>
      <Route path="/residiences"element={<Residencies/>}/>
      <Route path="/authantication"element={<Authantication/>}/>
      <Route path="/log"element={<Log/>}/>
    

     </Routes>
     <Nav/>
    <Hero/>
  
    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    <Getstarted/>
   <Payment/>
   
 
     </BrowserRouter>
   
    
   

    
 </div>
      
    
    
    
    
    





  );
}