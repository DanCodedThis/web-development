import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServicesPage from "./pages/ServicesPage";
import Email from "./pages/Email";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import { AnimatePresence } from "framer-motion"

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  const location = useLocation();
  return (
  <>
  <Navbar/>
  <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={user ? <Navigate replace to="/"/> : <Login/>} />
        <Route path="/register" element={user ? <Navigate replace to="/"/> : <Register/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/meet" element={<Email/>} />
        <Route path="/profile" element={<Profile/>} />
    </Routes>
  </AnimatePresence>
  <Footer/>
  </>
  )
};

export default App;