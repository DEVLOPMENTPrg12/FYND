import { Link } from 'react-router-dom';
import InputControle from './inputControle';
import './signup.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
 export default function Signup(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [err,setErr]= useState('')
    const [submitButton,setSubmitButton]=useState(false)
    const handleSubmission=()=>{
        if(!name || !email || !password  ){
            setErr("Fill all fields");
            return;
        }
        setErr("");
        setSubmitButton(true)
       createUserWithEmailAndPassword(auth,email,password)
       .then(res=>{
        setSubmitButton(false)
        console.log(res)
       }).catch(err=>{setSubmitButton(false); setErr(err.message)})
    }
    return(
        <div className='container'>
            <div className='innerBox'>
                <h1 className='heading'>Login</h1>
                <label>Name</label><br/>
               <input type='text' onChange={(ev)=>setName(ev.target.value)} placeholder='Enter your name'/><br/>
               <label>Email</label><br/>
               <input type='text'  onChange={(ev)=>setEmail(ev.target.value)} placeholder='Enter emeil adress'/><br/>
               <label>Password</label><br/>
               <input type='password'  onChange={(ev)=>setPassword(ev.target.value)} placeholder='Enter Password'/>
               <div className='footer'>
                <b className='err'>{err}</b>
                <button onClick={handleSubmission} disabled={submitButton}>Signup</button>
                <p>Already have an account?{" "}
                <span>
                    <Link to="/login">Login</Link>
                </span>
                </p>
                

               </div>
            </div>

        </div>
    )
 }
 