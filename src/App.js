import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './Components/Welcome';
import Nav from './Components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';

function App() {
  // use this state to render for us the Welcome component first on the page, then we can change the state inside that component to render the Nav
 const [pageSelected, setPageSelected] = useState(false)

 return (
  <Router>
    {/* if useState if not true then display the Welcome component */}
    {!pageSelected ? 
    (<>
      <Welcome pageSelected={pageSelected} setPageSelected={setPageSelected}/>
    </>
    // else display the navbar
    ):(
      <Nav />
    )}
    <div>
      <Routes>
        <Route  path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  </Router>
 )
}

export default App;

