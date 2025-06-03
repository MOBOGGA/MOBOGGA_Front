import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Main from "./pages/Main";

import Landing from "./pages/Landing";
import Show from "./pages/ShowDetail";

import Login from "./pages/Login";
import Clubs from "./pages/Clubs";
import Recruiting from "./pages/Recruiting";
import RecruitingDetail from "./pages/RecruitingDetail";
import AddInfo from "./pages/AddInfo";
import Mypage from "./pages/Mypage";
import UpdateProfile from "./pages/UpdateProfile";
import Loading from "./pages/Loading";

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
          <Route path="/show/:showId" element={<Show />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/recruiting" element={<Recruiting />} />
          <Route
            path="/recruiting/:recruitingId"
            element={<RecruitingDetail />}
          />
          <Route path="/add-info" element={<AddInfo />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/update" element={<UpdateProfile />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
