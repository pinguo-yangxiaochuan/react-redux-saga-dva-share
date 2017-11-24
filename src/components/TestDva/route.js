import React from 'react';
import { Switch, Redirect, Route, Router } from 'dva/router';
import ContainerCom from './ContainerCom';

export default ({ history }) => {
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/dva" component={ContainerCom} />
      </Switch>
    </Router>
  )
}