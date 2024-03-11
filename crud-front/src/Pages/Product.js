import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Product.css";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/product/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
      loadProducts(); // Reload products after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">Product</div>
        <div>
          <Link id="link" to="/addproduct">
            Add Product
          </Link>
        </div>
      </div>
      <div className="table">
        <table className="table-head">
          
            <tr className="table-row">
              <th scope="col">Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Description</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Brand</th>
              <th scope="col">Color</th>
              <th scope="col">Action</th>
            </tr>
          
          {/* <tbody> */}
            {products.map((product, index) => (
              <tr key={index} className="table-row">
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.productDescription}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.brand}</td>
                <td>{product.color}</td>
                <td>
                  <Link
                    className="edit-link"
                    to={{
                      pathname: `/editproduct/${product.id}`,
                      state: { product },
                    }}
                  >
                    Edit
                  </Link>
                  <button
                    className="del-btn"
                    onClick={() => {
                      deleteProduct(product.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          {/* </tbody> */}
        </table>
      </div>
    </div>
  );
}

/* <div className="container"> */
// <div className="py-4">
// <table className="table border shadow">
// <thead>
// <tr>
// <th scope="col">Id</th>
/* <th scope="col">Image</th> */
// <th scope="col">Product Name</th>
// <th scope="col">Product Description</th>
// <th scope="col">Category</th>
// <th scope="col">Price</th>
// <th scope="col">Brand</th>
// <th scope="col">Color</th>
// <th scope="col">Action</th>
// </tr>
// </thead>
// <tbody>
// {products.map((product, index) => (
// <tr key={index}>
// <th scope="row">{index + 1}</th>
/* <td>
                  <img
                    src={`data:image/png;base64,${product.image}`}
                    alt="Product"
                    style={{ width: "100px", height: "auto" }}
                  />
                </td> */
//             <td>{product.productName}</td>
//             <td>{product.productDescription}</td>
//             <td>{product.category}</td>
//             <td>{product.price}</td>
//             <td>{product.brand}</td>
//             <td>{product.color}</td>
//             <td>
//               <Link
//                 className="btn btn-outline-primary mx-2"
//                 to={{
//                   pathname: `/editproduct/${product.id}`,
//                   state: { product },
//                 }}
//               >
//                 Edit
//               </Link>
//               <button
//                 className="btn btn-danger mx-2"
//                 onClick={() => {
//                   deleteProduct(product.id);
//                 }}
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>
