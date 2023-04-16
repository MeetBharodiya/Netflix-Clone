import Home from "./page/home/Home";
import "./App.scss";
import Login from "./page/Login/Login";
import Register from "./page/Register/Regsiter";
import Watch from "./page/Watch/Watch";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "./authContext/AuthContext"
import Fullmovie from "./page/fullmovie/Fullmovie";

function App() 
{
  const {user} = useContext(AuthContext);
  return (
  <Router>
    <Routes>
    <Route path="/" element={user ? <Home/> :  <Navigate to="/register" replace={true} /> } />
    <Route path="/register" element={user ?  <Navigate to="/" replace={true} />  : <Register/>} />
    <Route path="/login" element={user ?  <Navigate to="/" replace={true} />  : <Login/>} />
    {user &&
    (
      <>
      <Route path="/movies" element={<Home type="movie"/>} />
      <Route path="/series" element={<Home type="series"/>} />
      <Route path="/watch" element={<Watch/>} />
      <Route path="/fullmovie" element={<Fullmovie/>} />
      </>
    )}
   
    </Routes>
  </Router>
  )
}

export default App;
