import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Contacts from "./pages/Contacts.js";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contacts' element={<Contacts/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
