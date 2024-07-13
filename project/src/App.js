
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Navbar from './component/Navbar';
import Home from './component/Home';
import Signin from './component/SignIn';
import Signup from './component/Signup';
import Services from './component/Services';
import Contactus from './component/Contactus';
 import About from './component/About';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services />} /> 
            <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/contactus" element={<Contactus />} /> 
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;