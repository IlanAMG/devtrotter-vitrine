
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
import { Packs } from './pages/Packs';
import { Prestations } from './pages/Prestations';

const Index = ( props ) => {
  const [pageActuel, setPageActuel] = useState([true, false, false, false, false, false, false])
  const [opacityLoading, setOpacityLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const [location, setLocation] = useState(null)
  const [prevLocation, setPrevLocation] = useState(null)

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

  const refInPage = () => {
    if (accueil.current !== null && location === '/') {
      const accueilRefY = accueil.current.getBoundingClientRect().y
      const accueilRef = accueil.current.getBoundingClientRect().bottom
      const quisommesnousRefY = quisommesnous.current.getBoundingClientRect().y
      const quisommesnousRef = quisommesnous.current.getBoundingClientRect().bottom
      const realisationsRefY = realisations.current.getBoundingClientRect().y
      const realisationsRef = realisations.current.getBoundingClientRect().bottom
      const nosoffresRefY = nosoffres.current.getBoundingClientRect().y
      const nosoffresRef = nosoffres.current.getBoundingClientRect().bottom
      const ecosystemeRefY = ecosysteme.current.getBoundingClientRect().y
      const ecosystemeRef = ecosysteme.current.getBoundingClientRect().bottom
      const notreequipeRefY = notreequipe.current.getBoundingClientRect().y
      const notreequipeRef = notreequipe.current.getBoundingClientRect().bottom

      const clonePageActuel = [...pageActuel]

      if (accueilRef > 80 && accueilRefY < 80) {
        clonePageActuel[0] = true
      } else {
        clonePageActuel[0] = false
      }
      if (quisommesnousRef > 80 && quisommesnousRefY < 80) {
        clonePageActuel[1] = true
      } else {
        clonePageActuel[1] = false
      }
      if (realisationsRef > 80 && realisationsRefY < 80) {
        clonePageActuel[2] = true
      } else {
        clonePageActuel[2] = false
      }
      if (nosoffresRef > 80 && nosoffresRefY < 80) {
        clonePageActuel[3] = true
      } else {
        clonePageActuel[3] = false
      }
      if (ecosystemeRef > 80 && ecosystemeRefY < 80) {
        clonePageActuel[4] = true
      } else {
        clonePageActuel[4] = false
      }
      if (notreequipeRef > 150 && notreequipeRefY < 80) {
        clonePageActuel[5] = true
      } else {
        clonePageActuel[5] = false
      }
      if (!clonePageActuel[0] && !clonePageActuel[1] && !clonePageActuel[2] && !clonePageActuel[3] && !clonePageActuel[4] && !clonePageActuel[5]) {
        clonePageActuel[6] = true
      } else {
        clonePageActuel[6] = false
      }
      setPageActuel(clonePageActuel)
    }
  }

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(refInPage, 800)

  useEffect(() => {
    if (loading && location === '/' && prevLocation !== '/404') {
      window.scrollTo({
        top: nosoffres.current.offsetTop
      })
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, prevLocation])

  useEffect(() => {
      window.addEventListener("load", function (event) {
        setTimeout(() => {
          setOpacityLoading(true)
        }, 3400)
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
  
        setTimeout(() => {
          setLoading(true)
          document.body.style.overflow = 'unset';
          document.body.style.height = 'auto';
        }, 3900)
      });
  }, [])

  useEffect(() => {
    return () => window.removeEventListener("load", function (event) {
      console.log("Finish");
    });
  }, [])

  return (
    <Context.Provider value={{ setPrevLocation, setLoading, setOpacityLoading, setLocation, pageActuel, setPageActuel, loading, opacityLoading, openNav, setOpenNav, scrollToRef, accueil, quisommesnous, realisations, nosoffres, ecosysteme, notreequipe, nouscontacter }}>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/404" component={NotFoundPage} />
          <Route path="/packs" component={Packs} />
          <Route path="/prestations" component={Prestations} />
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

