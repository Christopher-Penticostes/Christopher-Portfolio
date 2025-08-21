import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './routes/About';
import Skills from './routes/Skills';
import Projects from './routes/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </>
  );
}

export default App;
