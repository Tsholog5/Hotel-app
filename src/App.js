import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartupPage from "./Components/StartupPage";
import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignUpPage";
import HomePage from "./Components/HomePage";
import ForgotPasswordPage from "./Components/ForgotPasswordPage";
import Rooms from "./Components/Rooms";
import Bookings from "./Components/Bookings";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Explore from "./Components/Explore";
import Checkout from "./Components/Checkout";
import RoomSelection from "./Components/RoomSelection";
import BookingSummary from "./Components/BookingSummary";
import Admin from '../src/Admin/Admin';
import AdminDashboard from "./Components/AdminDashboard";
import UserProfile from "./Components/UserProfile";
import "./App.css"
import { PayPalScriptProvider,PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: "AdoEVKfKOQ3XTYkG9IRKiXLwu9JpjBa5yft-p4Gqfu601W4sAcvEBZaLbG6vMGxwr4YBPtI7CfxsNDlQ",
  currency: "USD",
  intent: "capture",
};


function App() {
  return (
    <PayPalScriptProvider options={initialOptions}>
    <Router>
      <Routes>
        <Route path="/" element={<StartupPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Bookings" element={<Bookings />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/RoomSelection" element={<RoomSelection />} />
        <Route path="/BookingSummary" element={<BookingSummary />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
      
    </Router></PayPalScriptProvider>
    
  );
}

export default App;
