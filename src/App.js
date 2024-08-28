import './App.css';
import React from 'react';


import {Header,Main, Skills, Projects} from '../src/component/index'
import About from './component/about/About';


function App() {
  return (
         <>
          <Header />
          <Main />            
          <Skills/>
          <Projects />
          <About />

        </>   

)
 
}

export default App;
