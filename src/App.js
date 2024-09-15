import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Gelato/' element={<Home />} />
          {/* <Route path='/Gelato/about' element={<About />} />
          <Route path='/Gelato/skills' element={<Skills />} />
          <Route path='/Gelato/projects' element={<Project />} />
          <Route path='/Gelato/contact' element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
