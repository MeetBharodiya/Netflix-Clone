import { useRef } from "react";
import { useState } from "react";
import "./Register.scss";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import Button from 'react-bulma-components/lib/components/button';


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigator=useNavigate();

  // useEffect(()=>{
  //   console.log("hi");
    
  // },[username,password])
 

  const handleStart = () => 
  {
    setEmail(emailRef.current.value);
  
  };

  
  const handleFinish = async (e) => 
  {
    e.preventDefault();
    try 
    {
      await axios.post("auth/register",{email,username,password});
      navigator("/login")
      
    } 
    catch (error) 
    {
       
    }
  };

  



  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          {/* <button type="button" className="loginButton">Danger</button> */}
          {/* <Link to="/login"> */}
          <button className="loginButton">Sign In</button>
          {/* </Link> */}

        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started <ArrowForwardIosSharpIcon />
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} onChange={(e)=>setUsername(e.target.value)} />
            <input type="password" placeholder="password" ref={passwordRef} onChange={(e)=>setPassword(e.target.value)}/>
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}