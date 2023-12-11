import './App.css';
import { Route } from "react-router-dom"
import { Routes } from 'react-router-dom';
import Hax from './Hax';
import Home from './Home';
import About from './About';
function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="" element={<Home/>}/>
     <Route path='About' element={<About/>}/>
     </Routes>
     <Hax/>
    </div>
  );
}

export default App;
