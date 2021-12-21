import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GitRepo from './components/GitRepo';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/git" element={<GitRepo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
