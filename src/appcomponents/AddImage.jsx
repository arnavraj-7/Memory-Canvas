import React from "react";
import Card from "./Card";
import { useState } from "react";
import { useActiveUser } from "../contexts/ActiveUser";
import { use } from "react";
import { useEffect } from "react";
const AddImage = () => {
  const {active, setactive} = useActiveUser({

  })
  const [url, seturl] = useState("")
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [local, setlocal] = useState(false)
  let c = {
    img: url,
    title: title,
    description: description,
  };
  const [newUpload, setnewUpload] = useState(c);
  useEffect(()=>{
    setnewUpload(c)
  },[url,title,description])

  return (
    <>
    <div className="bg-gray-950 h-screen text-white">

      <div className="text-center text-white">Add Image</div>
      <div className="m-4">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setactive((prev)=>({...prev,uploads: [...prev.uploads,newUpload]}));

          }}
        >
          <div className="">
            <div className="flex flex-col gap-y-3">
              <div className="flex flex-row items-center gap-x-2">
              <label htmlFor="check" >Upload local image </label>
              <input type="checkbox" name="check" id="check" value={local} onChange={(e)=> local==false?setlocal(true):setlocal(false)} />
              </div>
            <label htmlFor="upload" className="cursor-pointer ">Upload the Image</label>
              <input 
              type="file" 
              disabled={!local} 
              className="h-8 bg-gray-600 disabled:via-gray-800 hidden "  
              name="upload"  
              id="upload"
              onChange=
              {(e)=>{
                seturl(URL.createObjectURL(e.target.files[0]));
                settitle(e.target.files[0].name.split(".")[0]);
              }} />
            <label htmlFor="img">Image URL:</label>
            <input
              type="url"
              className="bg-gray-600 rounded pl-2 h-8
         text-white"
              name="img"
              placeholder="Enter the image URL"
              disabled={local}
              value={url}
              onChange={(e)=>seturl(e.target.value)}
            />
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="bg-gray-600 rounded pl-2 h-8
         text-white"
              name="title"
              value={title}
              onChange={(e)=>settitle(e.target.value)}
            />
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              className="bg-gray-600 rounded pl-2 h-8
         text-white text-ellipsis"
              name="description"
              value={description}
              onChange={(e)=>setdescription(e.target.value)}
            />
            </div>
            <p>Preview</p>
            <Card card={{img:url,title:title,description:description}} />
          </div>
          <button className="mt-4 cursor-pointer hover:bg-white hover:text-blue-700 bg-blue-700 w-20 h-8 drop-shadow-2xl hover:drop-shadow-gray-900">Upload</button>
          
        </form>
      </div>
      </div>
    
    </>
  );
};

export default AddImage;
