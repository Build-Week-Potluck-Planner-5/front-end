import { Switch, Link, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import PotluckFood from "./Components/PotluckFood";

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
          {/* <MyPotlucks /> */}
          <PotluckFood />
          {/* <PotluckInvites />  */}
          {/* <CreatePotluck /> */}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
