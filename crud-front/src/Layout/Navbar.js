import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="sidenav">
        <div className="logo">Logo</div>
        <div className="btn-content">
          <div className="content">
            <Link id="link" to="/">
              DashBoard
            </Link>
            <Link id="link" to="/product">
              Product
            </Link>
            <Link id="link">Order</Link>
            <Link id="link">Transaction</Link>
            <Link id="link">Profile</Link>
            <Link id="link">LogOut</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// const Navbar = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//         <div className="container-fluid">
//           {/* <a className="navbar-brand" href="#"> */}
//           Product CRUD
//           {/* </a> */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <Link className="btn btn-outline-light" to="/addproducts">
//             Add Products
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// };
