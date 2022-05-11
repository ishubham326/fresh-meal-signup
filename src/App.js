import React from "react";
import GetStarted from "./GetStarted";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      {/* From react router 6 */}
      <NavBar />
      <Routes>
        <Route exact path="/" element={<GetStarted />}></Route>
        <Route path="/cart" element={<Products />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

//    font-family: 'Alegreya', serif;
