import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <div className='container'>
      <App />
    </div>
  </Provider>,
  document.getElementById('root'));
