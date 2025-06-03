import { createRoot } from 'react-dom/client';
import React from 'react';

import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
    <React.Fragment>
        <App />
        <ToastContainer autoClose={3000} theme="colored" />
    </React.Fragment>,
);
