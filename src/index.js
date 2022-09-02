import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './redux/store';
import './index.css';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={Store}>
        <Router>
             <App />
        </Router>
     </Provider>
);
