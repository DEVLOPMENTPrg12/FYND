import React, { useState } from "react";
import './Login.css';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export default function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    function signIn(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential);
        }  )  .catch ((error)=>{
            console.log(error)
        });
        };
 
    return(
        <div className="Login">
            <img src="login.avif"/>
            <form onSubmit={signIn}>
            <input  onChange={(ev)=>setEmail(ev.target.value)} value={email} type="email" placeholder="Email"/>
            <input onChange={(ev)=>setPassword(ev.target.value)} value={password} type="password" placeholder="Password"/>
            <button type="submit">Log in</button></form>

        </div>
    )
}