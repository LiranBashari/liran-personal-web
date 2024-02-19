import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    
    <BrowserRouter basename="/liran-personal-web">
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/resume" element={<Resume/>}> </Route>
          <Route path="/portfolio" element={<Portfolio/>}> </Route>
          <Route path="/contact" element={<Contact/>}> </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
