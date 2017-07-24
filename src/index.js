import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server'
import router from 'react-router'
import App from './App';
import './index.css';


var ComponentFactory = React.createFactory(App)
router.get('/', function(req, res, next) {
    var markup = ReactDOMServer.renderToString(ComponentFactory());
    res.send(markup);
});
/**
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
 **/
