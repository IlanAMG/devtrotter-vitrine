
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


  // toutes les ancres pour le scroll

  let accueil = useRef(null)
  let quisommesnous = useRef(null)
  let realisations = useRef(null)
  let nosoffres = useRef(null)
  let ecosysteme = useRef(null)
  let notreequipe = useRef(null)
  let nouscontacter = useRef(null)

  const scrollToRef = (ref) => {
    if (openNav) {
      setOpenNav(false)
      return setTimeout(() => {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth'
        })
      }, 1000)
    } else {
      return window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      })
    }
  }
  
  useEffect(hideLoader, []);

  useEffect(() => {
    direction.current = directionScroll
  }, [directionScroll])

  return (
    <Context.Provider value={{ direction, openNav, setOpenNav, scrollToRef, accueil, quisommesnous, realisations, nosoffres, ecosysteme, notreequipe, nouscontacter }}>
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
}, 2500)

