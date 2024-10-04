import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BookingTable from "./pages/Booking";
import Home from "./pages/Home";
import Order from "./components/Order";
import Menu from "./components/Menu";
import Overview from "./components/Overview";
import About from "./components/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking" element={<BookingTable />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
