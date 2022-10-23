import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Sermons from "./pages/Sermons";
import About from "./pages/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App h-full  ">
      <div className="">
        <Nav />

    <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

        <div className=" object-bottom">
          <Footer className="absolute object-bottom bg-black " />
        </div>
      </div>
    </div>
  );
}

export default App;
