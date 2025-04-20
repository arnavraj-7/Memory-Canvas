import React from "react";
import Card from "./Card";
import { useState } from "react";
import { useActiveUser } from "../contexts/ActiveUser";
import { use } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Upload = () => {
  const { active, setactive } = useActiveUser();
  const [url, seturl] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [favourite, setfavourite] = useState("false");
  const [location, setlocation] = useState("");
  const [local, setlocal] = useState(false);
  let c = {
    img: url,
    title: title,
    description: description,
    favourite: favourite,
  };
  const [newUpload, setnewUpload] = useState(c);
  const navigate = useNavigate();
  useEffect(() => {
    setnewUpload(c);
  }, [url, title, description, favourite, location]);

  return (
    <>
      <div className="bg-gray-950 min-h-screen text-white px-8 py-6">
        <div className="text-center text-3xl font-bold text-blue-400 mb-8">
          Upload an Image
        </div>
        <div className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-800">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              setactive((prev) => ({
                ...prev,
                uploads: [...(prev.uploads || []), newUpload],
              }));
              toast.success("Image Uploaded!", {
                description: `${title} has been uploaded to your gallery.`,
                duration: 500,
              });
              navigate("/Gallery");
            }}
          >
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <label htmlFor="check" className="font-medium text-blue-300">
                    Upload local Image{" "}
                  </label>
                  <input
                    type="checkbox"
                    name="check"
                    id="check"
                    value={local}
                    className="w-4 h-4 accent-blue-500"
                    onChange={(e) =>
                      local === false ? setlocal(true) : setlocal(false)
                    }
                  />
                </div>
                <label
                  htmlFor="upload"
                  className={`font-medium ${
                    local ? "animate-caret-blink" : ""
                  } text-blue-300 ${
                    local ? "hover:text-blue-600" : "hover:text-red-500"
                  } transition-colors ${
                    local ? "cursor-pointer" : "cursor-not-allowed"
                  }`}
                >
                  {`Upload the Image ${local ? "📂" : ""}`}
                </label>
                <input
                  type="file"
                  disabled={!local}
                  className="hidden"
                  name="upload"
                  id="upload"
                  onChange={(e) => {
                    seturl(URL.createObjectURL(e.target.files[0]));
                    settitle(e.target.files[0].name.split(".")[0]);
                  }}
                />
                <label htmlFor="img" className="font-medium text-blue-300">
                  Image URL:
                </label>
                <input
                  type="url"
                  className="bg-gray-800 rounded-md px-3 py-2 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                  name="img"
                  placeholder=""
                  disabled={local}
                  value={url}
                  onChange={(e) => seturl(e.target.value)}
                />
                <label htmlFor="title" className="font-medium text-blue-300">
                  Title:
                </label>
                <input
                  required
                  type="text"
                  className="bg-gray-800 rounded-md px-3 py-2 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                  name="title"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                />
                <label
                  htmlFor="description"
                  className="font-medium text-blue-300"
                >
                  Description:
                </label>
                <input
                  type="text"
                  className="bg-gray-800 rounded-md px-3 py-2 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                  name="description"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
                <label
                  htmlFor="description"
                  className="font-medium text-blue-300"
                >
                  Location:
                </label>
                <input
                  type="text"
                  className="bg-gray-800 rounded-md px-3 py-2 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                  value={location}
                  maxLength={20}
                  onChange={(e) => {
                    setlocation(e.target.value);
                  }}
                />
                <div className="flex gap-x-3 items-center text-blue-300 ">
                  <span className="font-medium">Add to Favourites</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      if (favourite) {
                        setfavourite(false);
                      } else {
                        setfavourite(true);
                      }
                    }}
                  >
                    <img
                      src={`${
                        favourite
                          ? "./src/assets/h1.png"
                          : "./src/assets/heart-regular.svg"
                      }`}
                      className={`h-6 cursor-pointer hover:scale-105 rounded-full transition-transform duration-300`}
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <p className="font-medium text-xl text-blue-300 mt-8 mb-4">
                Preview
              </p>
              <div className="border border-gray-800 p-4 rounded-lg bg-gray-900">
                <Card
                  card={{ img: url, title: title, description: description }}
                />
              </div>
            </div>
            <div className="flex flex-row gap-x-6 justify-center items-center mt-8">
              <button
                type="submit"
                className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300 shadow-lg hover:shadow-blue-900/50"
              >
                Upload
              </button>
              <button
                className="cursor-pointer bg-red-600 hover:bg-red-500 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300 shadow-lg hover:shadow-red-900/50"
                onClick={() => navigate("/Gallery")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Upload;
