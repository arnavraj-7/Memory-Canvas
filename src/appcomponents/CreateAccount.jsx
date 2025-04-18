import React, { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CreateAccount = () => {
  const initialMount1 = React.useRef(true);
  const initialMount2 = React.useRef(true);
  const { Theme, handleTheme } = useTheme();
  const [error, setError] = useState("");
  const navigate = useNavigate();
    let [usernames, setusername] = useState([]);
    let [users, setusers] = useState([]);
    let [entered_email, setentered_email] = useState("");
    let [entered_password, setentered_password] = useState("");
    let [entered_name, setentered_name] = useState("");
    useEffect(() => {
      let s_username = localStorage.getItem("unames");
      setusername(JSON.parse(s_username) || []);
    }, []);
    useEffect(() => {
      let s_users = JSON.parse(localStorage.getItem("users")) || [];
      setusers((s_users)|| []);
  }, []);
  useEffect(() => {
    if (initialMount1.current){
      initialMount1.current = false;
      console.log(usernames);
      return;
    }
    localStorage.setItem("unames", JSON.stringify(usernames));
  }, [usernames]);
  useEffect(() => {
    if (initialMount2.current){
      initialMount2.current = false;
      console.log(users);
      return;
    }
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function setUsername() {
    if (usernames.includes(entered_email)) {
      return false;
    }
    setusername((prev) => [...prev, entered_email]);
    return true;
  }

  function verifySignUp() {
    if (setUsername()) {
      setusers((prev) => [
        ...prev,
        {
          name: entered_name,
          email: entered_email,
          password: entered_password,
          loggedin:false,
        },
      ]);
      alert("Sign Up Successful");
      setentered_name("");
      setentered_email("");
      setentered_password("");
      setTimeout(() => {
        navigate("/Login");
      }, 100);
      return;
    }
    alert("Sign Up Failed");
  }
  return (
    <div>
      <h1 className="text-2xl md:text-4xl mb-8 font-mono">
        Welcome to Memory Canvas
      </h1>
      <h1 className="text-2xl font-mono mb-2 text-center">
        Create Your Account
      </h1>
      <p className=" text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        Sign up to start saving memories ✨
      </p>

      {error && (
        <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
      )}

      <form
        className="w-full space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          verifySignUp();
        }}
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm mb-1 text-gray-500 dark:text-gray-400"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="h-10 rounded-sm px-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 focus:outline-none"
            value={entered_name}
            onChange={(e) => setentered_name(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm mb-1 text-gray-500 dark:text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="h-10 rounded-sm px-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 focus:outline-none"
            value={entered_email}
            onChange={(e) => setentered_email(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-sm mb-1 text-gray-500 dark:text-gray-400"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            className="h-10 rounded-sm px-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 focus:outline-none"
            value={entered_password}
            onChange={(e) => setentered_password(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-60 h-10 bg-black text-white dark:bg-white dark:text-black rounded-full mt-2 transition-transform hover:scale-105 duration-200"
          >
            Sign Up
          </button>
        </div>

        <p
          className="mt-3 text-center text-sm text-blue-500 hover:underline cursor-pointer"
          onClick={() => navigate("/Login")}
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
};

export default CreateAccount;
