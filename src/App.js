import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Route exact path="/" render={ () => <Login /> } />
      <Switch>
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </div>
  );
}

export default App;
