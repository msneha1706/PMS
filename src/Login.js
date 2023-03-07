import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

    return (
        <div className='body1'>

            <h1>Project Managment System</h1>
            <form action="">

                <div classname="headingsContainer">
                    <h3>Sign in</h3>
                    <p>Sign in with your username and password</p>
                </div>


                <div className="mainContainer">

                    <label for="username">Your username</label>
                    <input type="text" placeholder="Enter Username" name="username" required />

                    <br /><br />


                    <label for="pswrd">Your password</label>
                    <input type="password" placeholder="Enter Password" name="pswrd" required />

                    <br />
                    <button type="submit"  onClick={()=>navigate("/home")}>Login</button>
                    <p className="register">Not a member?  <a href="#" onClick={()=>navigate("/reg")}>Register here!</a></p>
                </div>

                

            </form>

        </div>
    )
}

export default Login