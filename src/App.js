import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Project from "./components/Project";
import ContactUs from "./components/ContactUs";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
      if(mode === 'light'){
        setMode ('dark');
        document.body.style.backgroundColor ='#042743';
    }
      else{
        setMode ('light');
        document.body.style.backgroundColor ='white';
      }
    }
  return (
    <>
       <Router>
      <Navbar title="Portfolio" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/service" element={<Service/>}/>
          <Route exact path="/project" element={<Project/>}/>
          <Route exact path="/contactus" element={<ContactUs/>}/>
      </Routes>
      </div>
      
    </Router>
    </>
  );
}

export default App;
