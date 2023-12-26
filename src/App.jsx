import React from "react";
import Navbar from "./components/Navbar";
import All from "./components/All";
import Fullstack from "./components/Fullstack";
import Datascience from "./components/Datascience";
import Career from "./components/Career";
import Cyber from "./components/Cyber";
import { Navigate } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <br />
        <br />

        <Routes>
          <Route path="/all" element={<All />} />
          <Route path="/fullstack" element={<Fullstack />} />
          <Route path="/datascience" element={<Datascience />} />
          <Route path="/career" element={<Career />} />
          <Route path="/cyber" element={<Cyber />} />
          <Route path="*" element={<Navigate to="/all" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
