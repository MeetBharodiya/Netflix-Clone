import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Featured from '../../Componats/Featured/Featured'
import List from '../../Componats/List/List'
import Navbar from '../../Componats/Navbar/Navbar'
import "./Home.scss"
// import {AcUnit} from '@mui/icons-material/AcUnit';

const Home = ({type}) => {
  
  const [lists,setLists]=useState([]);
  const [genre,setgenre]=useState(null);

  useEffect(()=>{
    const getRandomLists= async()=>{
      try {
        const res= await axios.get(`list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
            headers:
            {
              "auth-token":JSON.parse(localStorage.getItem("user")).accessToken,
            }
          }
        )
        // console.log(res.data);
        setLists(res.data);
      } 
      catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  },[type,genre])


  return (
    <div className='home'>
     {/* 👉👉 material icon  */}
    {/* <AcUnit/>                   */}
     <Navbar/>
    <Featured type={type} setgenre={setgenre}/>
    {lists.map((list)=>(

      <List list={list}/>
    )
    
    )}
   
   
    </div>
  )
}

export default Home
