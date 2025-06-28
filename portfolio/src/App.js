import './App.css';
import { BrowserRoutes, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";

function App() {
  return (
    <BrowserRoutes>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contacts' element={<Contacts/>}/>

      </Routes>
    </BrowserRoutes>
    
  );
}

export default App;
