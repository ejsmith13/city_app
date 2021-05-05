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
// import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <div className="App pageContainer">
          <div className="contentWrap">
            <Navbar />
            <Wrapper>
              <Route exact path="/" component={Landing} />
              <Route exact path={["/home"]} component={Home} />
              <Route exact path="/add" component={NewLocation} />
              <Route exact path="/list" component={List} />
              <Route exact path="/map" component={MapView} />
            </Wrapper>
          </div>
          <Footer className="footer" />
        </div>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
