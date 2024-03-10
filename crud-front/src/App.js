import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";
import AddProduct from "./Products/AddProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

// {
/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addproducts" element={<AddProduct />} />
          <Route exact path="/editproduct/:id" element={<EditProduct />} />
        </Routes> */
// }
