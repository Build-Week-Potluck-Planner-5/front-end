import { Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

import Dashboard from "./Components/Dashboard";
import MyPotlucks from "./Components/MyPotlucks"
import PotluckFood from "./Components/PotluckFood"
import CreatePotluck from "./Components/CreatePotluck"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Content />
        </Route>
        <Route path="/signup">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
      <Route path="/mypotlucks">
          <MyPotlucks />
      </Route>
      <Route path="/potluckinvites">
        <PotluckInvites/>
      </Route>
      <Route path='/createpotluck'>
        <CreatePotluck/>
      </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
