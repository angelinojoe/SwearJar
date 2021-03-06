import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './components/app/App';

const proxyStore = new Store({
  portName: 'swear'
});

const anchor = document.createElement('div');
anchor.id = 'anchor';

document.body.insertBefore(anchor, document.body.childNodes[0]);

render(
  <Provider store={proxyStore}>
    <App />
  </Provider>
  , document.getElementById('anchor'));
