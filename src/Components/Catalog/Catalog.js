import React, { useState, useEffect, useRef } from 'react';
import data from '../../Assets/data/catalog.json'; // Import JSON data

const Catalogue = () => {
  const [items, setItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0); // Index of the selected item
  const [touchStartX, setTouchStartX] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Set items state with data from JSON file
    setItems(data);
  }, []);

  const handleItemClick = (item, index) => {
    setSelectedIndex(index); // Update the selected index
  };

  const handlePrevious = () => {
    // Decrement the index to navigate to the previous item
    setSelectedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  const handleNext = () => {
    // Increment the index to navigate to the next item
    setSelectedIndex(prevIndex => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    const sensitivity = 50; // Adjust sensitivity for swipe detection

    if (deltaX > sensitivity) {
      handlePrevious(); // Swipe right, navigate to previous item
    } else if (deltaX < -sensitivity) {
      handleNext(); // Swipe left, navigate to next item
    }
  };

  const selectedItem = items[selectedIndex]; // Get the currently selected item

  return (
    <div
      className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={containerRef}
    >
      <div className="catalogue-items flex overflow-x-auto mb-4 space-x-4">
        {items.map((item, index) => (
          <img
            key={item.id}
            src={require(`../../Assets/icons/${item.imageUrl}`)}
            alt={item.title}
            className={`cursor-pointer w-24 h-24 object-cover rounded-lg shadow-md transition-transform transform ${
              selectedIndex === index ? 'scale-110 border-4 border-blue-500' : 'scale-100'
            }`}
            onClick={() => handleItemClick(item, index)}
          />
        ))}
      </div>
      <div className="catalogue-details w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-center">
        {selectedItem ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedItem.title}</h2>
            <p className="text-gray-600 mb-4">{selectedItem.description}</p>
            <img
              src={require(`../../Assets/icons/${selectedItem.imageUrl}`)}
              alt={selectedItem.title}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        ) : (
          <p className="text-gray-500">Please select an item from the catalogue</p>
        )}
      </div>
      <div className="navigation-buttons mt-6 flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Catalogue;
