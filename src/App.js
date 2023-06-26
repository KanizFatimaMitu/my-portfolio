import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Navbar from './Shareable/Navbar';
import Footer from './Shareable/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default App;
