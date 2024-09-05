import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from "./Context/auth";
import { MdOutlineExitToApp } from "react-icons/md";
import { Link } from "react-router-dom";
import Login from './Login';

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (!pageLoaded) {
      setPageLoaded(true);
    }
  }, [pageLoaded]);

  const handleLogout = () => {
    logout();
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      {user ? (
        <div className="container mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">UWL Login App</h1>
          <p className="text-lg text-gray-700 mb-4">Welcome, {user.fullname}!</p>
          <p className="text-gray-600 mb-2">Sex: {user.gender}</p>
          <p className="text-gray-600 mb-6">Age: {user.age}</p>
          <div className="text-center">
            <button
              onClick={handleReload}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Refetch Data
            </button>
          </div>


          <Link
            to=""
            className="flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 mb-4"
            onClick={handleLogout}
          >
            <MdOutlineExitToApp className="mr-2" />
            <p className="font-semibold">Logout</p>
          </Link>

        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
