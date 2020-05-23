
//librairies externes
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//styles
import './styles/App.css';
//context
import Context from './utils/context';
//pages
import { index } from './pages/index';
import { NotFoundPage } from './pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={index} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
