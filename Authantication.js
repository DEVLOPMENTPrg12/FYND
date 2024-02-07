import React,{useState} from "react";
import './Authantication.css';
import Login from "./Login";
import Signup from "./Signup";
import Log from "../log";
import Sig from "../sig";
export default function Authantication(){
    const [active,setActive]=useState("Login")
    const handleChange=()=>{
        setActive(active==='Login'?'Signup':'Login')
    }
    return(
        <div className="authantication">
            <div className="auth__Left">
                <img className="img1" src="header.avif"/>
            </div>
            <div className="auth__right">
                {active==="Login"?(<Login/>):(<Signup/>)}
                
                <div className="auth__more">
                    <span>
                        {active==="Login"?(<> Dont have account? <button onClick={handleChange}>Sign up</button></>)
                        :(
                            <>
                             Have an account? <button onClick={handleChange}>Log in</button>
                            </>
                        )

                        }
                       </span>
                </div>
            </div>
        </div>
    )
}