import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as router} from 'react-router-dom';

ReactDOM.render(
<router>
<Provider store={store}><App /></Provider> 
</router>,
document.getElementById('root'));
registerServiceWorker();

