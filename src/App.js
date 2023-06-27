import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import { Route, Routes } from 'react-router-dom';
import Resume from './Pages/Resume';

function App() {

  <script>
    AOS.init();
  </script>

  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project' element={<Projects></Projects>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
      </Routes>
    </>
  );
}

export default App;
