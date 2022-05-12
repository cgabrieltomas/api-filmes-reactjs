import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/Home";
import "./global.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Details from "./pages/Details/Details"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/details/:id" element={<Details/>}/>
  </Routes>
  </BrowserRouter>
)