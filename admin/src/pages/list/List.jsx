import { Link, useLocation } from "react-router-dom";
import "./List.css";
// import { Publish } from "@material-ui/icons";
import { ListContext } from "../../context/listContext/ListContext";
import { updateList } from "../../context/listContext/apiCalls";
import { useContext, useState } from "react";


export default function List() {
  const location = useLocation();
  const list = location.state.list;

  const [updatelist, setlistMovie] = useState(list);
  const {dispatch} =useContext(ListContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setlistMovie({ ...updatelist, [e.target.name]: value })
  }

  const handleUpdateClick = (e)=>{
    e.preventDefault();
    // updateMovie(updatemovie,dispatch);
    updateList(updatelist,dispatch);
}


  
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" name="title" placeholder={list.title} onChange={handleChange} />
            <label>Type</label>
            <input type="text" name="type"  placeholder={list.type} onChange={handleChange} />
            <label>Genre</label>
            <input type="text" name="genre" placeholder={list.genre} onChange={handleChange} />
          </div>
          <div className="productFormRight">
            <button className="productButton"  onClick={handleUpdateClick} >Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}