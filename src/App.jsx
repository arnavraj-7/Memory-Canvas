import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./appcomponents/NavBar";
import Footer from "./appcomponents/Footer";
import "./index.css";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  // const [Cards, setCards] = useState();

  // setCards([{img:"https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",title:"Card 1",description:"Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."},{img:"https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",title:"Card 2",description:"Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."},{img:"https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",title:"Card 3",description:"Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."}])


  useEffect(()=>{
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  },[])
  const [Theme, setTheme] = useState("dark");
 const handleTheme=()=>{
    document.documentElement.classList.remove(Theme);
    if(Theme=="dark"){
      setTheme("light");
      document.documentElement.classList.add("light");
    }
    else{
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }
  return (
    <>
      <ThemeProvider value={{Theme,setTheme,handleTheme}}>
        {/* <NavBar /> */}
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
