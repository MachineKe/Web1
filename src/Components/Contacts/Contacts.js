import React, { useState } from 'react';

const contactsData = [
  {
    id: 1,
    name: 'Ethan Matthews',
    email: 'ethan.matthews@example.com',
    phone: '7412 678123',
    picture: 'man1.png'
  },
  {
    id: 2,
    name: 'Lucas Carter',
    email: 'lucas.carter@example.com',
    phone: '7930 558765',
    picture: 'man2.png'
  },
  {
    id: 3,
    name: 'Benjamin Adams',
    email: 'benjamin.adams@example.com',
    phone: '020 7893 6298',
    picture: 'man3.png'
  },
  {
    id: 4,
    name: 'Samuel Thomson',
    email: 'samuel.thompson@example.com',
    phone: '020 8636 6068',
    picture: 'man4.png'
  },
  {
    id: 5,
    name: 'Emma Bennett',
    email: 'emma.bennett@example.com',
    phone: '7939 553456',
    picture: 'woman1.png'
  },
  {
    id: 6,
    name: 'Liz Bacon',
    email: 'liz.bacon@example.com',
    phone: '7930 590511',
    picture: 'woman2.png'
  },
  {
    id: 7,
    name: 'Sapphire Robinson',
    email: 'sapphire.robinson@example.com',
    phone: '7930 876239',
    picture: 'woman3.png'
  },
  {
    id: 8,
    name: 'Barbara Brooks',
    email: 'barbara.brooks@example.com',
    phone: '7939 347600',
    picture: 'woman4.png'
  },
];

const Contacts = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = contactsData.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredContacts.map(contact => (
          <div
            key={contact.id}
            className="bg-white p-4 rounded shadow hover:bg-gray-100 cursor-pointer"
            onClick={() => handleContactClick(contact.phone)}
          >
            <img src={require(`./images/${contact.picture}`)} alt={contact.name} className="w-16 h-16 rounded-full mx-auto" />
            <div className="text-center mt-2">
              <h2 className="text-lg font-semibold">{contact.name}</h2>
              <p className="text-gray-600">{contact.phone}</p>
              <p className="text-blue-600 underline">{contact.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;