import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [productinfo, setProductinfo] = useState({
    productName: "",
    productDescription: "",
    pricing: "",
    specification: "",
    availability: "",
  });

  const [productData, setProductData] = useState(null);

  const {
    productName,
    productDescription,
    pricing,
    specification,
    availability,
  } = productinfo;

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
        pricing: productData.pricing,
        specification: productData.specification,
        availability: productData.availability,
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
              <label htmlFor="pricing" className="form-label">
                Pricing
              </label>
              <input
                type="text"
                className="form-control"
                id="pricing"
                name="pricing"
                value={pricing}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="specification" className="form-label">
                Specification
              </label>
              <input
                type="text"
                className="form-control"
                id="specification"
                name="specification"
                value={specification}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="availability" className="form-label">
                Availability
              </label>
              <input
                type="text"
                className="form-control"
                id="availability"
                name="availability"
                value={availability}
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
