import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Login from "./appcomponents/Login";
import Gallery from "./appcomponents/Gallery";
import Profile from "./appcomponents/Profile";
import SignInUp from "./appcomponents/SignInUp";
import "./index.css";
import CreateAccount from "./appcomponents/CreateAccount";
import Card from "./appcomponents/Card";
import Home from "./appcomponents/Home";
import NavBar from "./appcomponents/NavBar";
import AddImage from "./appcomponents/Upload";
import NotFound from "./appcomponents/NotFound";
import ProtectedRoute from "./appcomponents/ProtectedRoute";
import Upload from "./appcomponents/Upload";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home/>}/>
      <Route path="/Login" element={<SignInUp />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/CreateAccount" element={<SignInUp />}>
        <Route index element={<CreateAccount />} />
      </Route>

      <Route path="/Gallery" element={<><ProtectedRoute><NavBar/><Gallery /></ProtectedRoute></>} />
      <Route path="/Profile" element={<><ProtectedRoute><NavBar/><Profile /></ProtectedRoute></>} />
      <Route path="/Upload" element={<><ProtectedRoute><NavBar/><Upload /></ProtectedRoute></>} />
      <Route path="/*" element={<NotFound/>}/>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
