import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import ImageUpload from "./ImageUpload";

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

  // const [selectedFile, setSelectedFile] = useState(null);

  const { productName, productDescription, category, price, brand, color } =
    productInfo;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  // const handleImageSelect = (file) => {
  //   setSelectedFile(file);
  // };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      // formData.append("file", selectedFile);
      formData.append("productName", productName);
      formData.append("productDescription", productDescription);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("brand", brand);
      formData.append("color", color);

      const response = await fetch("http://localhost:8080/product", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        navigate("/");
      } else {
        console.error("Failed to add product:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Product</h2>
          <form onSubmit={handleAddProduct}>
            {/* <ImageUpload onImageSelect={handleImageSelect} /> */}

            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                name="productName"
                value={productName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">
                Product Description
              </label>
              <input
                type="text"
                className="form-control"
                id="productDescription"
                name="productDescription"
                value={productDescription}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={category}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={price}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="brand" className="form-label">
                Brand
              </label>
              <input
                type="text"
                className="form-control"
                id="brand"
                name="brand"
                value={brand}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="color" className="form-label">
                Color
              </label>
              <input
                type="text"
                className="form-control"
                id="color"
                name="color"
                value={color}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-primary me-2">
              Add
            </button>
            <Link to="/" className="btn btn-secondary">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
