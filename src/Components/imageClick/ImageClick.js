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
    <div className="min-h-screen flex flex-col items-center bg-green-100 py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Cute Icons App</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div 
          className={`cursor-pointer border rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${selectedImage === 'Apple' ? 'ring-4 ring-green-500' : ''}`} 
          onClick={() => handleImageClick('Apple')}
        >
          <img 
            src={require(`../../Assets/icons/icons8-apple-500.png`)} 
            alt="apple" 
            className="h-auto object-cover"
          />
        </div>
        <div 
          className={`cursor-pointer border rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${selectedImage === 'Android' ? 'ring-4 ring-green-500' : ''}`} 
          onClick={() => handleImageClick('Android')}
        >
          <img 
            src={require(`../../Assets/icons/icons8-android-500.png`)} 
            alt="android" 
            className="h-auto object-cover"
          />
        </div>
        <div 
          className={`cursor-pointer border rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${selectedImage === 'Linux' ? 'ring-4 ring-green-500' : ''}`} 
          onClick={() => handleImageClick('Linux')}
        >
          <img 
            src={require(`../../Assets/icons/icons8-kali-linux-500.png`)} 
            alt="Linux" 
            className="h-auto object-cover"
          />
        </div>
        <div 
          className={`cursor-pointer border rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${selectedImage === 'Windows' ? 'ring-4 ring-green-500' : ''}`} 
          onClick={() => handleImageClick('Windows')}
        >
          <img 
            src={require(`../../Assets/icons/icons8-windows8-500.png`)} 
            alt="Windows" 
            className="h-auto object-cover"
          />
        </div>
      </div>

      {showClearButton && (
        <button 
          onClick={handleClearText} 
          className="mt-6 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
        >
          Clear Selection
        </button>
      )}

      {selectedImage && (
        <p className="mt-4 text-lg text-green-700">
          You selected: <span className="font-semibold text-green-500">{selectedImage}</span>
        </p>
      )}
    </div>
  );
};

export default ImageGallery;
