import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './app/router';
import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';
import { worker } from './mock/browser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Start MSW worker
worker.start({
  onUnhandledRequest: 'bypass',
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
        <AppRouter />
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
