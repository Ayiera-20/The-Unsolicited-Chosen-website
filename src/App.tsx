import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home/Home'
import About from './routes/About/About'
import WhatWeDo from './routes/What_We_Do/What_We_Do'
import GetInvolved from './routes/Get_Involved/Get_Involved'
import ContactUs from './routes/Contact/ContactUs'
import Donate from './routes/Donate/Donate'
import AffordableWaste from './routes/What_We_Do/WhatWeDoPages/AffrordableWaste'
import ScrollToTop from './components/scrollTop'


function App() {


  return (
    <>
      {/* <CustomCursor /> */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="whatwedo" element={<WhatWeDo />} />
          <Route path="getinvolved" element={<GetInvolved />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="donate" element={<Donate/>} />
          <Route path="affordablewaste" element={<AffordableWaste/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
