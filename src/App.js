import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Header />
        <Switch>
            <Route 
              exact 
              path="/" 
              component={(props) => <Home 
                {...props}
              />}
            />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
