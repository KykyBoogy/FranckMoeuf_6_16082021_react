import Home from "./pages/Home";
import React from 'react';
import { Route, Switch } from "react-router";
import Details from "./pages/Details";
// import LightBox from "./components/LightBox";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/photograph/:photographId" exact component={Details} />
      </Switch>
    </div>
  );
}

export default App;
