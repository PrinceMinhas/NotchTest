import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';

import createFilterStore from './store';
import getTableData from './Client';

getTableData()
.then(res => res.json())
.then(function(result) {
	const store = createFilterStore(result);
	store.dispatch({ type: 'reset'});
	ReactDOM.render(
	  <React.StrictMode>
	    <Provider store={store}>
	      <App />
	    </Provider>
	  </React.StrictMode>,
	  document.getElementById('root')
	);
})