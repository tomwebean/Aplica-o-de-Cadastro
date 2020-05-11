import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Edit from './pages/Edit';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/logon" exact component={Logon} />

        <Route path="/" exact component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/edit" component={Edit} />

      </Switch>
    </BrowserRouter>
  );
}