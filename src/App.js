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
import PotluckInvites from "./Components/PotluckInvites"
import CreatePotluck from "./Components/CreatePotluck"
import PotluckInvites from "./Components/PotluckInvites"

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
      <Route path="/MyPotlucks">
          <MyPotlucks />
      </Route>
      <Route path="/potluckinvites">
        <PotluckInvites/>
      </Route>
      <Route path='/CreatePotluck'>
        <CreatePotluck/>
      </Route>
      <Route path="/PotluckInvites">
        <PotluckInvites />
      </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
