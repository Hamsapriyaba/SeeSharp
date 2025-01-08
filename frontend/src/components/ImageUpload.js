import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/detect', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResults(response.data.detections);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h1>Object Detection</h1>
      <input type='file' onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <p>{result.label}: {result.confidence.toFixed(4)}</p>
            <p>Box: {result.box.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUpload;
