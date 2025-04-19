// components/LoadingPage.jsx
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-slate-950">
      <div className="text-center">
        <div className="flex justify-center items-center space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
        </div>
        <p className="mt-4 text-lg text-gray-700">Loading your memories...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
