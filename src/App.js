import './App.css';
import Header from './Header';
import Grid from '@mui/material/Grid';
import GeneCard from './Card';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import Content from './Content';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/contact' element={<Contact />}>Contact</Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
