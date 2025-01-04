import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import swal from 'sweetalert';
import 'react-datepicker/dist/react-datepicker.css';

const booksData = [
  {
    bookName: "Wheel of Time",
    bookImage: "https://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_1000H/9780765376862.jpg",
    bookAuthors: "Robert Jordan",
    bookPublisher: "Tor Books (Macmillan)"
  },
  {
    bookName: "Lord of the Rings",
    bookImage: "https://www.bibdsl.co.uk/imagegallery/bookdata/cd427/9780261103252.JPG",
    bookAuthors: "J. R. R. Tolkien",
    bookPublisher: "Allen & Unwin"
  },
  {
    bookName: "Harry Potter Series",
    bookImage: "https://i2.wp.com/geekdad.com/wp-content/uploads/2013/02/HP1-Kibuishi.jpg",
    bookAuthors: "J. K. Rowling",
    bookPublisher: "Bloomsbury"
  },
  {
    bookName: "A song of Ice and Fire",
    bookImage: "https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg",
    bookAuthors: "George R. R. Martin",
    bookPublisher: "Bantam & Voyager Books"
  }
];

const Library = () => {
  const [reservations, setReservations] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleReserve = (book) => {
    setSelectedBook(book);
  };

  const handleRemoveReservation = (book) => {
    setReservations(reservations.filter(reservation => reservation.book.bookName !== book.bookName));
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const confirmReservation = () => {
    setReservations([...reservations, { book: selectedBook, startDate, endDate }]);
    swal({
      title: "Book Reserved!",
      text: `${selectedBook.bookName} from ${startDate.toDateString()} to ${endDate.toDateString()}`,
      icon: "success",
      button: "OK"
    });
    setSelectedBook(null);
  };

  const isBookReserved = (bookName) => {
    return reservations.some(reservation => reservation.book.bookName === bookName);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {booksData.map((book, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <img src={book.bookImage} alt={book.bookName} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{book.bookName}</h2>
            <p className="text-gray-700">Author: {book.bookAuthors}</p>
            <p className="text-gray-700">Publisher: {book.bookPublisher}</p>
            {isBookReserved(book.bookName) ? (
              <button
                onClick={() => handleRemoveReservation(book)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              >
                Remove Reservation
              </button>
            ) : (
              <button
                onClick={() => handleReserve(book)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Reserve Book
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Select Reservation Dates</h2>
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
            <button
              onClick={confirmReservation}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              Confirm Reservation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;