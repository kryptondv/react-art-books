import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context/context';
import './styles/index.scss';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


