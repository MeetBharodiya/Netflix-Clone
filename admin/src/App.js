import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
// import listList from "./pages/listList/listList";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext} from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import { Navigate } from "react-router-dom";
import ListList from "./pages/listList/listList";
import List from "./pages/list/List";
import NewList from "./pages/newlist/NewList";
// import ListList from "./pages/listList/listList";


function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/login"  element={user ? <Navigate to="/" /> :<Login/>} />
          {user &&
          <>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/movies" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/lists" element={<ListList/>} />
          <Route path="/list/:listId" element={<List/>} />
          <Route path="/newlist" element={<NewList/>} />
          </>
          }
        </Routes>

      </div>
      
    </Router>
  );
}

export default App;