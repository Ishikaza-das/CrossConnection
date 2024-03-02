import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./Products/AddProduct";
import EditProduct from "./Products/EditProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addproducts" element={<AddProduct />} />
          <Route exact path="/editproduct/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
