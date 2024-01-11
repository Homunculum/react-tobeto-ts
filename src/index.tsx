import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from './contexts/AuthContext';
import { Provider } from 'react-redux';
import store from './store/configureStore';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <Provider store={store}>
  <AuthProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthProvider>
  </Provider>
);


