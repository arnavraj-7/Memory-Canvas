import React from "react";
import Card from "./Card";
import { useState } from "react";
import { motion } from "motion/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useActiveUser } from "@/contexts/ActiveUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Upload from "./Upload";
import Carousel from "./Carousel";

const Favourites = () => {
  const navigate = useNavigate();
  const { active,setactive } = useActiveUser();
  // useEffect(()=>{
  //   localStorage.getItem("active")?setactive(JSON.parse(localStorage.getItem("active"))):navigate("/Login")
  // },[])
  // console.log("Active User:", active);
  const [Cards, setCards] = useState([])
  const [empty,setempty]=useState(false)
  //   {
  //     img: "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
  //     title: "Card 1",
  //     description:
  //       "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
  //   },
  //   {
  //     img: "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
  //     title: "Card 2",
  //     description:
  //       "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
  //   },
  //   {
  //     img: "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
  //     title: "Card 3",
  //     description:
  //       "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
  //   },
  // ]);
  useEffect(() => {
    if (!active.favourites.length) {
      setempty(true);
      return;
    }
    setempty(false);
    setCards(active.favourites);
  }, [active]);
  
  return (
    <>
     <motion.div
                  />
    <div className={"min-h-screen pt-4 dark:bg-black z-10"}>
            {empty?(<div className="flex flex-col justify-center items-center h-screen bg-black text-white z-10">
        <h1 className="text-2xl font-bold mb-4">No Images Found</h1>
        <p>"No memories here yet! Upload your first one 😊"</p>
        <p className="text-lg">Please upload an image to view it here.</p>
      </div>):(<div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-col-1 pl-4 gap-y-4 gap-x-1 grid">
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
      </div>)}

      <div className="absolute bottom-0 right-4">
        <button
          className={`bg-blue-500 text-white ${Upload==true?"hidden":""} px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300`}
          onClick={() => {
          navigate("/Upload");
          }}
        >
          Upload
          </button>
      </div>
    </div>
    <div>
      <Carousel/>
    </div>
    </>
  );
};

export default Favourites;
