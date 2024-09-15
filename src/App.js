import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Gelato/' element={<Home />} />
          {/* <Route path='/Gelato/page2' element={<page2 />} />
          <Route path='/Gelato/page3' element={<page3 />} />
          <Route path='/Gelato/page4' element={<page4 />} />
          <Route path='/Gelato/page5' element={<page5 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
