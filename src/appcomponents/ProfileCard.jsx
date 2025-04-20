import React from 'react'
import { useActiveUser } from "../contexts/ActiveUser"; 

const ProfileCard = () => {
    const { active } = useActiveUser(); // Assuming useActiveUser is a custom hook that provides the active user data
  return (
    <>
      <div className="mx-auto">
        <div className="h-auto w-72 md:w-80 flex flex-col items-center rounded-lg bg-slate-800 py-5 px-4 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-300">
          <img
            src={active.pfp}
            alt=""
            className="rounded-full h-36 w-36 object-cover border-4 border-indigo-400"
          />
          <div className="flex justify-center items-center flex-col w-full mt-4">
            <p className="text-xl font-bold font-mono text-white">
              {active.name}
            </p>
            <p className="text-sm text-gray-300 text-center mt-2">{`${
              active.description ? active.description : "Description here"
            }`}</p>
            <hr className="mt-5 border-t w-full border-slate-700" />
            <div className="flex justify-around w-full mt-5 items-center py-2">
              <div className="flex flex-col items-center px-4 py-2">
                <p className="font-bold text-lg text-white">{active.uploads.length}</p>
                <p className="text-xs text-gray-400">Posts</p>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div className="flex flex-col items-center px-4 py-2">
                <p className="font-bold text-lg text-white">{active.favourites.length}</p>
                <p className="text-xs text-gray-400">Favourites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
   
  )
}

export default ProfileCard