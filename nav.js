import {BiMenuAltRight} from 'react-icons/bi'
import Authantication from '../authantication/Authantication'
import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';
export default function Nav(){
  const[menuopened,setMenuopened]=useState(false)
  const getMenuStyles=(menuopened)=>{
     if(document.documentElement.clientWidth<=800){
       return{right:!menuopened && "-100%"}
       
       
     
     }
  }
 
return(
  <div>
    <nav className=''>
      <div className='logo'>
        <img src='logo4.avif' alt='logo' width={60}/>
        
        
      </div>
      <OutsideClickHandler onOutsideClick={()=>{
        setMenuopened(false)
      }} >

      <ul className='h-menu' style={getMenuStyles(menuopened)}>
        
      <li ><a href='/residiences'>Reseidience</a>
        
         </li>
        <li ><Link to="/value"><a href='/'>Our Value</a></Link></li>
        <li ><Link to='/'><a href='/'>Contact Us</a></Link></li>
        <li ><a href='/'>Gat Started</a></li>
        <li><button  ><Link to='/authantication'><a href=''>Login</a></Link></button></li>

      </ul>
      
      </OutsideClickHandler>
      <div className='menu-icon' onClick={()=>setMenuopened((prev)=>!prev)}>
      <BiMenuAltRight size={30}/></div>
    </nav>
  </div>
)
}