import React, { useState } from "react";

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <div className="mb-3">
      <label htmlFor="image" className="form-label">
        Image
      </label>
      <input
        type="file"
        className="form-control"
        id="image"
        name="image"
        onChange={handleFileChange}
      />
      {previewUrl && (
        <div className="mt-2">
          <img
            src={previewUrl}
            alt="Preview"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
}
