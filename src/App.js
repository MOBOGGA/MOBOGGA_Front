import React from "react";
// import { Route, Routes } from "react-router-dom";

// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Landing from "./Pages/Landing";

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
