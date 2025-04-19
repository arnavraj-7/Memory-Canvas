import React from "react";
import Card from "./Card";
import { useState } from "react";
import { motion } from "motion/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useActiveUser } from "@/contexts/ActiveUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Upload from "./Upload";

const Gallery = () => {
  const navigate = useNavigate();
  const { active,setactive } = useActiveUser();
  useEffect(()=>{
    localStorage.getItem("active")?setactive(JSON.parse(localStorage.getItem("active"))):navigate("/Login")
  },[])
  const[showUpload, setshowUpload] = useState(false);
  console.log("Active User:", active);
  const [showLoginStatus, setshowLoginStatus] = useState(true);
  const [Cards, setCards] = useState([
    {
      img: "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
      title: "Card 1",
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
      title: "Card 2",
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
      title: "Card 3",
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
    },
  ]);
  useEffect(() => {
    if (!active.uploads.length) {
      return;
    }
    setCards(active.uploads);
  }, [active]);
  
  useEffect(()=>{
    const login=setTimeout(()=>{
      setshowLoginStatus(false);
      return removeTimeout(login);
    },2000)
  },[])
  return (
    <>
    <div className={"min-h-screen mb-4 p-y-4 bg-black"}>
    
      {showUpload && (
        <motion.div
        initial={{
          opacity:0,
        }}
        animate={{
        
          opacity:1
        }}
        transition={{
          ease:"easeIn",
          delay:0.2,
        
        }}
        

        
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-lg z-40" onClick={() => setshowUpload(false)} />

          {/* Modal Content */}
          <div className="mb-10  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-50 w-[90%] md:w-[500px] overflow-y-scroll ">
            <Upload />
            <button onClick={() => setshowUpload(false)} className="mt-4 text-red-500 bg-white" >Close</button>
          </div>
        </motion.div>
      )}

      <div className="grid-cols-5 pl-4 gap-y-4 grid">
        {Cards.map((c) => {
          return (
            <div
              key={c.title}
              className="flex flex-col justify-center items-center"
            >
              <Card card={c} />
            </div>
          );
        })}
      </div>
      <div className="fixed bottom-4 right-4">
        <button
          className={`bg-blue-500 text-white ${Upload==true?"hidden":""} px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300`}
          onClick={() => {
            if (!showUpload) {  
           setshowUpload(true);   
            }
            else{
              setshowUpload(false);
            }
          }}
        >
          Upload
          </button>
      </div>
    </div>
    </>
  );
};

export default Gallery;
