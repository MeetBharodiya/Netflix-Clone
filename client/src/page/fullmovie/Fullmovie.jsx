import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Link, useLocation } from 'react-router-dom';
import "./Fullmovie.scss";


export default function Fullmovie() {
  const location=useLocation();
  const movie=location.state.movie;
  
  console.log(location);
  return (
    <div className="watch">
      <Link to="/">
      <div className="back">
        <ArrowBackSharpIcon />
        Home
      </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.video}     
        />
    </div>
  );
}