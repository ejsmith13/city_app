import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Wrapper from "./components/Wrapper";
import Footer from './components/Footer'
import NewLocation from './pages/createNew'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Wrapper>
     <h1>Initial Test</h1>
     <Route exact path = "/add" component={NewLocation} />
     </Wrapper>
     
     <Footer/>
     
    </div>
    </Router>
  );
}

export default App;
