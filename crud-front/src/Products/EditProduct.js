import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [productinfo, setProductinfo] = useState({
    productName: "",
    productDescription: "",
    category: "",
    price: "",
    brand: "",
    color: "",
  });

  const [productData, setProductData] = useState(null);

  const { productName, productDescription, category, price, brand, color } =
    productinfo;

  const onInputChange = (e) => {
    setProductinfo({ ...productinfo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadProduct();
  }, []);

  useEffect(() => {
    if (productData) {
      setProductinfo({
        productName: productData.productName,
        productDescription: productData.productDescription,
        category: productData.category,
        price: productData.price,
        brand: productData.brand,
        color: productData.color,
      });
    }
  }, [productData]);

  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/product/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productinfo),
      });
      if (!response.ok) {
        throw new Error("Failed to update product");
      }
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const loadProduct = async () => {
    try {
      const response = await fetch(`http://localhost:8080/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const result = await response.json();
      setProductData(result);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Product</h2>
          <form onSubmit={onUpdate}>
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
                onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary me-2">
              Update
            </button>
            <Link to="/" className="btn btn-secondary">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
