import { useActiveUser } from "@/contexts/ActiveUser";
import React from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import ProfileCard from "./ProfileCard";

const EditProfile = () => {
  const { active, setactive } = useActiveUser();
  const navigate = useNavigate();

return (

    <div className="flex flex-row gap-x-3 justify-evenly bg-gradient-to-r p-10 h-screen items-center from-gray-900 to-black text-white pb-6">
        <div className="mb-4">
        <ProfileCard/>
        </div>
        <div>

        <form
            action=""
            className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
            onSubmit={(e) => {
                e.preventDefault();
                toast.success("Profile Updated", {
                    duration: 1000,
                    description: "Your profile has been updated successfully",
                });
                navigate("/Profile");
            }}
        >
            <label htmlFor="" className="block text-sm font-medium text-gray-300">
                Edit Profile Picture URL
            </label>
            <input
                type="url"
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={active.pfp}
                onChange={(e) => {
                    setactive((prev) => setactive({ ...prev, pfp:e.target.value }));
                }}
            />
            <label htmlFor="" className="block text-sm font-medium text-gray-300">
                Full Name
            </label>
            <input
                type="text"
                placeholder={active.name}
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={active.name}
                onChange={(e) =>
                    setactive((prev) => setactive({ ...prev, name: e.target.value }))
                }
            />
            <label htmlFor="" className="block text-sm font-medium text-gray-300">
                Description
            </label>
            <input
                type="text"
                placeholder={active.description}
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={active.description}
                onChange={(e) =>
                    setactive((prev) =>
                        setactive({ ...prev, description: e.target.value })
                    )
                }
            />
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-4"
            >
                Save Changes
            </button>
        </form>
        </div>
    </div>
);
};

export default EditProfile;
