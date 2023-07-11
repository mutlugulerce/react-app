import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Iletisim from './pages/Iletisim';
import EmeklilikProgramı from './pages/EmeklilikProgramı';
import Sonuc from './pages/Sonuc';
import Hero from './pages/Hero';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <BrowserRouter>
<Navbar/>
      <Routes>
    
      <Route  path="/"  element={<Hero />} />
        <Route path="/emeklilik-hesaplama" element={<EmeklilikProgramı />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/sonuc" element={<Sonuc />} />
      </Routes>



    </BrowserRouter>
  )
}

export default App