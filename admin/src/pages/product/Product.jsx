import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import "./product.css";
import { Publish } from "@material-ui/icons";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function Product() {
    const location=useLocation();
    const movie=location.state.movie;
    const [updatemovie, setupdateMovie] = useState(movie);
    const {dispatch} =useContext(MovieContext);

    const handleChange = (e) => {
        const value = e.target.value;
        setupdateMovie({ ...updatemovie, [e.target.name]: value })
      }
    
    const handleUpdateClick = (e)=>{
        e.preventDefault();
        // console.log(updatemovie);
        updateMovie(updatemovie,dispatch);
    }
    
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={movie.img} alt="" className="productInfoImg" />
                  <span className="productName">{movie.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{movie._id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">genre:</span>
                      <span className="productInfoValue">{movie.genre}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">year:</span>
                      <span className="productInfoValue">{movie.year}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">limit:</span>
                      <span className="productInfoValue">{movie.limit}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label htmlFor="title">Movie Title</label>
                  <input type="text" id="title" name="title" placeholder={movie.title} onChange={handleChange} />
                  <label>Year </label>
                  <input type="text" id="year" name="year" placeholder={movie.year} onChange={handleChange} />
                  <label>Genre</label>
                  <input type="text" id="genre" name="genre"   placeholder={movie.genre} onChange={handleChange} />
                  <label>Limit</label>
                  <input type="text" id="limit" name="limit"  placeholder={movie.limit} onChange={handleChange} />
                  <label>Trailer </label>
                  <input type="file" placeholder={movie.trailer} />
                  <label>Video </label>
                  <input type="file" placeholder={movie.video} />
                 
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={movie.img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton" onClick={handleUpdateClick}>Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
