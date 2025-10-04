import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './app/router';
import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
      <AppRouter />
    </ConfigProvider>
  </React.StrictMode>
);
