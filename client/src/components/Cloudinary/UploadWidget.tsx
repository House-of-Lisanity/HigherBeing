// UploadWidget.tsx

import { useState } from "react";

export default function UploadWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");

  async function handleUpload() {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:3001/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setImageUrl(data.secure_url);
      } else {
        console.error("Upload failed:", data.error);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  return (
    <div className="upload-widget">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload} disabled={!file}>
        Upload Image
      </button>

      {imageUrl && (
        <div className="uploaded-preview">
          <p>Uploaded image:</p>
          <img src={imageUrl} alt="Uploaded" width={300} />
        </div>
      )}
    </div>
  );
}
