import React from "react";
import Main from "./components/Main";
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Sticker from "./components/Sticker";


function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/foundyoursticker">
          <Sticker />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
