
//librairies externes
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//styles
import './styles/App.css';
//context
import Context from './utils/context';
//pages
import { index } from './pages/index';
import { NotFoundPage } from './pages/404';
//utils
import { useScrollDirection } from './utils/useScrollDirection';

const loader = document.querySelector('.loader');
const hideLoader = () => loader.classList.add('loader--hide');

const App = ({ hideLoader }) => {
  const [openNav, setOpenNav] = useState(false)
  let direction = useRef('')
  const directionScroll = useScrollDirection()
  
  useEffect(hideLoader, []);

  useEffect(() => {
    direction.current = directionScroll
  }, [directionScroll])

  return (
    <Context.Provider value={{ direction, openNav, setOpenNav }}>
      <Router>
        <Switch>
          <Route exact path='/' component={index} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

setTimeout(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App hideLoader={hideLoader} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1500)

