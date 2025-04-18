import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./appcomponents/NavBar";
import Footer from "./appcomponents/Footer";
import "./index.css";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DataProvider } from "./contexts/UserData";
import { ActiveUserProvider } from "./contexts/ActiveUser";

function App() {
  useEffect(() => {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  }, []);
  const [Theme, setTheme] = useState("dark");
  const handleTheme = () => {
    document.documentElement.classList.remove(Theme);
    if (Theme == "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };
  const [data, setdata] = useState({
    img: "",
    title: "",
    description: "",
  });
  const [active, setactive] = useState({
    name: "",
    email: "",
    password: "",
    uploads:[]
  });
  return (
    <>
      <ThemeProvider value={{ Theme, setTheme, handleTheme }}>
        <DataProvider value={{ data, setdata }}>
          {/* <NavBar /> */}
        <ActiveUserProvider value={{ active, setactive }}>
          <Outlet />
          <Footer />
        </ActiveUserProvider>
        </DataProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
