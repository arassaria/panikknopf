import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Impressum from "./pages/Impressum";
import Dates from "./pages/Dates";
import Band from "./pages/Band";
import Contact from "./pages/Contact";
import Discography from "./pages/Discography";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>PANIKKNOPF</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/band">Band</Link>
          <Link to="/discography">Diskografie</Link>
          <Link to="/dates">Termine</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/impressum">Impressum</Link>
          <Link to="/privacy">Datenschutz</Link>
        </div>
        <Switch>
          <Route path="/privacy">{Privacy()}</Route>
          <Route path="/impressum">{Impressum()}</Route>
          <Route path="/contact">{Contact()}</Route>
          <Route path="/dates">{Dates()}</Route>
          <Route path="/discography">{Discography()}</Route>
          <Route path="/Band">{Band()}</Route>
          <Route path="/">{Home()}</Route>
        </Switch>
        <iframe
          src="https://open.spotify.com/embed/artist/2oqWyM5nENqrWlO1RsSwzn"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          title="spotify"
        ></iframe>
      </Router>
    </div>
  );
}

export default App;
