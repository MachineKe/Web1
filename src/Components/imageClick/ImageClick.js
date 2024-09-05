import React, { useState } from 'react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showClearButton, setShowClearButton] = useState(false);

  const handleImageClick = (imageName) => {
    setSelectedImage(imageName);
    setShowClearButton(true);
  };

  const handleClearText = () => {
    setSelectedImage(null);
    setShowClearButton(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Cute Icons App</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div 
          className={`cursor-pointer border rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${selectedImage === 'Facebook' ? 'ring-4 ring-blue-500' : ''}`} 
          onClick={() => handleImageClick('Facebook')}
        >
          <img 
            src={require(`../../Assets/icons/icons8-facebook-500.png`)} 
            alt="facebook" 
            className="h-auto object-cover"
          />
        </div>
        <div 
          className={`cursor-pointer border rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${selectedImage === 'Instagram' ? 'ring-4 ring-blue-500' : ''}`} 
          onClick={() => handleImageClick('Instagram')}
        >
          <img 
            src={require(`../../Assets/icons/icons8-instagram-500.png`)} 
            alt="Instagram" 
            className="h-auto object-cover"
          />
        </div>
        <div 
          className={`cursor-pointer border rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${selectedImage === 'Whatsapp' ? 'ring-4 ring-blue-500' : ''}`} 
          onClick={() => handleImageClick('Whatsapp')}
        >
          <img 
            src={require(`../../Assets/icons/icons8-whatsapp-500.png`)} 
            alt="Whatsapp" 
            className="h-auto object-cover"
          />
        </div>
        <div 
          className={`cursor-pointer border rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${selectedImage === 'X' ? 'ring-4 ring-blue-500' : ''}`} 
          onClick={() => handleImageClick('X')}
        >
          <img 
            src={require(`../../Assets/icons/icons8-twitter-500.png`)} 
            alt="X" 
            className="h-auto object-cover"
          />
        </div>
      </div>

      {showClearButton && (
        <button 
          onClick={handleClearText} 
          className="mt-6 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
        >
          Clear Selection
        </button>
      )}

      {selectedImage && (
        <p className="mt-4 text-lg text-gray-700">
          You selected: <span className="font-semibold text-blue-500">{selectedImage}</span>
        </p>
      )}
    </div>
  );
};

export default ImageGallery;
