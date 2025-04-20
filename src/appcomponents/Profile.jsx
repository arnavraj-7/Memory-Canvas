import { useActiveUser } from "@/contexts/ActiveUser";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const navigate =useNavigate()
  const [wish, setwish] = useState("Hello");
  useEffect(() => {
    const date = new Date();
    let time = date.getHours();
    time = Number(time);
    setwish(getWish(time));
  }, []);

  function getWish(time) {
    if (time >= 4 && time < 12) {
      return "Good Morning";
    } else if (time >= 12 && time < 16) {
      return "Good Afternoon";
    } else if (time >= 16) {
      return "Good Evening";
    } else {
      return "Hello";
    }
  }

  const { active, setactive } = useActiveUser();
  return (
    <div className="min-h-screen flex flex-col p-4 bg-gradient-to-r from-gray-900 to-black text-white pb-6">
      <ProfileCard/>
      <div className="flex justify-center">
      <button 
      className="mt-6 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-indigo-400 text-white px-5 py-2 rounded text-sm font-medium transition-colors duration-200"
      onClick={()=>{
        navigate("/EditProfile")
      }}
      >
        Edit Profile
      </button>
      </div>
    </div>
  );
};

export default Profile;
