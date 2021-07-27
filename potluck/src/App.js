import { Switch, Link, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Registration from "./Components/Registration";
import Login from "./Components/Login";

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
          <MyPotlucks />
          <PotluckFood />
          <PotluckInvites />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
