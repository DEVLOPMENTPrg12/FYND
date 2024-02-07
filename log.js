import './log.css'
import React, { useState } from "react";

export default function Log(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
        
 
    return(
        <div className='Login'>
        <div className='body'>
        <div className="center">
        <h1>Login</h1>
        <form method="post">
            <div class="text_field">
                <input type="text" required onChange={(ev)=>setEmail(ev.target.value)} value={email} />
                <span></span>
                <label>Email</label>
            </div>
            <div className="text_field">
                <input type="password" required onChange={(ev)=>setPassword(ev.target.value)} value={password} />
                <label>Password</label>
            </div>
            <div className="pass">Forgot Password</div>
            <input type="submit" value="Login"/>
           
        </form>

    </div>
    </div>
    </div>
    
    )
}