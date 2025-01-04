import React, { useState } from 'react';

const Travel = () => {
  const [travelMode, setTravelMode] = useState('');
  const [destination, setDestination] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const travelOptions = {
    boat: ['Greenwich Boat Ride', 'Westminster to Kew Cruise', 'Thames River Sightseeing'],
    train: ['Brighton', 'Bristol', 'Birmingham'],
    airplane: ['Paris', 'Amsterdam', 'Brussels']
  };

  const travelInfo = {
    'Greenwich Boat Ride': 'The Greenwich Boat Ride takes approximately 1 hour, offering a scenic cruise along the Thames River, passing iconic landmarks such as the Tower Bridge and the Cutty Sark before arriving at the historic Royal Borough of Greenwich.',
    'Westminster to Kew Cruise': 'This relaxing journey from Westminster Pier to Kew Pier lasts around 1 hour and 30 minutes, taking passengers through the heart of London, passing landmarks like the Houses of Parliament, and ending near the world-renowned Kew Gardens.',
    'Thames River Sightseeing': 'The Thames River Sightseeing tour typically lasts about 30–60 minutes, offering tourists a narrated cruise along Thames river, showcasing sights like St. Paul’s Cathedral, the London Eye, and Shakespeare Globe Theatre, with hop-on-hop-off options at various piers.',
    'Brighton': 'Located about 1 hour and 30 minutes by car from London, Brighton is a vibrant seaside city known for its iconic pier, colorful beach huts, and the historic Royal Pavilion. It’s a popular destination for its eclectic mix of shops, lively arts scene, and pebble beach.',
    'Bristol': 'A 2-hour drive from London, Bristol is a dynamic city famous for its maritime history, the Clifton Suspension Bridge, and vibrant street art, including works by Banksy. Visitors can explore the Harbourside, cultural venues, and its rich industrial heritage.',
    'Birmingham': 'Birmingham is roughly 2 hours and 30 minutes by car from London and is celebrated as a cultural and economic hub in the Midlands. Known for its canals, shopping at the Bullring, and attractions like the Cadbury World, it offers a mix of industrial heritage and modern development.',
    'Paris': 'A flight from London to Paris takes around 1 hour and 15 minutes, bringing visitors to one of the world’s most iconic cities. Famous for landmarks like the Eiffel Tower, the Louvre, and Notre-Dame Cathedral, Paris is renowned for its art, fashion, and rich history.',
    'Amsterdam': 'A quick 1-hour flight from London takes you to Amsterdam, a city known for its picturesque canals, vibrant art scene, and historical sites like the Anne Frank House. The city is also famous for its cycling culture and lively coffee shops.',
    'Brussels': 'A 1-hour and 10-minute flight from London, Brussels offers a blend of modern and medieval charm. Known for its stunning Grand Place, chocolates, waffles, and EU headquarters, the city is a hub for both politics and culture in Europe.'
  };

  const handleTravelModeChange = (event) => {
    setTravelMode(event.target.value);
    setDestination('');
    setSubmitted(false);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleClear = () => {
    setTravelMode('');
    setDestination('');
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-green-900 text-white flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Travel Mode Selection</h1>
      <div className="mb-4 flex flex-col sm:flex-row">
        <label className="mr-4 mb-2 sm:mb-0">
          <input
            type="radio"
            value="boat"
            checked={travelMode === 'boat'}
            onChange={handleTravelModeChange}
            className="mr-2"
          />
          Boat
        </label>
        <label className="mr-4 mb-2 sm:mb-0">
          <input
            type="radio"
            value="train"
            checked={travelMode === 'train'}
            onChange={handleTravelModeChange}
            className="mr-2"
          />
          Train
        </label>
        <label>
          <input
            type="radio"
            value="airplane"
            checked={travelMode === 'airplane'}
            onChange={handleTravelModeChange}
            className="mr-2"
          />
          Airplane
        </label>
      </div>

      {travelMode && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Select Destination</h2>
          <select
            value={destination}
            onChange={handleDestinationChange}
            className="bg-green-800 text-white p-2 rounded w-full sm:w-auto"
          >
            <option value="">Select...</option>
            {travelOptions[travelMode].map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="mb-4 flex flex-col sm:flex-row">
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-2"
        >
          Submit
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear
        </button>
      </div>

      {submitted && destination && (
        <div className="bg-green-800 p-4 rounded w-full sm:w-auto">
          <h2 className="text-2xl font-bold mb-2">Selected Destination</h2>
          <p className="text-lg">{destination}</p>
          <p className="text-sm">{travelInfo[destination]}</p>
        </div>
      )}
    </div>
  );
};

export default Travel;
