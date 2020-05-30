
//librairies externes
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//styles
import './styles/App.css';
//context
import Context from './utils/context';
//pages
import { NotFoundPage } from './pages/404';
import { App } from './pages/App';
//utils
import { useScrollDirection } from './utils/useScrollDirection';

const Index = () => {
  const [opacityLoading, setOpacityLoading] = useState(false)
  const [loading, setLoading] = useState(false)
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
  
  // useEffect(hideLoader, []);

  useEffect(() => {
    direction.current = directionScroll
  }, [directionScroll])

  useEffect(() => {
    setTimeout(() => {
      setOpacityLoading(true)
    }, 3700)
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    setTimeout(() => {
      setLoading(true)
      setOpacityLoading(true)
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }, 5500)

  }, [])

  return (
    <Context.Provider value={{ loading, opacityLoading, direction, openNav, setOpenNav, scrollToRef, accueil, quisommesnous, realisations, nosoffres, ecosysteme, notreequipe, nouscontacter }}>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

  ReactDOM.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
    document.getElementById('root')
  );

