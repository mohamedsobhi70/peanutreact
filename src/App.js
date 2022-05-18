import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Bundles from "./components/Bundles/Bundles";
import Draws from "./components/Draws/Draws";
import Items from "./components/Items/Items";
import Tickets from "./components/Tickets/Tickets";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Cart from "./components/Cart/Cart";
import Account from "./components/Account/Account";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bundles">
            <Bundles />
          </Route>
          <Route path="/draws">
            <Draws />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
