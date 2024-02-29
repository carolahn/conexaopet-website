import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import trashIcon from '../assets/images/trash.png'

const ImageUploader = ({ label, onChange }) => {
  const [width, height] = useWindowSize();
  const [selectedImages, setSelectedImages] = useState([]);
  const [blobData, setBlobData] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    onChange(blobData);
  }, [blobData, onChange]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // const handleImageSelection = (e) => {
  //   const files = Array.from(e.target.files);
  //   setSelectedImages((prevImages) => [...prevImages, ...files]);
  // };

  const handleImageSelection = async (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages((prevImages) => [...prevImages, ...files]);
    
    const newImages = [];
  
    for (const file of files) {
      const blob = await getBlobFromImageFile(file);
      newImages.push({ blob, type: file.type });
    }
  
    setBlobData((prevBlobData) => [...prevBlobData, ...newImages]);
  };
  
  const getBlobFromImageFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const arrayBuffer = reader.result;
        const blob = new Blob([arrayBuffer], { type: file.type });
        resolve(blob);
      };
  
      reader.readAsArrayBuffer(file);
    });
  };
  

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index) => {
    if (draggedIndex === null || draggedIndex === index) return;

    const newOrder = [...selectedImages];
    const draggedImage = newOrder[draggedIndex];

    newOrder.splice(draggedIndex, 1);
    newOrder.splice(index, 0, draggedImage);

    setSelectedImages(newOrder);
    setDraggedIndex(index);
  };

  const removeImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setBlobData((prevBlobData) => prevBlobData.filter((_, i) => i !== index));
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const buttonStyle = {
    padding: '0.375rem 0.75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor:  isHovered ? 'var(--color-primary)' : 'var(--color-secondary)',
    border: '1px solid var(--color-secondary)',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
    width: '100%',
  };
  

  return (
    <div style={containerStyles}>
      
      <button style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
        <label htmlFor="fileInput" style={fileInputLabelStyles}>
          {label}
        </label>
      </button>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageSelection}
        id="fileInput"
        style={fileInputStyles}
      />
      <div
        style={dropzoneStyles}
        onDragOver={(e) => e.preventDefault()}
        onDragEnd={handleDragEnd}
      >
        {selectedImages.map((_, index) => (
          <div
            key={index}
            style={width > 900 ? imageContainerStyles : imageContainerMobileStyles}
            onDragOver={() => handleDragOver(index)}
            onDragStart={() => handleDragStart(index)}
            onDragEnd={handleDragEnd}
            draggable
          >
            <img
              src={URL.createObjectURL(selectedImages[index])}
              alt={`Imagem ${index + 1}`}
              style={width > 900 ? imagePreviewStyles : imagePreviewMobileStyles} 
              onClick={() => console.log(`Clicou na miniatura ${index + 1}`)}
            />
            <button onClick={() => removeImage(index)} style={removeButtonStyles}>
              <img src={trashIcon} alt="Remover" style={trashIconStyles} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const fileInputLabelStyles = {
  cursor: 'pointer',
  // marginBottom: '10px',
};

const fileInputStyles = {
  display: 'none',
};



const dropzoneStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '10px',
  width: '100%',
};

const imageContainerStyles = {
  position: 'relative',
  marginRight: '10px',
  marginBottom: '10px',
  maxWidth: '100px',
  maxHeight: '100px',
};

const imagePreviewStyles = {
  width: '100px',
  height: '100px',
  display: 'block',
  objectFit: 'cover',
};

const imageContainerMobileStyles = {
  position: 'relative',
  marginRight: '10px',
  marginBottom: '10px',
  maxWidth: '70px',
  maxHeight: '70px',
};

const imagePreviewMobileStyles = {
  width: '70px',
  height: '70px',
  display: 'block',
  objectFit: 'cover',
};

const removeButtonStyles = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  border: 'none',
  padding: '4px',
  cursor: 'pointer',
};

const trashIconStyles = {
  width: '16px',
  height: '16px',
};

export default ImageUploader;










