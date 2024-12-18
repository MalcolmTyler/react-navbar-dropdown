import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Consulting from "./pages/services/Consulting";
import Contactus from "./pages/Contactus";
import Design from "./pages/services/diggers/development/Design";
import Development from "./pages/services/diggers/development/Development";
import Marketing from "./pages/services/Marketing";
import Products from "./pages/services/diggers/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Diggers from "./pages/services/diggers/diggers"
// import Dropdown from "./components/Dropdown";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/contactus" element={<Contactus/>}></Route>
          <Route path="/services/diggers/products" element={<Products/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/services/marketing" element={<Marketing/>}></Route>
          <Route path="/services/diggers/development/Development" element={<Development/>}></Route>
          <Route path="/services/diggers/development/Design" element={<Design/>}></Route>
          <Route path="/services/consulting" element={<Consulting/>}></Route>
          <Route path="/services/diggers/diggers" element={<Diggers/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


