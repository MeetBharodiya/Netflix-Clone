import "./Listitem.scss";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index,item  }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  // var updatemovie ={};

  useEffect(()=>{
    const getMovie = async ()=>{
      try {
        const res= await axios.get("movie/find/"+item,{
        headers:
        {
          "auth-token":JSON.parse(localStorage.getItem("user")).accessToken,
        }
      }
    
        )
        setMovie(res.data);
        
      } 
      catch (error) 
      {
        console.log(error);
      }
    }
    getMovie();
  },[setMovie,item])


  console.log(movie)
  
  return (
    <Link  to="/watch" state={{movie:movie}}>
    <div
      className="listItem"
      style={{ left: isHovered && (((index * 260) - 37) + (index * 10)) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.imgSm}
       alt=""
      />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayCircleOutlineIcon className="icon" />
              <AddCircleOutlineOutlinedIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOffAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
}