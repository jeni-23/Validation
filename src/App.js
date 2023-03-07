
import './App.css';
import Validation from './Components/validation';
import Home from './Components/home'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
        <Routes>
           <Route path="/" element={ <Validation/>} />
           <Route path="/home" element={ <Home/>} />
          
         </Routes>
  
  );
}

export default App;
