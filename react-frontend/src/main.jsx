import { createRoot } from 'react-dom/client';
import React from 'react';
import { ConfigProvider, App as AntdApp } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import 'simplebar-react/dist/simplebar.min.css';

import App from './App.jsx';
import './global.css';
import { themeConfig } from './themeConfig.js';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/">
        <ConfigProvider theme={themeConfig} locale={viVN}>
            <AntdApp>
                <App />
            </AntdApp>
        </ConfigProvider>
    </BrowserRouter>,
);
