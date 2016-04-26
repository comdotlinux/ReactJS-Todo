import './stylesheets/main.css';
import './stylesheets/bootstrap.css';
import './stylesheets/bootstrap-theme.css';

import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';

(function() {
  var app = document.createElement('div');
  document.body.appendChild(app);

  ReactDOM.render(<App/>, app);
})();

