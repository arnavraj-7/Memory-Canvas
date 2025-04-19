import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion } from "motion/react";
import { useUser } from "@/contexts/UserContext";
import { useActiveUser } from "@/contexts/ActiveUser";
import { toast } from "sonner";

const Login = () => {
  const { users, setusers } = useUser();
  let [entered_email, setentered_email] = useState("");
  let [entered_password, setentered_password] = useState("");
  let [show, setShow] = useState(false);
  const { active, setactive } = useActiveUser();
  //Fetching credentials
  // useEffect(() => {
  //   setusername(JSON.parse(localStorage.getItem("unames")) || []);
  //   setusers(JSON.parse(localStorage.getItem("users")) || []);
  //   console.log("USERS:", users);
  // }, []);

  //Console the credentials
  useEffect(() => {
    // setusers(users);
    console.log("Users in state:", users); // Logs updated users when state changes
  }, [users]);

  function displayPass() {
    if (show) {
    }
    setShow(false);
  }

  function verifyLogin() {
    const founduser = users.find(
      (user) => user.email == entered_email && user.password == entered_password
    );
    console.log(founduser);
    if (founduser) {
      toast.success("Login Successful", {
        description: `Welcome Back ${founduser.name}`,
        duration: 3000,
      });
      setactive(founduser);
      localStorage.setItem("active", JSON.stringify(founduser));

      return true;
    }
    toast.error("Login Failed", {
      description: "Kindly recheck your email and password",
      duration: 2000,
    });
    setactive(null);
    return false;
  }

  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 className="text-2xl text-center md:text-4xl mb-8 font-mono">
          Welcome to Memory Canvas
        </h1>
        <h1 className="text-xl text-center md:text-2xl font-mono">Login</h1>
        <p className="text-sm text-center text-gray-600 mb-5 mt-0 p-0 animate-pulse">
          To access your account 🔐
        </p>
        <form
          className="w-full space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (verifyLogin()) {
              setTimeout(() => {
                setentered_email("");
                setentered_password("");
              }, 200);
              navigate("/Gallery");
            } else {
            }
            // Dummy validation or API call can go here
            // navigate after signup (adjust as needed)
          }}
        >
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="form-label text-sm mb-1 text-gray-500 dark:text-gray-400"
            >
              Email address
            </label>
            <input
              type="email"
              className="h-10 rounded-sm px-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 focus:outline-none"
              id="email"
              name="email"
              required
              value={entered_email}
              onChange={(e) => setentered_email(e.target.value)}
            />
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="password"
              className="text-sm mb-1 text-gray-500 dark:text-gray-400"
            
            >
              Password
            </label>
            <input
              type="password"
              className="h-10 rounded-sm px-3 bg-transparent border-2 border-gray-300 dark:border-gray-600 focus:outline-none"
              id="password"
              name="password"
              required
              value={entered_password}
              onChange={(e) => setentered_password(e.target.value)}
            />
            <div className="mt-1 flex items-center [font-size:14px]">
              <label htmlFor="show">Show Password</label>
              <input
                name="show"
                value={show}
                type="checkbox"
                onChange={displayPass}
                className="h-4 ml-2 w-4"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="btn btn-primary font-light bg-black dark:text-black dark:bg-white text-white text-xl rounded-full w-60 h-10 mt-4 hover:scale-105 duration-200 ease-in-out mb-2 cursor-pointer"
            >
              Log in
            </button>
            <p className="mt-4 [font-size:14px] cursor-pointer hover:underline ">
              Don't have an account?
            </p>
          </div>
        </form>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary bg-black text-white text-xl rounded-full w-60 h-10 mt-4 font-light hover:scale-105 duration-200 ease-in-out mb-2 cursor-pointer dark:text-black dark:bg-white"
            onClick={(e) => navigate("/CreateAccount")}
          >
            Create an Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
