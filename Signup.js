import React, { useState } from "react";
import './Signup.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from '../firebase'
export default function Signup(){
    const [email,setEmail]=useState('')
    
    const [password,setPassword]=useState('')
    function signUp(e){
        e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential);
        }  )  .catch ((error)=>{
            console.log(error)
        });
        };
 

    return(
        <div className="Signup">
<img src="login.avif"/>
         <form onSubmit={signUp}>
            <input onChange={(ev)=>setEmail(ev.target.value)} value={email} type="email" placeholder="Email"/>
            
            <input type="password" onChange={(ev)=>setPassword(ev.target.value)} value={password} placeholder="Password"/>
            <button type="submit">Sign Up</button></form>

        </div>
    )
}