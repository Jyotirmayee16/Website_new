import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/contact';
import Model1 from './Components/model1/model1';
import service from "./Components/Service/service";
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Gallery />

        {/* Uncomment the components you want to render */}
        {/* <Contact /> */}
        {/* <Model1 /> */}
        {/* <Menuitem /> */}

        {/* Define your routes */}
        <Route path="/model1" component={Model1} />
        {/* <Route path="/blog" component={Blog} /> */}
         <Route path="/service" component={service} /> 
        {/* <Route path="/blog" component={Blog} /> */}
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default App;
