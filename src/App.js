import React from 'react';
import './App.css';
import Hero from "./components/Hero/hero";
import OurServices from './components/ourServices/ourServices';
import Review from './components/review/review';

function App() {
  return (
    <div>
     <Hero />
     <OurServices />
     <Review />
    </div>
  );
}

export default App;
