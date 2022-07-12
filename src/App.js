import './App.css';
//import React, {useState } from 'react';
import Resume from './Resume';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Project from './Project';
import Contact from './Contact';
function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path='/' element={<Resume></Resume>}></Route>
        <Route exact path='/project' element={<Project></Project>}></Route>
        <Route exact path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
 
  </Router>
    </div>
  );
}

export default App;
