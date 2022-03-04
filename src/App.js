import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import WhiteFilling from './components/pages/WhiteFilling';
import RootCanal from './components/pages/RootCanal';
import FloatingWhatsappButton from './components/FloatingWhatsappButton/FloatingWhatsappButton';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/WhiteFilling' component={WhiteFilling} />
          <Route path='/Root-Canals' component={RootCanal} />
        </Switch>
        <FloatingWhatsappButton />
      </Router>
    </>
  );
}

export default App;