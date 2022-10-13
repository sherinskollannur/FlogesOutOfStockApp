import './App.css';
import Login from './components/login/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import AllProducts from './components/products/AllProducts';
import DeliveryList from './components/products/DeliveryList ';
import OutOfStock from './components/products/OutOfStock';

function App() {
  let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      {/* <AdminDashboard /> */}
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        {isAuthenticated && (
          <Route path="/admin_dashboard">
            <AdminDashboard />
          </Route>
        )}

        {isAuthenticated && (
          <Route path="/all_products">
            <AllProducts />
          </Route>
        )}

        {isAuthenticated && (
          <Route path="/delivery_list">
            <DeliveryList />
          </Route>
        )}

        {isAuthenticated && (
          <Route path="/out_of_stock">
            <OutOfStock />
          </Route>
        )}

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
