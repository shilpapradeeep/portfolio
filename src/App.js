import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/index.js';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index  element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="resume" element={<Resume />} />
        <Route path="services" element={<Services />} />
        <Route path="skills" element={<Skills />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
