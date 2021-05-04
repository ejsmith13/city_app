import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import NewLocation from "./pages/createNew";
import List from "./pages/listView";
import "./App.css";
import MapView from "./pages/mapView";
import Home from "./pages/home";
import Landing from "./pages/landing";

function App() {
  return (
    <Router>
      <div className="App pageContainer">
        <div className="contentWrap">
          <Navbar />
          <Wrapper>
            <Route exact path="/landing" component={Landing} />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/add" component={NewLocation} />
            <Route exact path="/list" component={List} />
            <Route exact path="/map" component={MapView} />
          </Wrapper>
        </div>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
