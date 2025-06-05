import { createRoot } from 'react-dom/client';
import React from 'react';
import { ConfigProvider } from 'antd';

import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './global.css';

createRoot(document.getElementById('root')).render(
    <ConfigProvider theme={{ token: { colorPrimary: '#c3551a' } }}>
        <React.Fragment>
            <App />
            <ToastContainer autoClose={2000} hideProgressBar />
        </React.Fragment>
    </ConfigProvider>,
);
