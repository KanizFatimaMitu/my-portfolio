import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import { Route, Routes } from 'react-router-dom';
import Resume from './Pages/Resume';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Shareable/Navbar';
import Footer from './Shareable/Footer';
import NotFound from './Pages/NotFound';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project' element={<Projects></Projects>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
