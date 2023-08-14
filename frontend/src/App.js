import React, { useState } from 'react';
import { uploadFile } from './api';
import './App.css'; // Make sure to link your CSS file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectedFile, setSelectedFile] = useState({
    name: '',
    assetId: '',
    description: '',
    image: null, // Store the selected image file
  });
  const [ipfsHash, setIpfsHash] = useState('');
  const [apiResponse, setApiResponse] = useState(null); // New state for API response
  const [loading, setLoading] = useState(false); // New state for loader

  const handleImageChange = (e) => {
    setSelectedFile((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleUpload = async () => {
    if (selectedFile.image) {
      try {
        setLoading(true);
        const response = await uploadFile(selectedFile);
        setApiResponse(response); // Set the API response data
        setIpfsHash(response.ipfsHash);
        toast.success('File uploaded successfully!');  // Show success toast
        // Auto-reload after 2 seconds
        setTimeout(() => {
          window.location.reload();
        }, 30000);
      } catch (error) {
        console.error('Error uploading file:', error);
        toast.error('Error uploading file.');  // Show error toast
        // Auto-reload after 2 seconds
        setTimeout(() => {
          window.location.reload();
        }, 30000);
      } finally {
        setLoading(false); // Stop loading
      }
    } else {
      toast.warn('Please select a file before uploading.'); // Show warning toast
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedFile((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className="form-container">
        <h1 className="header">IPFS Frontend</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={selectedFile.name}
          onChange={handleInputChange}
          className="input-field"
        />
        <input
          type="text"
          name="assetId"
          placeholder="Asset ID"
          value={selectedFile.assetId}
          onChange={handleInputChange}
          className="input-field"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={selectedFile.description}
          onChange={handleInputChange}
          className="textarea-field"
        />
        <label className="file-label">
          Choose File
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="file-input"
          />
        </label>
        <button onClick={handleUpload} className="upload-button">
          Upload to IPFS
        </button>
        {loading && <div className="loader"></div>}
        {ipfsHash && <p className="ipfs-hash">IPFS Hash: {ipfsHash}</p>}
        {apiResponse && (
          <div className="api-response-container">
            <h2>IPFS API Response</h2>
            <div className="url-buttons">
              <button onClick={() => window.open(apiResponse.metadataURL, '_blank')} className="url-button">
                Metadata URL
              </button>
              <button onClick={() => window.open(apiResponse.imageURL, '_blank')} className="url-button">
                Image URL
              </button>
            </div>
          </div>
        )}
        {selectedFile.image && (
          <div className="uploaded-image-container">
            <img
              src={URL.createObjectURL(selectedFile.image)}
              alt="Uploaded"
              className="uploaded-image"
            />
          </div>
        )}
      </div>
    </div>
  );

}

export default App;
