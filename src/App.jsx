import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./appcomponents/NavBar";
import Footer from "./appcomponents/Footer";
// import "./index.css";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider, useUser } from "./contexts/UserContext";
import { ActiveUserProvider } from "./contexts/ActiveUser";
import { Toaster } from "sonner";
import Navbar from "./appcomponents/NavBar";
import LoadingPage from "./appcomponents/LoadingPage";

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
  const [loading, setLoading] = useState(true);  // State to manage loading status
  const [users, setusers] = useState([]);  // State to manage users
  const initialMount = React.useRef(true);  // Ref to track initial mount  

  const [active, setactive] = useState({
    name: "",
    email: "",
    password: "",
    uploads:[{
      img: "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
      title: "Sample",
      description:
        "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.",
    },]
  });
  useEffect(()=>{
    const storedAllUsers=localStorage.getItem("users");
    if (storedAllUsers){
      setusers(JSON.parse(storedAllUsers)|| []);
    }
    setLoading(false);
  },[])


  useEffect(() => {
    const storedUser = localStorage.getItem("active");// Retrieve active user from localStorage
    if (storedUser) {
      setactive(JSON.parse(storedUser));  // Set activeUser from localStorage to context
    }
    setLoading(false);  // Finished loading
  }, []);
  
  useEffect(()=>{
    if (initialMount.current) {
      initialMount.current=false;
      return;
    }
    localStorage.setItem("users",JSON.stringify(users));
  },[users])
  
  useEffect(()=>{
    if(active){
      setusers((prev)=>{
       return prev.map((user)=>{
          if(user.email==active.email){
            return {...user,uploads:active.uploads}
          } return user;
        })
      })
    }
    else{
      return;
    }
  },[active])


  if (loading) {
    return <LoadingPage />;  // Show loading screen while the user data is being retrieved
  }
  return (
    <>
      <ThemeProvider value={{ Theme, setTheme, handleTheme }}>
        <UserProvider value={{ users, setusers }}>
        <ActiveUserProvider value={{active, setactive}}>
          <Toaster richColors position="top-right" />
          <Outlet />
          <Footer />
        </ActiveUserProvider>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
