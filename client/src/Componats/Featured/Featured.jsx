
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./Featured.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Featured({ type,setGenre }) {
  const [content, setContent] = useState({});
  
  useEffect(()=>{
    const getRandomContent = async ()=>{
      try {
        const res= await axios.get(`movie/random?type=${type}`,
      {
        headers:
        {
          "auth-token":JSON.parse(localStorage.getItem("user")).accessToken,
        }
      }
        )
        
       setContent(res.data[0]);
        
      } 
      catch (error) 
      {
        console.log(error);
      }
    }
    getRandomContent();
  },[type])

// console.log(content);

  return (
    
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre"
           onChange={(e)=>setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="horror">Horror</option>
            <option value="action">Action</option>
            <option value="dramas">Dramas</option>
            <option value="crime">Crime</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      
      <img
        src={content.img}
        alt=""
      />
      <div className="info">
        <img
          src={content.imgTitle}
          alt=""
        />
        <span className="desc">
      
         {content.desc}
        </span>

        <div className="buttons">
          <button className="play">
            <PlayCircleOutlineIcon/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}