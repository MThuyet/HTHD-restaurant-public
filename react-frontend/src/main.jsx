import { createRoot } from 'react-dom/client';
import React from 'react';
import { ConfigProvider, App as AntdApp } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import 'simplebar-react/dist/simplebar.min.css';

import App from './App.jsx';
import './global.css';
import { themeConfig } from './themeConfig.js';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/">
        <ConfigProvider theme={themeConfig} locale={viVN}>
            <AntdApp>
                <UserProvider>
                    <QueryClientProvider client={queryClient}>
                        <App />
                        <ReactQueryDevtools initialIsOpen={false} />
                    </QueryClientProvider>
                </UserProvider>
            </AntdApp>
        </ConfigProvider>
    </BrowserRouter>,
);
