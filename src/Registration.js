import React from 'react'
import { useNavigate } from 'react-router-dom';

function Registration() {

    const navigate = useNavigate()

    return (
        <div className='body1'>

            <div id="container">

                <div class="form-wrap">
                    <h1>Sign Up</h1>
                    <p>It's Free and Only takes a minute</p>

                    <form>
                        <div class="form-group">
                            <label for="first-name">First Name</label>
                            <input type="text" name="firstname" id="first-name" />
                        </div>
                        <div class="form-group">
                            <label for="last-name">Last Name</label>
                            <input type="text" name="firstname" id="last-name" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="firstname" id="first-name" />
                        </div>
                        <div class="form-group">
                            <label for="cpass">Confirm Password</label>
                            <input type="password" name="firstname" id="first-name" />
                        </div>
                        <button type="submit"onClick={()=>navigate("/")} >Sign Up</button>
                        
                    </form>

                </div>

                <footer>
                    <p>Already Have an Account? <a href="#" onClick={()=>navigate("/")}>Login Here</a></p>
                </footer>
            </div>

        </div>
    )
}

export default Registration