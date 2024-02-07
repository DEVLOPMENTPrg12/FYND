 import { Link } from 'react-router-dom';
import InputControle from './inputControle';
import './login.css';
 export default function Login(){
    return(
        <div className='container'>
            <div className='innerBox'>
                <h1 className='heading'>Login</h1>
               <label>Email</label><br/>
               <input type='text' placeholder='Entre emeil adress'/><br/>
               <label>Password</label><br/>
               <input type='password' placeholder='Entre Password'/>
               <div className='footer'>
                <button>Login</button>
                <p>Already have an account?{" "}
                <span>
                    <Link to="/signup">Sign up</Link>
                </span>
                </p>
                

               </div>
            </div>

        </div>
    )
 }
 