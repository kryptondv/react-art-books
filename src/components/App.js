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

const App = () => {
  return (
    <>
      <Topbar />
      <Sidecart />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/o-nas" component={AboutPage} />
        <Route exact path="/kontakt" component={ContactPage} />
        <Route exact path="/ksiazki" component={ProductsPage} />
        <Route exactpath="/ksiazki/:slug" component={SingleProductPage} />
        <Route exact path="/koszyk" component={CartPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
