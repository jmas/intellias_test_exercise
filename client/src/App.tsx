import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProductsListPage from './pages/ProductsListPage';
import ProductsDetailsPage from './pages/ProductDetailsPage';

function App() {  
  return (
    <Router>
      <Switch>
        <Route path="/products/:productId" component={ProductsDetailsPage} />
        <Route path="/" component={ProductsListPage} />
      </Switch>
    </Router>
  );
}

export default App;
