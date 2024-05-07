import { useState } from 'react'; // Import useState
import { Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home"; // Import Home component
import About from "./Pages/About/About"; // Import About component
import Facilities from "./Pages/Facilities/Facilities"; // Import Facilities component
import Contact from "./Pages/Contact/Contact"; // Import Contact component
import Login from "./Pages/Login/Login"; // Import Login component
import Signup from "./Pages/Signup/Signup"; // Import Login component
import Registration from "./Pages/SampleRegister/Registration"; // Import Registration component
import { AuthProvider } from  "./Components/Navbar/AuthContext";
import Footer from "./Components/Footer/Footer";
import './App.css'

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false); // Define isLoggedIn state and setLoggedIn function

  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} /> {/* Pass setLoggedIn as a prop */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/Footer" element={<Footer/>} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
