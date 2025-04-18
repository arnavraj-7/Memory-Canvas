import { useTheme } from "@/contexts/ThemeContext";
import { Delete } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignInUp = () => {
  const { Theme, handleTheme } = useTheme();
  const [error, setError] = useState("");
  const urls = [
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8MXwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
  ];
  const [imageUrl, setImageUrl] = useState(
    urls[Math.floor(Math.random() * urls.length)]
  );
  useEffect(() => {
    const timeout = setInterval(() => {
      setImageUrl(urls[Math.floor(Math.random() * urls.length)]);
    }, 5000);
    return () => clearInterval(timeout);
  }, []);

  //for api
  // useEffect(() => {
  //   fetch('https://api.unsplash.com/photos/random?query=model&orientation=portrait&client_id=')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data && data.urls && data.urls.regular) {
  //         setImageUrl(data.urls.regular);
  //       } else {
  //         setError('Image data is not available');
  //       }
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       setError('Failed to fetch image');
  //     });
  // }, []);

  // if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="flex relative">
      <div className="absolute top-0 right-0 p-4">
        <button
          className="rounded-full h-10 w-10"
          onClick={(e) => {
            handleTheme();
          }}
        >
          <img
            className="rounded-full object-cover h-full w-full animate-pulse  bg-white"
            src={
              Theme == "dark" ? "src/assets/dark.png" : "src/assets/light.png"
            }
            alt=""
          />
        </button>
      </div>
      <div className="relative flex-1 h-screen">
        {imageUrl && (
          <img
             key={imageUrl}
            src={imageUrl}
            className="w-full h-full object-cover fade-in"
            alt="Random model from Unsplash"
          />
        )}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="container bg-white dark:bg-black dark:text-white flex flex-1 flex-col justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default SignInUp;
