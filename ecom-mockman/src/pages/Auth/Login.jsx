import React, { useState } from 'react'
import "./authStyles.css"
import {NavLink} from "react-router-dom"
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import { useAuth } from '../../contexts/auth-context'
import  toast,{Toaster}  from "react-hot-toast";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { loginService } from '../../services/authServices/loginService'
import {Helmet} from "react-helmet"
function Login() {
    const { setIsAuth, setToken, navigate } = useAuth();

    const [login, setLogin] = useState({
      input: {},
      error: "",
      hide: { pwd: true },
    });
  
    const [loading, setLoading] = useState(false);
  
    const loginInputHandler = (e) => {
      const { name, value } = e.target;
      setLogin({ ...login, input: { ...login.input, [name]: value } });
    };
  
    const loginHandler = async (e) => {
      e.preventDefault();
 
      try {

      
        const { data } = await loginService(login.input);

   
        toast.success(`Welcome back, ${data.foundUser.firstName}!`, {
          icon: "👋",
        });
    
        localStorage.setItem("isAuth", true);
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.foundUser));
        setToken(data.encodedToken);
  
        setLogin({ ...login, input: { email: "", password: "" } });
        setIsAuth(true);
  
        navigate("/");
      } catch (err) {
        console.log("login error",err);
        setLoading(false);
        setLogin({ ...login, error: err.response.data.errors[0] });
      }
    };
  return (
      
    <div className='auth-container'>
       <Helmet>
                <title>Login</title>
            </Helmet>
     <Toaster/>
        <Navbar/>
        <div class="login-card-wrapper">
    <form class="login-card" onSubmit={loginHandler}>
        <h2 class="login-heading">Login</h2>
        <div class="login-inputs">

            <div class="login-input-element">
            <label class="login-label">Email</label>
            <input  placeholder="anyone@example.com" class="login-input-field"
              type="email"
          
              name="email"
              value={login.input.email || ""}
              onChange={loginInputHandler}
              required
            />
  
            </div>

            <div class="login-input-element">
            <label class="login-label">Password</label>
            <div className=" login-input-field">
            <input className='login-input-pwd'
             type={`${login.hide.pwd ? "password" : "text"}`}
          
             name="password"
             value={login.input.password || ""}
             onChange={loginInputHandler}
             required
            />
             {
                  login.hide.pwd && <VisibilityIcon
                  className='eye-icon'
            onClick={() =>
              setLogin({
                ...login,
                hide: { ...login.hide, pwd: !login.hide.pwd },
              })
            }
          />}
            {!login.hide.pwd && <VisibilityOffIcon
                  className='eye-icon'
            onClick={() =>
              setLogin({
                ...login,
                hide: { ...login.hide, pwd: !login.hide.pwd },
              })
            }
          />}

          </div>
            </div>
            
           
           </div>
          
             
            <div class="btn-flex">
                <button className="login-link" 
                onClick={loginHandler}
                >
            Login
        </button>
            </div>
            <div class="btn-flex">
                <button className="login-link" 
              type='submit'
                onClick={() =>
                  setLogin({
                    ...login,
                    input: {
                      email: "guest@windys.com",
                     password: "guest@windys",
                    },
                  })
            
                }
                >
            Login as Guest
        </button>
            </div>
            <div class="btn-flex">
                <NavLink className="signup-link" to="/signup">
           Create New Account <span className=" link-col-cta">&gt;</span>
        </NavLink>
            </div>
     
        </form>
    </div>
        <Footer/>
    </div>
  )
}

export default Login