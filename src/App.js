import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar'
import Home from './pages/Home'
// import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { HomeRounded } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#cccccc',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


function App() {
  const classes = useStyles();



  return (



    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Navbar />


        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.container}>
            <Routes>
              <Route exact path="/" component={Home}/>
              {/* <Route exact path="/portfolio">
                <Portfolio />
              </Route> */}
              <Route exact path="/contact" component={Contact}/>
            </Routes>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;