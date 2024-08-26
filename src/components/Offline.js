import React from 'react'
import photo from "../assets/offline.jpeg"
// import '../CSS/offline.css'

const Offline = () => {

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center  p-6 bg-gray-100">
      <img
        src={photo} // Replace with your attractive image URL
        alt="Offline"
        className="w-2/3 max-w-xs md:max-w-sm lg:max-w-md animate-bounce"
      />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mt-6">
        You are offline
      </h1>
      <p className="text-gray-600 text-center mt-2">
        Oops! It seems you have lost your internet connection.
      </p>
      <p className="text-gray-600 text-center mt-1">
        Please check your connection and try again.
      </p>
      <button
        onClick={handleRefresh}
        className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Refresh
      </button>
      <p className="text-gray-500 text-sm text-center mt-4">
        If the issue persists, try restarting your router or checking your network settings.
      </p>
    </div>
  );
  // return (
  //   <div>
  //     <h1>Check your internet connection</h1>
  //     <h1>Please connenct to internet</h1>
  //     <h2>Error :400</h2>
  //     <div className="offline"></div>
  //   </div>
  // )
}

export default Offline
