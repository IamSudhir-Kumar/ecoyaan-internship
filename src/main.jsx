import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Header'
import Home from './components/Home';
import About from './components/AboutUs';
import Footer from './components/Footer';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
)
