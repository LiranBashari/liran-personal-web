import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>}> </Route>
          <Route path="/resume" element={<Resume/>}> </Route>
          <Route path="/portfolio" element={<Portfolio/>}> </Route>
          <Route path="/contact" element={<Contact/>}> </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
