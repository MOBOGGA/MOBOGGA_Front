import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer"
import Main from "./pages/Main";

import Landing from "./pages/Landing";
import Show from "./pages/Show";
import Login from './pages/Login'

import "./App.css";

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/show" element={<Show />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>

  );
}

export default App;
