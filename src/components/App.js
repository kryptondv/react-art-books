import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import SingleProductPage from '../pages/SingleProductPage';
import Topbar from './Topbar';
import Sidecart from './Sidecart';
import Footer from './Footer';

function App() {
  return (
    <>
      <Topbar />
      <Sidecart />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/o-nas" component={AboutPage} />
        <Route path="/kontakt" component={ContactPage} />
        <Route exact path="/ksiazki" component={ProductsPage} />
        <Route path="/ksiazki/:slug" component={SingleProductPage} />
        <Route path="/koszyk" component={CartPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
