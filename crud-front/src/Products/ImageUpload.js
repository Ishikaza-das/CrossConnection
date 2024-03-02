import React, { useState } from "react";

function ImageUpload({ onImageSelect }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewImage(URL.createObjectURL(file));
    setFileName(file.name); // Set the file name only
  };

  return (
    <div className="mb-3">
      <label htmlFor="image" className="form-label">
        Image
      </label>
      {previewImage && (
        <div className="mt-2">
          <img
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*" // Accept only image files
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the input field
      />
      <button
        className="btn btn-outline-secondary mt-2"
        type="button"
        onClick={(e) => document.getElementById("image").click()} // Trigger file input click
      >
        Browse
      </button>
      {selectedFile && onImageSelect(selectedFile)}
    </div>
  );
}

export default ImageUpload;
