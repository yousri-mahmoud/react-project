import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./pages/Counter";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import ProductsList from "./pages/ProductsList";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Todo from "./pages/todo/Todo";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/products">
            <ProductsList />
          </Route>
          <Route path="/product/:id">
            <ProductDetail />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
