import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Route = () => {

  return (
    <BrowserRouter>
        <div>
            <Match exactly pattern="/" component={StorePicker} />
            <Match pattern="/store/:storeID" component={App} />
            <Miss component={NotFound} />
        </div>
    </BrowserRouter>
  );

};

render(<Route/>, document.querySelector('#main'));