import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Wrapper from "./components/Wrapper";
import Footer from './components/Footer'
import NewLocation from './pages/createNew'
import List from './pages/listView'
import './App.css';
import MapView from './pages/mapView';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Wrapper>
     <Route exact path = "/add" component={NewLocation} />
     <Route exact path = "/list" component={List} />
     <Route exact path = "/map" component ={MapView} />
     </Wrapper>
     
     <Footer/>
     
    </div>
    </Router>
  );
}

export default App;
