
import './App.css';

import {Route,Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';



function App() {
  return (
    <div className="App">
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    

    </Routes>    
    </div>
  );
}

export default App;
