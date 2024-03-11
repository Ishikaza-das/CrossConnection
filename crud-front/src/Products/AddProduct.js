import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();

  const [productInfo, setProductInfo] = useState({
    productName: "",
    productDescription: "",
    category: "",
    price: "",
    brand: "",
    color: "",
  });

  const { productName, productDescription, category, price, brand, color } =
    productInfo;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productInfo),
      });

      if (response.ok) {
        navigate("/product");
      } else {
        console.error("Failed to add product:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="add-head">AddProduct</h2>
      <div className="form-container">
        <form id="register" onSubmit={handleAddProduct}>
          <div>
            <label htmlFor="productName">Product Name</label>
            <br />
            <input
              type="text"
              className="form-input"
              id="productName"
              name="productName"
              value={productName}
              onChange={handleInputChange}
            />
          </div>
          <br />

          <div>
            <label htmlFor="productDescription">Product Description</label>
            <br />
            <textarea
              type="text"
              className="form-input-desc"
              id="productDescription"
              name="productDescription"
              value={productDescription}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <br />

          <div>
            <label htmlFor="category">Category</label>
            <br />
            <input
              type="text"
              className="form-input"
              id="category"
              name="category"
              value={category}
              onChange={handleInputChange}
            />
          </div>
          <br />

          <div>
            <label htmlFor="price">Price</label>
            <br />
            <input
              type="text"
              className="form-input"
              id="price"
              name="price"
              value={price}
              onChange={handleInputChange}
            />
          </div>
          <br />

          <div>
            <label htmlFor="brand">Brand</label>
            <br />
            <input
              type="text"
              className="form-input"
              id="brand"
              name="brand"
              value={brand}
              onChange={handleInputChange}
            />
          </div>
          <br />

          <div>
            <label htmlFor="color">Color</label>
            <br />
            <input
              type="text"
              className="form-input"
              id="color"
              name="color"
              value={color}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="btn">
            <button className="add-btn" type="submit">
              Add
            </button>
            <div className="cen-btn">
              <Link id="canle-link" to="/product">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

// <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Add Product</h2>
//           <form onSubmit={handleAddProduct}>
//             {/* <ImageUpload onImageSelect={handleImageSelect} /> */}

// <div className="mb-3">
//   <label htmlFor="productName" className="form-label">
//     Product Name
//   </label>
//   <input
//     type="text"
//     className="form-control"
//     id="productName"
//     name="productName"
//     value={productName}
//     onChange={handleInputChange}
//   />
// </div>
// <div className="mb-3">
//   <label htmlFor="productDescription" className="form-label">
//     Product Description
//   </label>
//   <input
//     type="text"
//     className="form-control"
//     id="productDescription"
//     name="productDescription"
//     value={productDescription}
//     onChange={handleInputChange}
//   />
// </div>
// <div className="mb-3">
//   <label htmlFor="category" className="form-label">
//     Category
//   </label>
//   <input
//     type="text"
//     className="form-control"
//     id="category"
//     name="category"
//     value={category}
//     onChange={handleInputChange}
//   />
// </div>
// <div className="mb-3">
//   <label htmlFor="price" className="form-label">
//     Price
//   </label>
//   <input
//     type="text"
//     className="form-control"
//     id="price"
//     name="price"
//     value={price}
//     onChange={handleInputChange}
//   />
// </div>
// <div className="mb-3">
//   <label htmlFor="brand" className="form-label">
//     Brand
//   </label>
//   <input
//     type="text"
//     className="form-control"
//     id="brand"
//     name="brand"
//     value={brand}
//     onChange={handleInputChange}
//   />
// </div>
// <div className="mb-3">
//   <label htmlFor="color" className="form-label">
//     Color
//   </label>
//   <input
//     type="text"
//     className="form-control"
//     id="color"
//     name="color"
//     value={color}
//     onChange={handleInputChange}
//   />
// </div>

// <button type="submit" className="btn btn-primary me-2">
//   Add
// </button>
// <Link to="/" className="btn btn-secondary">
//   Cancel
// </Link>
//           </form>
//         </div>
//       </div>
//     </div>
