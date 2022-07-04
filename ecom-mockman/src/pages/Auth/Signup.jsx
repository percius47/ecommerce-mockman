import React, { useState } from 'react'
import "./authStyles.css"
import {NavLink} from "react-router-dom"
import Navbar from "../../Components/Navbar"

import Footer from "../../Components/Footer"
import  toast,{Toaster}  from "react-hot-toast";

import { useAuth } from '../../contexts/auth-context'
import { signupService } from '../../services/authServices/signupService'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Helmet } from 'react-helmet'
function Signup() {
    const { setIsAuth, setToken, navigate } = useAuth();
    const [signup, setSignup] = useState({
        input: {},
        error: "", 
        pwdMatch: true,
        hide: { pwd: true, confirmPwd: true },
      });  
    
      const [loading, setLoading] = useState(false);
    
      const signupInputHandler = (e) => {
        const { name, value } = e.target;
    
        if (name === "confirmPwd") {
          setSignup({
            ...signup,
            input: { ...signup.input, [name]: value },
            pwdMatch: value === signup.input.password ? true : false,
          });
        } else {
          setSignup({ ...signup, input: { ...signup.input, [name]: value } });
        }
      };
    
      const signupHandler = async (e) => {
        e.preventDefault();
    

    try {
      setLoading(true);
      const { data } = await signupService(signup.input);
      console.log("signup data",data);
      setLoading(false);
      toast.success(`Hi, ${data.createdUser.firstname}!`, {
        icon: "👋"
      });

      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", data.encodedToken);
      setToken(data.encodedToken);

      setIsAuth(true);
      setSignup({ ...signup, input: "" });

      navigate("/");
    } catch (err) {
        console.log("error",err);
      setLoading(false);
      toast.error("There was an error signing you up");
      setSignup({ ...signup, error: err.response.data.errors[0] });
    }
      };
    
  return (
    <div className='auth-container'>
          <Helmet>
                <title>Signup</title>
            </Helmet>
        <Navbar/>
        <Toaster
  position="top-right"
/>
        <div class="signup-card-wrapper">
    <div class="login-card">
        <h2 class="login-heading">Signup</h2>
        <div class="login-inputs">
    <form  onSubmit={signupHandler}>
        <div class="login-input-element">
            <label class="login-label">First Name</label>
            <input type="text"  class="login-input-field"
            name="firstname"
             value={signup.input.firstname || ""}
             onChange={signupInputHandler}
             required
            />            
            </div>
            <div class="login-input-element">
            <label class="login-label">Last Name</label>
            <input type="text"  class="login-input-field"
             name="lastname"
             value={signup.input.lastname || ""}
             onChange={signupInputHandler}
             required
            />            
            </div>
            <div class="login-input-element">
            <label class="login-label">Email</label>
            <input type="email" placeholder="anyone@example.com" class="login-input-field"
            name="email"
             value={signup.input.email || ""}
             onChange={signupInputHandler}
             required
            />
            
            </div>
{/* Password */}
            <div class="login-input-element">
            <label class="login-label">Password</label>
            <div className=" login-input-field">
            <input className='login-input-pwd'
              type={`${signup.hide.pwd ? "password" : "text"}`}
              name="password"
              value={signup.input.password || ""}
              onChange={signupInputHandler}
              required
           
              />
          {
                  signup.hide.pwd && <VisibilityIcon
                  className='eye-icon'
            onClick={() =>
              setSignup({
                ...signup,
                hide: { ...signup.hide, pwd: !signup.hide.pwd },
              })
            }
          />}
            {!signup.hide.pwd && <VisibilityOffIcon
                  className='eye-icon'
            onClick={() =>
              setSignup({
                ...signup,
                hide: { ...signup.hide, pwd: !signup.hide.pwd },
              })
            }
          />}

          </div>
            
           
            </div>

            {/* Confirm Pwd */}
            
            <div class="login-input-element">
                <label class="login-label">Confirm Password</label>
               <div className="login-input-field">
                <input  class="login-input-pwd"
                 type={`${signup.hide.confirmPwd ? "password" : "text"}`}
                name="confirmPwd"
                value={signup.input.confirmPwd || ""}
                onChange={signupInputHandler}
                required
                /> 
                {
                  signup.hide.confirmPwd && <VisibilityIcon
                  className='eye-icon'
            onClick={() =>
              setSignup({
                ...signup,
                hide: { ...signup.hide, confirmPwd: !signup.hide.confirmPwd },
              })
            }
          />}
            {!signup.hide.confirmPwd && <VisibilityOffIcon
                  className='eye-icon'
            onClick={() =>
              setSignup({
                ...signup,
                hide: { ...signup.hide, confirmPwd: !signup.hide.confirmPwd },
              })
            }
          />}                
                 </div>

                 {/* end Input fields */}
                 {!signup.pwdMatch ? (
                       <span class="inp-valid login-input-theme">Passwords do not match!</span>
                  ) : null}
             
                </div>
        <button class="btn-flex login-link"
        type='submit'
        disabled={!signup.pwdMatch}
        >  Continue
      </button>
      </form>
        </div>
        </div>
    </div>
        <Footer/>
    </div>
  )
}

export default Signup