import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Index from './Components/Home';
import Nav from './Components/Navbar';
import Project from './Components/Project';
import Blogs from './Components/Sercices/Blogs';
import Services from './Components/Sercices/Services';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/blogs' element={<Blogs/>} />
      </Routes>
    </div>
  );
}

export default App;
