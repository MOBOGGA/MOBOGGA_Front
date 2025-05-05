import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";

import './App.css';

function App() {
  return (
  <BrowserRouter>
    <Header />
    <div className="App">
      hello world
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>

      <Footer />
  </BrowserRouter>
  );
}

export default App;
