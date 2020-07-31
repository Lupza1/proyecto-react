import React from 'react';
import Login from './components/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Main from './components/main';
import Cart from './components/cart';
import User from './components/prod';
import Nf404 from './components/404';
function App() {
  return (
      <Router>
      <div className="btn-group">
        <Link to="/main" className="btn btn-light">
          Catalogo
        </Link>
        <Link to="/cart" className="btn btn-light">
          Carrito
        </Link>
        <Link to="/" className="btn btn-light">
          Cerrar sesion
        </Link>
      </div>
        <Switch>
          <Route path="/cart/:id">
            <User />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/**">
            <Nf404 />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
