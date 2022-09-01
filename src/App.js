import React from "react";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Route, BrowserRouter, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
