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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="Login" element={<SignInUp />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="CreateAccount" element={<SignInUp />}>
        <Route index element={<CreateAccount />} />
      </Route>
      <Route path="Gallery" element={<Gallery />} />
      <Route path="Card" element={<Card />} />
      <Route path="Profile" element={<Profile />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
