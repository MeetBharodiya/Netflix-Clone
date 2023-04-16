import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../../Componats/Navbar/Navbar';
import "./Watch.scss";



export default function Watch() {
  const location=useLocation();
  const movie=location.state.movie;
  // const [isHovered, setIsHovered] = useState(false);
 

  
  return (
    <>
    <Navbar/>
    <div className="featureds">   
      <img
        src={movie.img}
        alt=""
      />
      <div className="info">
        <img
          src={movie.imgTitle}
          alt=""
        />
        <span className="desc">
      
         {movie.desc}
        </span>
        <div className="buttons">
          <Link to="/fullmovie" state={{movie:movie}}>
          <button className="play">
            <PlayCircleOutlineIcon/>
            <span>Play</span>
          </button>
          </Link>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
       
      </div>
      
    </div>

<div className="card">
    <p className='videotitle'>Videos | {movie.title} </p>
    <video src={movie.trailer} poster={movie.img} autoplay={true} loop controls /> 
    <p className='videotitle2'>{movie.title} : Trailer </p>
</div>

   {/* <div className="trailer"> */}
   {/* <h1 className='videotitle'>Videos | {movie.title} </h1> */}
   {/* <video src={movie.trailer} poster={movie.img} /> */}
   {/* </div> */}

   <div className="like">
   <p className='random'>More Like This </p>
   </div>
    
    </>
  );
}