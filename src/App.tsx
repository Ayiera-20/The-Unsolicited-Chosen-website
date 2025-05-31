import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home/Home'
import About from './routes/About/About'
import WhatWeDo from './routes/What_We_Do/What_We_Do'
import GetInvolved from './routes/Get_Involved/Get_Involved'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="whatwedo" element={<WhatWeDo />} />
        <Route path="getinvolved" element={<GetInvolved />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
